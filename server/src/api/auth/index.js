import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';

const auth = new Router();

auth.post('/register', authCtrl.register);
auth.post('/login', authCtrl.login);
auth.get('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);
auth.put('/updateSHILLA', authCtrl.updateSHILLA);
auth.put('/updateLOTTE', authCtrl.updateLOTTE);
auth.put('/updateSHINSEGAE', authCtrl.updateSHINSEGAE);

export default auth;