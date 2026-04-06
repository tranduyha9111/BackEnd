// src/middleware/roleMiddleware.js
const roleMiddleware = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json("Không có quyền");
    }
    next();
  };
};

module.exports = roleMiddleware;