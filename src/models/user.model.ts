import { DataTypes, Model } from "sequelize";
import sequelize from "../db";
// declare table structure  extend from model class
interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: string;
}

export default class User extends Model<IUser> {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public role?: string;
  // public role: string;
}

// export const userInit = () => {
User.init(
  {
    id: {
      type: DataTypes.UUID,
      // autoIncrement: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      defaultValue: "user",
      // allowNull: false,
    },

    // createdAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    // },
    // deleteAt: {
    //   type: DataTypes.DATE,
    //   allowNull: true,
    // },
  },
  { sequelize, modelName: "User", timestamps: true }
);
// };
