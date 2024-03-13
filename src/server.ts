import { createServer } from "http";
import App from "./app";

import { Blog, Post, User, Comment, Category, Tag } from "./models";
import queryRepository from "./Repositery/queryRepository";
import UserRoute from "./Routes/userRoute";
import UserController from "./Controller/User/userController";
import AuthRoute from "./Routes/authRoute";
import AuthController from "./Controller/Auth/authController";
import PostRoute from "./Routes/postRoute";
import PostController from "./Controller/Post/PostController";
import { IUser } from "./Interface/User/IUser";
import { IPost } from "./Interface/Post/IPost";
import CategoryRoute from "./Routes/CategoryRoute";
import { CategoryController } from "./Controller/Category/CategoryController";
import { ICategory } from "./Interface/Category/ICategory";
import CommentRoute from "./Routes/commentRoute";
import CommentController from "./Controller/Comment/CommentController";
import { IComment } from "./Interface/Comment/IComment";
import BlogController from "./Controller/Blog/BlogController";
import { IBlog } from "./Interface/Blog/IBlog";
import BlogRoute from "./Routes/BlogRoute";

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

const server = createServer(client) 

export { server, client };
