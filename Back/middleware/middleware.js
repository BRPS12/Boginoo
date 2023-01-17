import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
  const token = req.body.token;
  jwt.verify(token, "secret", (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      console.log(req.body);
      next();
    }
  });
};
