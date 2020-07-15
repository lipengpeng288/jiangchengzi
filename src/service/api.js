import {httpGet, httpPost, httpDelete} from './axios';

export const getDepartment = (params = {}) => httpGet({ url: '/department', params })
export const createDepartment = ({data = {}, params = {}}) => httpPost({url: '/department', data, params});
export const deleteDepartment = (params = {}) => httpDelete({url: '/department', params})