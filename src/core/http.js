import axios from "axios"
import global from '@/utils/base'

/**
// fetch get
const sampleUrl = 'https://jsonplaceholder.typicode.com/todos'
fetch(sampleUrl)
  .then( (res) => {
    // console.log('test fetch sample >>> ', res.json())
    console.log('test fetch.get sample >>> ', res)
  })

// axios get
axios.get(sampleUrl)
  .then((res) => {
    console.log('test axios.get sample >>> ', res)
  })
// axios post1 
axios.post(sampleUrl, {
    headers: { 'Content-Type': 'application/json' },
    data: { 
      title: "A new todo",
      completed: false,
      v1: 'test123456789',
    },
  })
  .then((res) => {
    console.log('test axios.post1 sample >>> ', res)
  })
*/

const HTTP_NULL = null
const HTTP_SUCCESS = 'success'
const REQUEST_ERRORS = 1 
const REQUEST_SUCCESS = 0 

// start axios service
function resHandler (res) {
  // console.log('resHandler >>> ', res)
  // console.log('resHandler global >>> ', global)
  const code = res.data.code
  const status = res.status
  const statusMessage = res.statusText
  let httpStatus = code ? code: status
  let returnMsg = HTTP_NULL 

  // console.log('resHandler code >>> ', code)
  // console.log('resHandler status >>> ', status)
  // console.log('resHandler statusMessage >>> ', statusMessage)
  // console.log('resHandler httpStatus >>> ', httpStatus, typeof httpStatus)
  // httpStatus = 500 
  switch (httpStatus) {
    case 0:
    case 200:
    case 201:
    case REQUEST_SUCCESS:
      returnMsg = HTTP_SUCCESS 
      break

    case 404:
      // console.log('resHandler run 404.')
      global.self.$router.push({ name: '404' }) 
      break

    case 1:
    case 500:
    case REQUEST_ERRORS:
      // console.log('resHandler run 500.')
      global.self.$msg(statusMessage)
      global.self.$router.push({ name: '500' }) 
      break

    default:
      global.self.$msg(statusMessage)
      // console.log('resHandler run default.')
      break
  }
  // console.log('resHandler returnMsg >>> ', returnMsg)
  return returnMsg
}

const APITIMEOUT = 20 * 1000 
const apiBaseUrl = 'https://jsonplaceholder.typicode.com/todos'
const instance = axios.create({
  method: 'POST',
  baseURL: apiBaseUrl,
  timeout: APITIMEOUT,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 請求API處理
instance.interceptors.request.use(config => {
  console.log('instance.interceptors.request >>> ', config)
  return config
}, error => {
  // eslint-disable-next-line no-undef
  return Promise.reject(error)
})

// 回應攔截處理
instance.interceptors.response.use( res => {
  const handleRes = resHandler(res)
  console.log('instance.interceptors.response >>> ', res, handleRes)
  if (handleRes) return res.data
  else return null
}, error => {
})

// const res = instance.post('', {
//   title: "test instance post",
//   completed: false,
//   v1: 'test post',
// })
// console.log('ttttt test res >', res, JSON.stringify(res))

export async function API (params, callback) {
  const res = await instance.post('', params) 
  if (callback) callback(res)
}
