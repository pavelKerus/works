export const OPEN_FILTER = "OPEN_FILTER";
export const CLOSE_FILTER = "CLOSE_FILTER";

export interface FilterAction {
  type: "OPEN_FILTER" | "CLOSE_FILTER";
}

export const openFilterAction = (): FilterAction => {
  return {
    type: OPEN_FILTER,
  };
};

export const closeFilterAction = (): FilterAction => {
  return {
    type: CLOSE_FILTER,
  };
};
