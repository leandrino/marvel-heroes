import deepFreeze from "deep-freeze";
import heroes from "./index";
import { HERO, LIST_HEROES, PAGINATION } from "./actions";

describe("Heroes Reducer", () => {
  it("should list heroes", () => {
    const before = deepFreeze({});
    const action = deepFreeze({ type: LIST_HEROES, payload: [{ id: 1 }] });
    const after = { list: [{ id: 1 }] };

    expect(heroes(before, action)).toEqual(after);
  });

  it("should fill pagination data", () => {
    const before = deepFreeze({});
    const action = deepFreeze({
      type: PAGINATION,
      payload: {
        count: 1,
        limit: 1,
        offset: 1,
        total: 1
      }
    });
    const after = {
      pagination: {
        count: 1,
        limit: 1,
        offset: 1,
        total: 1
      }
    };

    expect(heroes(before, action)).toEqual(after);
  });
  it("should store a hero", () => {
    const before = deepFreeze({});
    const action = deepFreeze({ type: HERO, payload: { id: 1 } });
    const after = { hero: { id: 1 } };

    expect(heroes(before, action)).toEqual(after);
  });
});
