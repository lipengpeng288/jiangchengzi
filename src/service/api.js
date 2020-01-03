import {httpGet} from './axios';

export const getAsset = (params = {}) => httpGet({ url: '/inventory/asset', params })