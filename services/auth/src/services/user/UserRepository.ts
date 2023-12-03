import { db } from "../../db/db";
import { users } from "../../../db/schema";

export class UserRepository {
  constructor() {}

  public async fetch() {
    return await db.select().from(users);
  }

  public async get() {}
  public async delete() {}
  public async deleteMany() {}
  public async update() {}
  public async updateMany() {}
  public async create() {}
  public async createMany() {}
}
