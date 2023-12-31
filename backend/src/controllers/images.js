const imageService = require("../services/images");

exports.getImages = async (req, res) => {
  try {
    const images = await imageService.getImages();
    res.status(200).send(images);
  } catch (error) {
    console.log(error);
    res.status(500).send("error: ", error);
  }
};

exports.runImage = async (req, res) => {
  const { name, port, imageID } = req.body;
  try {
    const images = await imageService.runImage(name, port, imageID);
    res.send(images);
  } catch (error) {
    console.log(error);
    res.status(500).send("error: ", error);
  }
};

exports.deleteImage = async (req, res) => {
  const { imageID } = req.body;

  try {
    const deleteImage = await imageService.deleteImage(imageID);
    res.status(200).send(deleteImage);
  } catch (error) {
    console.log(error);
    res.status(500).send("error: ", error);
  }
};
