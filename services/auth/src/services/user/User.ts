import crypto from "crypto";
import bcrypt from "bcrypt";

export class User {
  public userId?: string;
  public email?: string;
  public password?: string;
  public validatedEmail?: "validated" | "invalid";

  private constructor() {}

  public static create(email: string, password: string): User {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email))
      throw new Error("ERROR: Invalid email address");

    const user = new User();
    user.userId = crypto.randomUUID();
    user.email = email;
    user.password = bcrypt.hashSync(password, 10);
    user.validatedEmail = "invalid";
    return user;
  }

  public static restore(data: Partial<User>): User {
    if (!data.userId || !data.email || !data.password || !data.validatedEmail)
      throw new Error("ERROR: Can't restore user, data incomplete");

    const user = new User();
    user.userId = data.userId;
    user.email = data.email;
    user.password = bcrypt.hashSync(data.password, 10);
    user.validatedEmail = data.validatedEmail;
    return user;
  }

  public compare(password: string): boolean {
    if (!this.password) throw new Error("ERROR: Incorrect password passed");
    return bcrypt.compareSync(password, this.password);
  }

  public validateEmail() {
    if (this.validatedEmail === "validated")
      throw new Error("ERROR: Can't revalidate a validated email");
    this.validatedEmail = "validated";
  }
}
