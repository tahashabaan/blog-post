import { IUser } from "../Interface";
import { Document, model, Schema } from "mongoose";

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "author", "admin"], default: "user" },
    profilePicture: { type: String },
    posts: [{ type: String, ref: "Post" }],
    comments: [{ type: String, ref: "Comment" }],
    googleId: { type: String },
  },
  { timestamps: true }
);

export default model<IUser>("User", UserSchema);
