// import request from "supertest";
// import { server } from "../../src/server";
// import mongoose from "mongoose";

// const data = {
//   name: "ali shabaan",
//   email: "alidf@gmail.com",
//   password: "123456",
// };


// beforeAll(() => {});
// afterAll(async () => {
//     // Close the database connection after all tests are done
//     await mongoose.connection.close();
//   });

// describe("authenticate app", () => {
//   // how test ?
//   // 1-request to path
//   // 2-connected with database
//   // do fake data
//   it("POST /auth/register", async () => {
//     const res = await request(server).post("/api/v1/register").send(data);
//     expect(res.status).toBe(404);
//   });

//   it("POST /auth/login", async () => {
//     const res = await request(server).post("/api/v1/login").send({
//       email: "alidf@gmail.com",
//       password: "123456",
//     });

//     expect(res.status).toBe(200);
//   });
// });
