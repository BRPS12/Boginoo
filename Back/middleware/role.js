export const adminCheck = (req, res, next, err) => {
  const { role } = req.body;
  if (role !== "admin") {
    res.status(400).send("admin bish");
  } else {
    next();
  }
};
