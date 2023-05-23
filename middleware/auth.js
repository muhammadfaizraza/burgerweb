import ErrorHandler from "../utils/ErrorHandler.js";
import { User } from "../models/User.js";
export const isAuthenticated = (req, res, next) => {
  const token = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Not Logged In", 401));
  }
  next();
};
export const authorizedAdmin = (req, res, next) => {
  const token = req.cookies;

  // if (req.User.role = "admin") {
  //   return next(new ErrorHandler("Only Admin Allowed", 405));
  // }

  next();
};  
