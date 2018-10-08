import Http from "../../commons/Http";

const urlPath = "/characters?";

export const listHeroesService = (limit = 10, offset = 0) => {
  return Http.get({ url: `${urlPath}limit=${limit}&offset=${offset}&` });
};
