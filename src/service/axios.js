import axios from 'axios';


// api 接口
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/api';
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'https://localhost:8080/api/';
}
// 超时时间
axios.defaults.timeout = 10000;
//Request header information is set for post request
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//Request interceptor
axios.interceptors.request.use(
    config => {
        //Determine whether there is a token before each request is sent
        //If there is a token in the header of the HTTP request, the background will judge your login according to the token. Here, the token is usually saved in the local storage after the user completes the login.
        //   token && (config.headers.Authorization = token)
        return config
    },
    error => {
        return Promise.error(error)
    })
//Response interceptor
axios.interceptors.response.use(response => {
    //If the returned status code is 200, the interface request is successful and the data can be obtained normally.
    //Otherwise, an error will be thrown.
    if (response.status === 200) {
        if (response.data.code === 511) {
            //Unauthorized access to authorized interface
        } else if (response.data.code === 510) {
            //No login to jump to login page
        } else {
            return Promise.resolve(response)
        }
    } else {
        return Promise.reject(response)
    }
}, error => {
    //We can handle the abnormal state uniformly here
    if (error.response.status) {
        //Failure to process request
        //Corresponding processing for different return codes
        return Promise.reject(error.response)
    }
})


//Get request
export function httpGet({
    url,
    params = {}
}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params
        }).then((res) => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}



//Post request
export function httpPost({
    url,
    data = {},
    params = {}
}) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'post',
            transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],
            //Data sent
            data,
            // url parameter
            params

        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

//update request 

export function httpUpdate({url, data , params}) {
    return new Promise((resolve, reject) => {
        data = data || {};
        params = params || null;
        axios({
            url,
            method: 'put',
            data,
            params
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function httpDelete({url, params}) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'delete',
            params
        }).then((res)=> {
            resolve(res);
        }).catch((err) =>{
            reject(err);
        })
    })
    
}