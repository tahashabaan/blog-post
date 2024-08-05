import AuthController from "@/Controller/Auth/authController";
import ApiError from "@/Utils/ApiError";
import { Response, Request, NextFunction, Router } from "express";
import { passport } from "passport";

export default class AuthRoute {
  private router: Router = Router();

  constructor(private authController: AuthController) {
    // this.router.post("/login", authController.login);
    // this.router.post("/register", authController.register);
    this.initailRoutes();
  }

  private initailRoutes() {
    this.router
      .route("/register")
      .post((req: Request, res: Response, next: NextFunction) =>
        this.authController.register(req, res, next)
      );
    this.router
      .route("/login")
      .post((req: Request, res: Response, next: NextFunction) =>
        this.authController.login(req, res, next)
      );

    // public
    // @ get auth/google
    // this.router.get(
    //   "/google",
    //   (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //       passport.authenticate("google", {
    //         scope: ["profile", "email"],
    //       });
    //     } catch (error) {
    //       next(new ApiError(404, "something went wrong!"));
    //     }
    //   }
    // );

    // //public
    // // @ get auth/google/redirect
    // this.router.get(
    //   "/google/redirect",
    //   passport.authenticate("google"),
    //   (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //       res.status(401).json({ redirect: "/auth/register" });
    //     } catch (error) {
    //       next(new ApiError(404, "something went wrong!"));
    //     }
    //   }
    // );
  }
  public getRouter() {
    return this.router;
  }
}
