import { LOAD_POKE } from './types';
import { callPokeAPI } from './Poke/sagas';
import { takeEvery } from 'redux-saga/effects';

function* rootSagas () {
    yield takeEvery(LOAD_POKE, callPokeAPI);
}

export default rootSagas;
