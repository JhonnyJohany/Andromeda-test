import pg from "pg";
const { Pool, Client } = pg;

export const pool = new Pool({
  allowExitOnIdle: true,
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5555,
  database: "andromeda",
});

try {
  await pool.query("SELECT NOW()");
  console.log("Database connected");
} catch (error) {
  console.log(error);
}

const client = new Client({
  allowExitOnIdle: true,
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5555,
  database: "andromeda",
});

await client.connect();

await client.end();
