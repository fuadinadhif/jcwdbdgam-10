import { Pool } from "pg";

const pool = new Pool({
  user: "postgres.iansvhumuzwmxvlomthl",
  host: "aws-1-ap-south-1.pooler.supabase.com",
  database: "postgres",
  password: "purwadhika123",
  port: 5432,
});

export default pool;
