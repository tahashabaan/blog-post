import { Request, Response, NextFunction, Router } from "express";
import authController from "../controller/auth.controller";

export default class AuthRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }
  // my routes
  public init(): Router {
    this.router
      .route("/signup")
      .get(async (req: Request, res: Response, next: NextFunction) => {
        await authController.getSignUp(req, res, next);
      })
      .post((req: Request, res: Response, next: NextFunction) =>
        authController.signUp(req, res, next)
      );

    this.router
      .route("/signin")
      .get(async (req: Request, res: Response, next: NextFunction) => {
        await authController.getSignIn(req, res, next);
      })
      .post((req: Request, res: Response, next: NextFunction) =>
        authController.signIn(req, res, next)
      );

    this.router.get("/logout", async (req, res, next) => {
      authController.logOut(req, res, next);
    });

    return this.router;
  }

  //   private login(req: Request, res: Response, next: NextFunction): void {
  //     // some code
  //   }
}
