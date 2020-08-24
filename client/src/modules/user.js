import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import produce from 'immer';


const TEMP_SET_USER = 'user/TEMP_SET_USER';

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
    'user/CHECK',
);
const [UPDATE, UPDATE_SUCCESS, UPDATE_FAILURE] = createRequestActionTypes(
    'user/CHECK',
);

const CHANGE_FIELD = 'user/CHANGE_FIELD';

const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const update = createAction(UPDATE, ({ 
    SHILLA_id,
    SHILLA_password,
    LOTTE_id,
    LOTTE_password,
    SHINSEGAE_id,
    SHINSEGAE_password  }) => ({
        SHILLA_id,
        SHILLA_password,
        LOTTE_id,
        LOTTE_password,
        SHINSEGAE_id,
        SHINSEGAE_password 
}));
export const logout = createAction(LOGOUT);
export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,
        key,
        value,
    }),
);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
    try {
        localStorage.removeItem('user'); //localStorage에서 user 제거 
    } catch(e) {
        console.log('localStrorage is not working..');
    }
};

function* logoutSaga(){
    try{
        yield call(authAPI.logout); //Call logout API
        localStorage.removeItem('user'); //Remove 'user' in localStorage
    } catch(e) {
        console.log(e);
    }
};

const updateSaga = createRequestSaga(UPDATE, authAPI.update);


export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}

export function* upSaga(){
    yield takeLatest(UPDATE, updateSaga);
}

const initialState = {
    user: null,
    checkError: null,
    duty:{
        SHILLA_id: '',
        SHILLA_password: '',
        LOTTE_id: '',
        LOTTE_password: '',
        SHINSEGAE_id: '',
        SHINSEGAE_password: '',
    },
    userInfo: null,
};

export default handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, draft => {
                draft[form][key] = value;
        }),
        // Update Success 
        [UPDATE_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user
        }),
        // Update Fail
        [UPDATE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            user
        }),
        [TEMP_SET_USER]: (state, { payload: user }) => ({
            ...state,
            user,
        }),
        [CHECK_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            checkError: null,
        }),
        [CHECK_FAILURE]: (state, { payload: error}) => ({
            ...state,
            user: null,
            checkError: error,
        }),
        [LOGOUT]: state => ({
            ...state,
            user: null,
        }),
    },
    initialState,
);