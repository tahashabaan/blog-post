import ApiError from "@/Utils/ApiError";
import { verfiyToken } from "@/Utils/validate.auth";

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return next(new ApiError(401, "invalid token"));
    }
    const decoded = verfiyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    next(new ApiError(401, "Unauthorized"));
  }
};
