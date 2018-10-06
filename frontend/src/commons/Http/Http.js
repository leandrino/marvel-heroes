import axios from "axios";

import HttpRequestSetup from "./HttpRequestSetup";
import HttpResponseSuccessHandler from "./HttpResponseSuccessHandler";
import HttpResponseErrorHandler from "./HttpResponseErrorHandler";

const requester = axios.create({
  baseURL: ''
});

requester.interceptors.request.use(HttpRequestSetup);
requester.interceptors.response.use(
  HttpResponseSuccessHandler,
  HttpResponseErrorHandler
);

const Http = {
  get: ({ url, header }) => {
    return requester({ method: "get", url, header })
      .then(result => result.data.data)
      .catch(error => console.log(error));
  }
};

export default Http;
