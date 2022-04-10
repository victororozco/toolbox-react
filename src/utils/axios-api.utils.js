'use strict'
import axios from 'axios'
import { toolbox_url, toolbox_pk } from '../config'

/**
 * 
 * @param {Object} options route, method, etc
 * @param {Number} numRetries Integer
 * @returns axios instance
 */
const axiosAPI = (options, numRetries = 3) => {
  const instance = axios.create({
    headers: {
      "Authorization" : `Bearer ${toolbox_pk}`,
    },
    withCredentials: true,
    baseURL: `${toolbox_url}/`,
    ...options
  })

  const retryRequest = (milliSeconds = 0, requestConfig) =>  new Promise((resolve, reject) => {
    setTimeout(() => resolve(instance(requestConfig)), milliSeconds)
  })

  instance.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
  );

  instance.interceptors.response.use(
    response => response,
    error => {
      const { config, response: { status }} = error

      const retryStatusCodes = [503, 504]
      if (retryStatusCodes.includes(status) && numRetries > 0) {
        numRetries -= 1
        return retryRequest(0, config)
      }

      return Promise.reject(error)
    }
  )

  return instance
}

export default axiosAPI

