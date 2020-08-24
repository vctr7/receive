import client from './client';

//Login
export const login = ({userId, password}) => 
    client.post('/api/auth/login', { userId, password });

//Register
export const register = ({ userId, password, username, emailAddress, birthday, homeAddress, phoneNumber, cellphoneNumber }) =>
    client.post('/api/auth/register', { userId, password, username, emailAddress, birthday, homeAddress, phoneNumber, cellphoneNumber });

//Check Login State
export const check = () => client.get('/api/auth/check');

//Logout
export const logout = () => client.post('/api/auth/logout');

//Update
export const update = ({
    SHILLA_id,
    SHILLA_password,
    LOTTE_id,
    LOTTE_password,
    SHINSEGAE_id,
    SHINSEGAE_password}) =>
    client.put('/api/auth/update', {
        SHILLA_id,
        SHILLA_password,
        LOTTE_id,
        LOTTE_password,
        SHINSEGAE_id,
        SHINSEGAE_password });