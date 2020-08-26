import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import produce from 'immer';


const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
    'user/CHECK',
);
const [UPDATESHILLA, UPDATESHILLA_SUCCESS, UPDATESHILLA_FAILURE] = createRequestActionTypes(
    'user/UPDATESHILLA',
);
const [UPDATELOTTE, UPDATELOTTE_SUCCESS, UPDATELOTTE_FAILURE] = createRequestActionTypes(
    'user/UPDATELOTTE',
);

const [UPDATESHINSEGAE, UPDATESHINSEGAE_SUCCESS, UPDATESHINSEGAE_FAILURE] = createRequestActionTypes(
    'user/UPDATESHINSEGAE',
);

const CHANGE_FIELD = 'user/CHANGE_FIELD';
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, (user)  => (user));
export const check = createAction(CHECK);

export const updateSHILLA = createAction(UPDATESHILLA, ({ userId, SHILLA_id, SHILLA_password }) => ({ 
    userId,
    SHILLA_id,
    SHILLA_password
}));
export const updateLOTTE = createAction(UPDATELOTTE, ({ userId, LOTTE_id, LOTTE_password }) => ({ 
    userId,
    LOTTE_id, 
    LOTTE_password
}));
export const updateSHINSEGAE = createAction(UPDATESHINSEGAE, ({ userId, SHINSEGAE_id, SHINSEGAE_password }) => ({ 
    userId,
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

const updateSHILLASaga = createRequestSaga(UPDATESHILLA, authAPI.updateSHILLA);
const updateLOTTESaga = createRequestSaga(UPDATELOTTE, authAPI.updateLOTTE);
const updateSHINSEGAESaga = createRequestSaga(UPDATESHINSEGAE, authAPI.updateSHINSEGAE);
function* logoutSaga(){
    try{
        yield call(authAPI.logout); //Call logout API
        localStorage.removeItem('user'); //Remove 'user' in localStorage
    } catch(e) {
        console.log(e);
    }
};


export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(UPDATESHILLA, updateSHILLASaga);
    yield takeLatest(UPDATELOTTE, updateLOTTESaga);
    yield takeLatest(UPDATESHINSEGAE, updateSHINSEGAESaga);
}

const initialState = {
    user: null,
    checkError: null,
    duty: {
        SHILLA_id: '',
        SHILLA_password: '',
        LOTTE_id: '',
        LOTTE_password: '',
        SHINSEGAE_id: '',
        SHINSEGAE_password: '',
    },
    userInfo: null,
    usererror: null,
};

export default handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, draft => {
                draft[form][key] = value;
        }),
        [UPDATESHILLA_SUCCESS]: (state, { payload: userInfo }) => ({
            ...state,
            userInfo,
            usererror: null
        }),
        // Update Fail
        [UPDATESHILLA_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userInfo: null,
            usererror: error
        }),
        [UPDATELOTTE_SUCCESS]: (state, { payload: userInfo }) => ({
            ...state,
            userInfo,
            usererror: null
        }),
        // Update Fail
        [UPDATELOTTE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userInfo: null,
            usererror: error
        }),
        [UPDATESHINSEGAE_SUCCESS]: (state, { payload: userInfo }) => ({
            ...state,
            userInfo,
            usererror: null
        }),
        // Update Fail
        [UPDATESHINSEGAE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userInfo: null,
            usererror: error
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