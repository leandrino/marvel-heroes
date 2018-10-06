const HttpResponseErrorHandler = (error) => {
  return Promise.reject(error);
};

export default HttpResponseErrorHandler;
