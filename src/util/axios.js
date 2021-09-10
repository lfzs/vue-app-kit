import axios from 'axios'
import { getErrorMessage } from '@/util'
import { baseURL } from '@/env'
import router from '@/router'
import { authStore } from '@/store'

axios.defaults.baseURL = baseURL
axios.defaults.timeout = 60000
axios.interceptors.request.use(handleRequest)
axios.interceptors.response.use(handleResponse, handleResponseError)

function handleRequest(request) {
  return request
}

function handleResponse(response) {
  return response.data
}

async function handleResponseError(error) {
  const { response: { data, status }, config: { showErrorToast = true } } = error // showErrorToast：请求出错是否需要 toast 提示

  if (status === 401) {
    authStore.setNext(location.href)
    await router.replace({ path: 'signin' })
  } else {
    // eslint-disable-next-line no-alert
    showErrorToast && alert(getErrorMessage(data)) // TODO
  }

  return Promise.reject(data)
}

export default axios
