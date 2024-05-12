import { pool } from "../database/connection.js";

const getAllBTCUSD = async () => {
  try {
    const { rows } = await pool.query("SELECT * FROM andromeda.btc_price");
    return rows;
  } catch (error) {
    console.error("Error al obtener los objetos de BTC_USD:", error);
    throw new Error("Error al obtener los objetos de BTC_USD");
  }
};

export const BtcModel = {
  getAllBTCUSD,
};
