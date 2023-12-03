import { User } from "./User";
import { UserRepository } from "./UserRepository";

test("Should instanciate a user repository", () => {
  const userRepository = new UserRepository();

  expect(userRepository).toBeDefined();
});

test("Should return all users", async () => {
  const userRepository = new UserRepository();

  const users = await userRepository.fetch();
  const restoredUsers = users.map((user) =>
    User.restore({
      email: user.email!,
      userId: user.user_id,
      validatedEmail: user.validatedEmail!,
    })
  );

  expect(users).toBeDefined();
  expect(restoredUsers).toBeDefined();
  expect(users.length).toBe(restoredUsers.length);
  expect(
    users.every(
      (user, i) =>
        user.email === restoredUsers[i].email &&
        user.user_id === restoredUsers[i].userId &&
        user.validatedEmail === restoredUsers[i].validatedEmail
    )
  ).toBe(true);
});
