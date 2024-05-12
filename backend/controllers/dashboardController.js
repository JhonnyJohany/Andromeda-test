import { BtcModel } from "../models/btc.Model.js";

const getAllBTCUSDController = async (req, res) => {
  try {
    const btcUSDData = await BtcModel.getAllBTCUSD();
    res.status(200).json(btcUSDData);
  } catch (error) {
    console.error("Error al obtener los objetos de BTC_USD:", error);
    res.status(500).json({ error: "Error al obtener los objetos de BTC_USD" });
  }
};

export const BTCPrice = {
  getAllBTCUSDController,
};
