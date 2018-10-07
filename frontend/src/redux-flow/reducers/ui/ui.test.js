import deepFreeze from "deep-freeze";
import ui from "./index";
import { FETCHING_HEROES } from "./actions";

describe("UI Reducer", () => {
  it("should toggle fetching hero reducer", () => {
    const before = deepFreeze({ fetchingHeroes: false });
    const action = deepFreeze({ type: FETCHING_HEROES });
    const after = { fetchingHeroes: true };

    expect(ui(before, action)).toEqual(after);
  });
});
