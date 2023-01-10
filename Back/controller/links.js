import Link from "../model/Link.js";

export const getAllLink = async (req, res) => {
  try {
    const link = await Link.find({});
    res.status(200).send({
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const createLink = async (req, res) => {
  try {
    const link = await Link.create(req.body);
    res.status(200).send({
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const getLink = async (req, res) => {
  try {
    const link = req.params.link;
    const links = await Link.findOne({ link: link });
    res.status(200).send({
      data: links,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
