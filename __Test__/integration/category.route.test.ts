// import request from "supertest";
// import { server } from "../../src/server";

// describe("category route", () => {
//   it("should create a category", async () => {
//     const res = await request(server).post("/category").send({
//       title: "test",
//       content: "test",
//     });
//     expect(res.status).toEqual(200);
//     expect(res.body).toHaveProperty("data");
//   });
//   it("should read all categories", async () => {
//     const res = await request(server).get("/category");
//     expect(res.status).toEqual(200);
//     expect(res.body).toHaveProperty("data");
//   });
//   it("should read a category", async () => {
//     const res = await request(server).get("/category/1");
//     expect(res.status).toEqual(200);
//     expect(res.body).toHaveProperty("data");
//   });
//   it("should update a category", async () => {
//     const res = await request(server).put("/category/1").send({
//       title: "test",
//       content: "test",
//     });
//     expect(res.status).toEqual(200);
//     expect(res.body).toHaveProperty("data");
//   });
//   it("should delete a category", async () => {
//     const res = await request(server).delete("/category/1");
//     expect(res.status).toEqual(200);
//     expect(res.body).toHaveProperty("data");
//   });
// });
