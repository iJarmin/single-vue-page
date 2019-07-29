import ajax from './index'
import { BASE_URL } from './url'
export const ERR_OK = '200000'
// 分类列表初始化
export const resInit = (param) => ajax(BASE_URL + '/getData', param, 'POST')
