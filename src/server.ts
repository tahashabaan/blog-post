import { createServer } from "http";
import App from "./app";

import { Blog, Post, User, Comment, Category, Tag } from "./models";
import queryRepository from "./Repositery/queryRepository";
import UserRoute from "./routes2/userRoute";
import UserController from "./Controller/User/userController";
import AuthRoute from "./routes2/authRoute";
import AuthController from "./Controller/Auth/authController";
import PostRoute from "./routes2/postRoute";
import PostController from "./Controller/Post/PostController";
import { IUser } from "./Interface/IUser";
import { IPost } from "./Interface/IPost";
import CategoryRoute from "./routes2/CategoryRoute";
import { CategoryController } from "./Controller/Category/CategoryController";
import { ICategory } from "./Interface/ICategory";
import CommentRoute from "./routes2/commentRoute";
import CommentController from "./Controller/Comment/CommentController";
import { IComment } from "./Interface/IComment";
import BlogController from "./Controller/Blog/BlogController";
import { IBlog } from "./Interface/IBlog";
import BlogRoute from "./routes2/BlogRoute";

const repositoryQuery = new queryRepository<IUser>(User);
const userRoute = new UserRoute(new UserController(repositoryQuery));
// // resolve auth user
const authRoute = new AuthRoute(new AuthController(new queryRepository(User)));
const postRoute = new PostRoute(
  new PostController(new queryRepository<IPost>(Post))
);

const categoryRoute = new CategoryRoute(
  new CategoryController(new queryRepository<ICategory>(Category))
);

const commentRoute = new CommentRoute(
  new CommentController(new queryRepository<IComment>(Comment))
);

const blogRoute = new BlogRoute(
  new BlogController(new queryRepository<IBlog>(Blog))
);

const app = new App([
  userRoute.getRouter(),
  authRoute.getRouter(),
  postRoute.getRouter(),
  categoryRoute.getRoutes(),
  commentRoute.getRoutes(),
  blogRoute.getRoutes(),
]);

// const server = app.listen();
// Change the port number to the one you want to use

const client = app.getApp();

const server = createServer(client);

export { server, client };
