import { Schema, model, Document } from "mongoose";
import { ICategory } from "../Interface/Category/ICategory";

const CategorySchema = new Schema<ICategory>(
  {
    // id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    blogID: { type: String, ref: "Blog" },
  },
  { timestamps: true }
);

export default model<ICategory>("Category", CategorySchema);
