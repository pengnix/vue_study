import axios from "axios";

export function request(config) {
  const instance = axios.create({
    // baseURL: "http://123.207.32.32:8000",
    baseURL: "http://152.136.185.210:8000/api/z8",
    timeout: 5000
  });

  instance.interceptors.request.use(
    config => {
      // console.log(config);
      return config;
    },
    err => console.log(err)
  );
  instance.interceptors.response.use(
    config => {
      // console.log(config);
      return config.data;
    },
    err => console.log(err)
  );

  return instance(config);
}
