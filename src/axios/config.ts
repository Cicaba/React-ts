import * as Axios from 'axios';
Axios.interceptors.request.use((config: any) => {
  // // 这里写死一个token，你需要在这里取到你设置好的token的值
  // const token = localStorage.getItem('token');
  // if (token) {
  //   // 这里将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
  //   config.headers.Authorization = token;
  // }
  // config.baseURL = '/AppUi';
  config.withCredentials = true; //允许携带cookie允许携带cookie
  config.timeout = 10000; // 请求的超时时间
  return config;
},
  (error: any) => {
    return Promise.reject(error);
  });
Axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          location.hash = '/';
        //过期验证
        // case 404:
        //   if (error.request.responseURL.includes('/Account?ReturnUrl=')) {
        //     Axios.post('/app/svapp/UserInfo').then(res => {
        //       store.commit('setUser', res.data.data);
        //       vue.$message({
        //         type: 'error',
        //         message: '请重新操作!!!'
        //       });
        //     });
        //   }
      }
    }
    return Promise.reject(error); // 返回接口返回的错误信息
  });
export default Axios;