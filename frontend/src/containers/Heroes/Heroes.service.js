import Http from "../../commons/Http";

const urlPath = "/characters";

export const listHeroesService = (limit = 10, offset = 0, term = '') => {
  const query = term
    ? `${urlPath}?limit=${limit}&offset=${offset}&nameStartsWith=${term}&`
    : `${urlPath}?limit=${limit}&offset=${offset}&`
  return Http.get({ url: query });
};

export const getHeroService = id => {
  return Http.get({ url: `${urlPath}/${id}?` });
};
