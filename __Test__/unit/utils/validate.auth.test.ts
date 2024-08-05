import {
  hashedPassword,
  generateToken,
  isMatchPass,
  isMatchEmail,
} from "@/Utils/validate.auth";

describe("validate auth testing", () => {
  test("hashedPassword", async () => {
    expect(() => hashedPassword("hi gsshsh")).toBeTruthy();
  });
  test("generateToken", async () => {
    expect(() => generateToken("13141")).toBeTruthy();
  });
  test("isMatchPass", async () => {});
  test("isMatchEmailTruthy", async () => {
    expect(() => isMatchEmail("taha@hhsd")).toBeTruthy();
  });
  test("isMatchEmailFalsy", async () => {
    expect(() => isMatchEmail("tahahhsd")).toBeFalsy();
  });
});
