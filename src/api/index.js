
import axios from 'axios'
export default function ajax (url, data, type) {
  return new Promise(function (resolve, reject) {
    let promise // 这个内部的promise用来保存axios的返回值(promise对象)
    if (type === 'GET') {
      let dataStr = '' // 数据拼接字符串，将data连接到url
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      let token = localStorage.getItem('token')
      promise = axios.post(url, data, {headers: {'Content-Type': 'text/plain'}})
    }
    promise.then(response => {
      // 成功回调resolve()
      resolve(response.data)
    })
      .catch(error => {
        // 失败回调reject()
        reject(error)
      })
  })
}
