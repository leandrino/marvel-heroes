const HttpRequestSetup = config => {
  const userToken = '';

  const requestHeaders = {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  };

  return Object.assign(config, { ...requestHeaders });
};

export default HttpRequestSetup;