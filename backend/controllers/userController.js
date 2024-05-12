import { loginService } from "../services/userServices.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Se requieren el nombre de usuario y la contraseña" });
  }

  const user = await loginService.loginUser(username, password);
  if (!user) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  res.status(200).json({ message: "Inicio de sesión exitoso", user });
};

export const userController = {
  login,
};
