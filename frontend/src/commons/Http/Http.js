import axios from "axios";

import HttpRequestSetup from "./HttpRequestSetup";
import HttpResponseSuccessHandler from "./HttpResponseSuccessHandler";
import HttpResponseErrorHandler from "./HttpResponseErrorHandler";
import { MARVEL_API_KEY, MARVEL_API_PATH } from "../../constants";

const apiKey = MARVEL_API_KEY;

const requester = axios.create({
  baseURL: MARVEL_API_PATH
});

requester.interceptors.request.use(HttpRequestSetup);
requester.interceptors.response.use(
  HttpResponseSuccessHandler,
  HttpResponseErrorHandler
);

const Http = {
  get: ({ url, header }) => {
    return requester({ method: "get", url: `${url}apikey=${apiKey}`, header })
      .then(result => result.data.data)
      .catch(error => console.log(error));
  }
};

export default Http;
