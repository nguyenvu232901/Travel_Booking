import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  // Try to get token from cookies first, then from Authorization header
  let token = req.cookies.accessToken;

  if (!token) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7); // Remove 'Bearer ' prefix
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You're not authorized - no token provided",
    });
  }

  //if token is exist then verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: 'token is invalid',
      });
    }

    req.user = user;
    next(); //don't forget to call next
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === 'admin') {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You're not authenticated" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === 'admin') {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You're not authorize" });
    }
  });
};
