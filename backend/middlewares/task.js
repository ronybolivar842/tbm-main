const validData = async (req, res, next) => {
  return !req.body.name || !req.body.description
    ? res.status(400).send({ message: "Incomplete data" })
    : next();
};

export default { validData };
