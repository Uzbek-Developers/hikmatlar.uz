import { createConnection } from 'typeorm';
import adminUserSeed from '../src/seeds/adminUsers';
import tagSeed from '../src/seeds/tags';
import authorsSeed from '../src/seeds/authors';

(async function () {
  try {
    await createConnection();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
  try {
    await adminUserSeed();
  } catch (e) {
    console.log(e);
  }
  try {
    await tagSeed();
  } catch (e) {
    console.log(e);
  }
  try {
    await authorsSeed();
  } catch (e) {
    console.log(e);
  }
})();
