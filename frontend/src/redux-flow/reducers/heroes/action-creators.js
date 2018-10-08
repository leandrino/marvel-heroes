import { listHeroesService } from "../../../containers/Heroes/Heroes.service";
import { LIST_HEROES, PAGINATION } from "./actions";
import { FETCHING_HEROES } from "../ui/actions";

export const fetchHeroesList = (limit, offset) => async dispatch => {
  dispatch({ type: FETCHING_HEROES });
  const response = await listHeroesService(limit, offset);
  dispatch({ type: LIST_HEROES, payload: response.results });
  dispatch({
    type: PAGINATION,
    payload: {
      count: response.count,
      limit: response.limit,
      offset: response.offset,
      total: response.total
    }
  });
  dispatch({ type: FETCHING_HEROES });
};
