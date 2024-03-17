import isAuthMiddleware from "../middleware/isAuth.middleware";
import ProfileController from "../controller/profile.controlller";

export default class ProfileRoute {
  public router: any;
  constructor() {
    this.router = require("express").Router();
    this.init();
  }
  // my routes
  public init(): any {
    this.router.use(isAuthMiddleware);
    this.router.get("/profile", (req: any, res: any, next: any) =>
      ProfileController.profile(req, res, next)
    );
    this.router.get("/updateProfile", (req: any, res: any, next: any) =>
      ProfileController.getUpdateProfile(req, res, next)
    );
    this.router.post("/updateProfile", (req: any, res: any, next: any) =>
      ProfileController.updateProfile(req, res, next)
    );

    this.router
      .route("/deleteProfile")
      .get((req: any, res: any, next: any) => {
        ProfileController.getDeleteProfile(req, res, next);
      })
      .post((req: any, res: any, next: any) =>
        ProfileController.deleteProfile(req, res, next)
      );
    this.router.get("/changePassword", (req: any, res: any, next: any) =>
      ProfileController.getChangePassword(req, res, next)
    );
    this.router.post("/changePassword", (req: any, res: any, next: any) =>
      ProfileController.changePassword(req, res, next)
    );

    return this.router;
  }
}
