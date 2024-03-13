import request from "supertest";
import { server } from "../../src/server";

beforeAll(async () => {});
afterAll(async () => {});

describe("post route", () => {
  it("should create a post", async () => {
    const res = await request(server).post("/post").send({
      title: "test",
      content: "test",
    });
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });
  it("should read all posts", async () => {
    const res = await request(server).get("/post");
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });
  it("should read a post", async () => {
    const res = await request(server).get("/post/1");
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });
  it("should update a post", async () => {
    const res = await request(server).put("/post/1").send({
      title: "test",
      content: "test",
    });
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });
  it("should delete a post", async () => {
    const res = await request(server).delete("/post/1");
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });
});
