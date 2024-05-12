import { pool } from "../database/connection.js";

const getUserByUsername = async (username) => {
  const query = "SELECT * FROM andromeda.users_prueba WHERE username = $1";
  const values = [username];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const loginModel = {
  getUserByUsername,
};
