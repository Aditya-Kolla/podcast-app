import config from '../config'

class API {
  static signin (username, password) {
    return fetch(API.signinUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    }).then(resp => resp.json())
  }

  static signup (username, password) {
    return fetch(API.signupUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    }).then(resp => resp.json())
  }

  static getUser (token = localStorage.getItem('token')) {
    return fetch(API.userUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then(resp => resp.json())
  }

  static queueEpisode (episode, token = localStorage.getItem('token')) {
    return fetch(API.queueEpisodeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({ episode })
    }).then(resp => resp.json())
  }

  static unqueueEpisode (id, token = localStorage.getItem('token')) {
    return fetch(API.unqueueEpisodeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({ id })
    }).then(resp => resp.json())
  }
}

API.baseUrl = config.baseApiUrl
API.userUrl = API.baseUrl + '/user'
API.signinUrl = API.baseUrl + '/signin'
API.signupUrl = API.baseUrl + '/signup'
API.queueEpisodeUrl = API.baseUrl + '/queue_episode'
API.unqueueEpisodeUrl = API.baseUrl + '/unqueue_episode'

window.API = API

export default API