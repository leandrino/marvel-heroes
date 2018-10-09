import {
  getHeroService,
  listHeroesService
} from "../../../containers/Heroes/Heroes.service";
import { HERO, LIST_HEROES, PAGINATION } from "./actions";
import { FETCHING_HEROES } from "../ui/actions";
import { push } from "connected-react-router";

export const fetchHeroesList = (limit, offset, term) => async dispatch => {
  dispatch({ type: FETCHING_HEROES });
  const response = await listHeroesService(limit, offset, term);
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
  dispatch(push("/heroes"));
  dispatch({ type: FETCHING_HEROES });
};

export const getHeroDetails = id => async dispatch => {
  dispatch({ type: FETCHING_HEROES });
  const response = await getHeroService(id);
  dispatch({ type: HERO, payload: response.results[0] });
  dispatch(push(`/heroes/${id}`));
  dispatch({ type: FETCHING_HEROES });
};
