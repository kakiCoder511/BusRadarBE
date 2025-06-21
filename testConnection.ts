import { pool } from './db/connect';

pool
  .query('SELECT NOW()')
  .then((result) => {
    console.log('✅ Connected to DB! Time is:', result);
  })
  .catch((err) => {
    console.error('❌ DB connection failed:', err);
  })
  .finally(() => {
    pool.end(); 
  });