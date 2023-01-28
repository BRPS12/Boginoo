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
      data: {
        url: link,
      },
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const getLink = async (req, res) => {
  try {
    const id = req.params.id;
    const links = await Link.findOne({ shortId: id });
    res.status(200).send({
      data: links,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const deleteLink = async (req, res) => {
  try {
    const id = req.params.id;
    const link = await Link.deleteOne({ _id: id });
    res.status(200).send({
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

// export const adminDelete = async (req, res) => {
//   try {
//     const { role } = req.body;
//     const id = req.params.id;
//     if (role == "admin") {
//       const user = await Link.deleteOne({ _id: id });
//       res.status(200).send({
//         data: user,
//       });
//     } else {
//       res.status(400).send({
//         data: "admin bish",
//       });
//     }
//   } catch (error) {
//     res.status(400).send({
//       data: error,
//     });
//   }
// };
