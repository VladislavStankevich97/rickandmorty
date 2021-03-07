import { takeEvery, put, call } from "redux-saga/effects";
import { putCharacters } from "../actions/loadAndPutCharacters";
import { LOAD_CHARACTERS } from "../actions/constants";

const fetchData = (page, status) => {
  console.log(page, status);
    return fetch(
      `https://rickandmortyapi.com/api/character?page=${page}${status ?`&status=${status}`:''}`
    ).then((respone) => respone.json());
};

function* workerLoadData({ page, status }) {
  const data = yield call(fetchData, page, status);
  yield put(putCharacters(data));
  console.log(data);
}

export default function* watchLoadData() {
  yield takeEvery(LOAD_CHARACTERS, workerLoadData);
}
