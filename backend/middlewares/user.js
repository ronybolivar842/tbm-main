import User from "../models/user.js";

const existingUser = async (req, res, next) => {
  const existingUser = await User.findOne({ email: req.body.email });
  return existingUser
    ? res.status(400).send({ message: "The user is already registered" })
    : next();
};

const validData = async (req, res, next) => {
  return !req.body.name || !req.body.email || !req.body.password
    ? res.status(400).send({ message: "Incomplete data" })
    : next();
};

export default { existingUser, validData };
