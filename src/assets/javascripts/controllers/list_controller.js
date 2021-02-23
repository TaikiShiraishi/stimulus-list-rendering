import { Controller } from 'stimulus'

export default class extends Controller {
  initialize() {
    this.fetchResource()
  }

  fetchResource() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => this.listReder(json))
  }

  listReder(json) {
    const markup = `
    ${json
      .map(
        (post) => `
      <li>
        <p>${post.id}</p>
        <p>${post.title}</p>
        <p>${post.body}</p>
      </li>
    `
      )
      .join('')}`
    this.element.insertAdjacentHTML('afterbegin', markup)
  }
}
