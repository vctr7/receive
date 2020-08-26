import client from './client';


//Login
export const login = ({userId, password}) => 
    client.post('/api/auth/login', { userId, password });

//Register
export const register = ({ userId, password, username, emailAddress, birthday, homeAddress, phoneNumber, cellphoneNumber }) =>
    client.post('/api/auth/register', { userId, password, username, emailAddress, birthday, homeAddress, phoneNumber, cellphoneNumber });

//Update SHILLA
export const updateSHILLA = ({ userId, SHILLA_id, SHILLA_password }) => 
    client.put('/api/auth/updateSHILLA', { userId, SHILLA_id, SHILLA_password });

//Update LOTTE
export const updateLOTTE = ({ userId, LOTTE_id, LOTTE_password }) => 
    client.put('/api/auth/updateLOTTE', { userId, LOTTE_id, LOTTE_password });

//Update SHINSEGAE
export const updateSHINSEGAE = ({ userId, SHINSEGAE_id, SHINSEGAE_password }) => 
    client.put('/api/auth/updateSHINSEGAE', { userId, SHINSEGAE_id, SHINSEGAE_password });

//Check Login State
export const check = () => client.get('/api/auth/check');

//Logout
export const logout = () => client.post('/api/auth/logout');

