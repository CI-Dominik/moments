import axios from 'axios'

axios.defaults.baseURL = 'https://ci-dominik-moments-drf-api-99e62332b100.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;