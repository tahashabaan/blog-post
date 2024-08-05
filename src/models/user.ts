import { IUser } from "../Interface";
import { Document, model, Schema } from "mongoose";

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "author", "admin"], default: "user", required:false },
    profilePicture: { type: String, requiredf: false },
    posts: [{ type: String, ref: "Post" }],
    comments: {type:[{ type: String, ref: "Comment" }], required: false},
    googleId: { type: String, required: false },
  },
  { timestamps: true }
);

export default model<IUser>("User", UserSchema);
