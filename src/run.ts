import APP from "./index";
import {BlogRoute,
    UserRoute,
    PostRoute,
    CommentRoute,
    TagRoute,
    CategoryRoute} from "@/Routes";





const app = new APP([new BlogRoute(), new UserRoute(), new PostRoute(), new CommentRoute(), new TagRoute(), new CategoryRoute()]);
app.listen();