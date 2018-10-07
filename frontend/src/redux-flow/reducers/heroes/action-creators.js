import { listHeroesService } from "../../../containers/Heroes/Heroes.service";
import { LIST_HEROES } from "./actions";
import { FETCHING_HEROES } from "../ui/actions";

export const fetchHeroesList = () => async dispatch => {
  dispatch({ type: FETCHING_HEROES });
  const response = await listHeroesService();
  dispatch({ type: LIST_HEROES, payload: response.results });
  dispatch({ type: FETCHING_HEROES });
};
