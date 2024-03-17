import App from "./app";
import AuthRoute from "./routes/auth.route";
import ProfileRoute from "./routes/profile.route";

const authRoute = new AuthRoute();
const profileRoute = new ProfileRoute();
const app = new App([authRoute.init(), profileRoute.init()]);

app.listen();

// init methods to configire route
/*
  1- init () {
    this.router.http=> (methods)
  }

*/
