import Post from "../model/User.js";
import jwt from "jsonwebtoken";
export const getAllUser = async (req, res) => {
  try {
    const user = await Post.find({});
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await Post.create(req.body);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const getUserByObject = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = jwt.sign(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
      "secret",
      {
        expiresIn: "1d",
      }
    );
    const user = await Post.findOne({
      email,
    });

    if (user) {
      if (user.password !== password) {
        throw new Error("Email or password wrong");
      }
      res.status(200).send({
        data: user,
        token: token,
      });
    } else {
      res.status(404).send({
        data: "tiim user bhq bn",
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Post.findById({ _id: id });
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Post.deleteOne({ _id: id });
    res.send({
      data: user,
    });
  } catch (error) {
    res.send({
      data: error.message,
    });
  }
};
