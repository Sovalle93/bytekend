import jwt from 'jsonwebtoken';

const decodeEmail = (req, res, next) => {
    const authorizationHeader = req.header('Authorization');
    if (!authorizationHeader) {
        return res.status(401).json({ error: 'Authorization header is missing' });
    }
    const token = authorizationHeader.split(' ')[1];
    try {
        if (!token || typeof token !== 'string') {
            throw new Error('Invalid token format');
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userEmail = decodedToken.email;
        req.userEmail = userEmail;
        next();
    } catch (error) {
        console.error('Error decoding token:', error);
        return res.status(401).json({ error: 'Invalid token' });
    }
};

export { decodeEmail };
