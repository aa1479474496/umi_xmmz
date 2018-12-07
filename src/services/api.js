import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryTabs() { // 首页tabs
  let params = {
    act: 'index',
    op: 'tabs',
    client_type: 'ios'
  }
  return request(`/api?${stringify(params)}`) 
}

export async function queryTabsContent(params) { // 点击首页tabs内容
  let newParams = {
    act: 'special',
    op: 'index',
    client_type: 'ios',
    ...params
  }
  return request(`/api?${stringify(newParams)}`)
}

export async function bonus() {
  let params = {
    act: 'bonusex',
    op: 'open',
    type_sn: '26891541696616979032',
    // type_sn: '26891541696616979033',
    client_type: 'ios'
  }
  return request(`/api?${stringify(params)}`) 
}