import Http from "../../commons/Http";

const urlPath = "/characters";

export const listHeroesService = () => {
  return Http.get({ url: urlPath });
};
