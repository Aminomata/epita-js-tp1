/* FIXME:
 *
 * export a function that removes a single element from the store.
 *
 * Rules:
 * - you must use the functions from "../store"
 *
 */

import { setState, getState } from "../store";

const remove = index => {
  const state = getState().slice();
  state.splice(index, 1);
  setState(state);
};

export default remove;
