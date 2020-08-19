import Joi from 'joi';
import User from '../../models/user';

export const register = async ctx => {
    
    const schema = Joi.object().keys({
        userId: Joi.string()
            .min(3)
            .max(20)
            .required(),
        password: Joi.string().required(),
        username: Joi.string()
        .min(3)
        .max(20)
        .required(),
        emailAddress: Joi.string().required(),
        birthday: Joi.date().required(),
        homeAddress: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        cellphoneNumber: Joi.string().required(),
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { userId, password, username, emailAddress, birthday, homeAddress, phoneNumber, cellphoneNumber } = ctx.request.body;

    try{
        const exists = await User.findByUserId(userId);
        if(exists){
            ctx.status = 409;
            return;
        }

        const user = new User({
            userId,
            username,
            emailAddress,
            birthday,
            homeAddress,
            phoneNumber,
            cellphoneNumber,
        });


        await user.setPassword(password);
        await user.save();
        ctx.body = user.serialize();
        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60* 60 * 24 * 7,
            httpOnly: true,
        });
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const login = async ctx => {
    const { userId, password } = ctx.request.body;

    if (!userId || !password) {
        ctx.status = 401;
        return;
    }

    try {
        const user = await User.findByUserId(userId);
        if(!user){
            ctx.status = 401;
            return;
        }
        const valid = await user.checkPassword(password);

        if(!valid){
            ctx.status = 401;
            return;
        }

        ctx.body = user.serialize();

        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60* 60 * 24 * 7,
            httpOnly: true,
        });
    } catch (e){
        throw(500, e);
    }
};

export const check = async ctx => {
    const { user } = ctx.state;
    if(!user){
        ctx.status = 401;
        return;
    }
    ctx.body = user;
};

export const logout = async ctx => {
    ctx.cookies.set('access_token');
    ctx.status = 204;
};
