import { User } from "./User";
import bcrypt from "bcrypt";

test("Should create a new user", () => {
  const email = "johndoe@gmail.com";
  const password = "123456789";

  const user = User.create(email, password);

  expect(user).toBeDefined();
  expect(user.userId).toBeDefined();
  expect(user.email).toBeDefined();
  expect(user.password).toBeDefined();
  expect(bcrypt.compareSync(password, user.password!)).toBe(true);
});

test("Should restore a user", () => {
  const email = "johndoe@gmail.com";
  const password = "123456789";
  const user = User.create(email, password);

  const restoredUser = User.restore({ ...user, password });

  expect(restoredUser).toBeDefined();
  expect(restoredUser.userId).toBe(user.userId);
  expect(restoredUser.email).toBe(user.email);
  expect(restoredUser.password).toBeDefined();
  expect(restoredUser.compare(password)).toBe(true);
});

test("Compare passwords", () => {
  const email = "johndoe@gmail.com";
  const password = "123456789";
  const user = User.create(email, password);

  const match = user.compare(password);

  expect(match).toBeDefined();
  expect(match).toBe(true);
});

test("Validate email", () => {
  const email = "johndoe@gmail.com";
  const password = "123456789";
  const user = User.create(email, password);

  user.validateEmail();

  expect(user).toBeDefined();
  expect(user.validatedEmail).toBeDefined();
  expect(user.validatedEmail).toBe("validated");
});
