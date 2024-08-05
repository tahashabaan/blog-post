// import request from "supertest";
// import { server } from "../../src/server";

// beforeAll(async () => {});
// afterAll(async () => {});

// describe("blog route", () => {
//   it("should create a blog", async () => {
//     const res = await request(server).post("/blog").send({
//       title: "test",
//       content: "test",
//     });
//     expect(res.status).toEqual(200);
//     expect(res.body).toHaveProperty("data");
//   });
//   it("should read all blogs", async () => {
//     const res = await request(server).get("/blog");
//     expect(res.status).toEqual(200);
//     expect(res.body).toHaveProperty("data");
//   });
//   it("should read a blog", async () => {
//     const res = await request(server).get("/blog/1");
//     expect(res.status).toEqual(200);
//     expect(res.body).toHaveProperty("data");
//   });
//   it("should update a blog", async () => {
//     const res = await request(server).put("/blog/1").send({
//       title: "test",
//       content: "test",
//     });
//     expect(res.status).toEqual(200);
//     expect(res.body).toHaveProperty("data");
//   });
//   it("should delete a blog", async () => {
//     const res = await request(server).delete("/blog/1");
//     expect(res.status).toEqual(200);
//     expect(res.body).toHaveProperty("data");
//   });
// });
