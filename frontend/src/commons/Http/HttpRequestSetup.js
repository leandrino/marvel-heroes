const HttpRequestSetup = config => {
  const requestHeaders = {};

  return Object.assign(config, { ...requestHeaders });
};

export default HttpRequestSetup;