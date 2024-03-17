import { Router, Request, Response, NextFunction } from "express";

class NoteRoute {
  private router: Router = Router();
  constructor() {
    this.init();
  }

  public init() {
    this.router.get("/", (req, res) => {
      res.send("NoteRoute");
    });

    return this.router;
  }
}
