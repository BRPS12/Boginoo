import Post from "../model/User.js";

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
    const user = await Post.findOne({
      name: req.body.name,
      password: req.body.password,
    });
    if (user) {
      res.status(200).send({
        data: user,
      });
    } else {
      res.status(404).send({
        data: "tiim user bhq bn",
      });
    }
  } catch (error) {}
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
