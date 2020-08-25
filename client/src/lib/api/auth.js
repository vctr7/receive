import client from './client';


//Login
export const login = ({userId, password}) => 
    client.post('/api/auth/login', { userId, password });

//Register
export const register = ({ userId, password, username, emailAddress, birthday, homeAddress, phoneNumber, cellphoneNumber }) =>
    client.post('/api/auth/register', { userId, password, username, emailAddress, birthday, homeAddress, phoneNumber, cellphoneNumber });

//Update
export const update = ({ userId, SHILLA_id, SHILLA_password, LOTTE_id, LOTTE_password, SHINSEGAE_id, SHINSEGAE_password}) => 
    client.put('/api/auth/update', { userId, SHILLA_id, SHILLA_password, LOTTE_id, LOTTE_password, SHINSEGAE_id, SHINSEGAE_password });

//Check Login State
export const check = () => client.get('/api/auth/check');

//Logout
export const logout = () => client.post('/api/auth/logout');

