import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser], //you can pass these input selectors in successive order instead of in an array - it doesn't make a difference
  (user) => user.currentUser
);
