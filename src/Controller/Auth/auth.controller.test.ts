// import mongoose from "mongoose";

// import AuthController from "./authController";
// import queryRepository from "@/Repositery/queryRepository";
// import { IUser } from "@/Interface/User/IUser";
// import { User } from "@/models";

// let data = { name: "", email: "", password: "" };
// beforeAll(() => {
//   data = {
//     name: "taha",
//     email: "taha@gmail.com",
//     password: "taha 7009",
//   };
// });

// afterAll(async () => {
//   // Close the database connection after all tests are done
//   await mongoose.connection.close();
// });

// describe("unite test to auth controller", () => {
//   const authcontroller = new AuthController(new queryRepository<IUser>(User));
//   // test("unite test to generate token", async () => {});
//   describe("register testing ", () => {
//     // i use mock fun to working with database!!
//     test("", async () => {
//       const regsit = jest.fn((data) => data);
//       expect(regsit(data)).toContain(data);
//     });
//   });
//   describe("login testing ", () => {});
// });
