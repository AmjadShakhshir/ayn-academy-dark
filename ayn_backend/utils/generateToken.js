import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
    res.cookie('jwt', token, {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        secure: process.env.NODE_ENV !== 'development', // set to true if your using https
        httpOnly: true,
        sameSite: 'strict',    
    });
}

export default generateToken;