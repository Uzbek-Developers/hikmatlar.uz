import { getRepository } from 'typeorm';
import { genSalt, hash } from 'bcryptjs';
import { app } from '../config';
import { AdminUser } from '../entities/AdminUser';
export default async function usersSeed() {
  try {
    const salt: string = await genSalt(10);
    const password: string = await hash(app.adminPassword, salt);

    const adminUserRepo = getRepository(AdminUser);

    const adminUser = adminUserRepo.create({
      password,
      username: app.adminUser
    });

    await adminUserRepo.save(adminUser);
  } catch (e) {
    console.log(e);
  }
}
