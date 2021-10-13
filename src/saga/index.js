import { all } from "@redux-saga/core/effects";
import { countWatcher } from "./countSaga";
import { userWatcher } from "./userSaga";

// export const rootWatcher = all({
//   countWatcher,
//   userWatcher
// });

export function* rootWatcher() {
  yield all([countWatcher(), userWatcher()]);
}