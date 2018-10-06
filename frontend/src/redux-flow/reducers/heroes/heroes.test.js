import deepFreeze from "deep-freeze";
import heroes from "./index";
import { LIST_HEROES } from "./actions";

describe("Heroes Reducer", () => {
  it("should be truth when enter on component", () => {
    const before = deepFreeze({});
    const action = deepFreeze({ type: LIST_HEROES, payload: [{ id: 1 }] });
    const after = { list: [{ id: 1 }] };

    expect(heroes(before, action)).toEqual(after);
  });
});
