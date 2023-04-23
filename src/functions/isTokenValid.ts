import jwt, { JwtPayload } from "jsonwebtoken";

function isTokenValid(token: string) {
    try {
        if (token) {
            const decoded = jwt.verify(token, process.env.REACT_APP_JWT_SECRET!) as JwtPayload;
            const expirationTime = decoded.exp! * 1000; // convert expiration time to milliseconds
            const currentTime = Date.now();
            if (expirationTime < currentTime) {
                // token has expired
                return false;
            }
            // token is valid and has not expired
            return true;
        }
    } catch (error) {
        console.error(error);
        // token is invalid
        return false;
    }
}

export default isTokenValid;
