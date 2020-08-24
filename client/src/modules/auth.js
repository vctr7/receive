import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    'auth/REGISTER',
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    'auth/LOGIN',
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,
        key,
        value,
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

export const register = createAction(REGISTER, ({ userId, password, username, emailAddress, birthday, homeAddress, phoneNumber, cellphoneNumber}) => ({
    userId,
    password,
    username,
    emailAddress,
    birthday,
    homeAddress,
    phoneNumber,
    cellphoneNumber,
}));

export const login = createAction(LOGIN, ({ userId, password }) => ({
    userId,
    password,
}));

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
};

const initialState = {
    login:{
        userId: '',
        password: '',
    },
    register: {
        userId: '',
        password: '',
        passwordConfirm: '',
        username: '',
        emailAddress : '',
        birthday : '',
        homeAddress : '',
        phoneNumber : '',
        cellphoneNumber: '',
    },
    auth: null,
    authError: null,
};


const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, draft => {
                draft[form][key] = value;
        }),

        [INITIALIZE_FORM]: (state, { payload: { form } }) => ({
            ...state,
            [form]: initialState[form],
            authError: null,
        }),

        // Register Success 
        [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        // Register Fail
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
            auth,
        }),

        // Login Success
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),

        // Login Fail
        [LOGIN_FAILURE] : (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
    },
    initialState,
);

export default auth;