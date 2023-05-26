const db = require("../models");
const Shoes = db.shoes;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be placed here!",
    });
    return;
  }

  const shoe = {
    title: req.body.title ? req.body.title : "item-test",
    description: req.body.description ? req.body.description : "NA",
    size: req.body.size ? req.body.size : 0,
    yearModel: req.body.yearModel ? req.body.yearModel : "2000",
    image: imageGen[Math.floor(Math.random() * imageGen.length)],
  };

  Shoes.create(shoe)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        Message: err.message || "Some errors will occur when creating a shoe",
      });
    });
};

exports.findAll = (req, res) => {
  const { title } = req.query;

  if (title) {
    Shoes.findAll({ where: { title: title } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error have occurred when retrieving the tutorials.",
        });
      });
  } else {
    Shoes.findAll()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error have occurred when retrieving the tutorials.",
        });
      });
  }
};

exports.update = (req, res) => {
  const title = req.body.title;

  Shoes.update(req.body, {
    where: { title: title },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Shoe was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Shoe with id=${id}. Maybe Shoe was not found or req.body is empty.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Shoe with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const title = req.body.title;

  Shoes.destroy({
    where: { title: title },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Shoe was deleted successfully.",
        });
      } else {
        res.send({
          message: `Cannot delete Shoe with title=${title}. Maybe Shoe was not found.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Shoe with id=" + title,
      });
    });
};

const imageGen = [
  "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_24315b6a-e3d5-4522-89c9-bed4de1fba66_540x.jpg?v=1656278007", // jordan 1s grey smoke
  "https://i.ebayimg.com/images/g/52EAAOSwf8lipwfW/s-l1600.jpg", // adidas nmd
  "https://i.ebayimg.com/images/g/ppsAAOSwci9jZXzI/s-l500.jpg", //jordan 4 midnight
  "https://i.ebayimg.com/images/g/kIQAAOSwbfZkHo3D/s-l500.jpg", // new balance
  "https://i.ebayimg.com/images/g/IAIAAOSwq9BkFGd2/s-l500.jpg", //reebok white
  "https://i.ebayimg.com/images/g/9GsAAOSwBTNi2yh3/s-l500.jpg", // yeezy slidesz
  "https://i.ebayimg.com/images/g/Y7MAAOSwQ5djE3R7/s-l500.jpg", //yeezy 350
  "https://cdn-images.farfetch-contents.com/16/65/22/47/16652247_32587810_1000.jpg", // sambas adidas
  "https://cdn-images.farfetch-contents.com/19/11/11/02/19111102_43641759_1000.jpg", // traviss
  "https://m.media-amazon.com/images/I/819jv11GC9L._AC_SR1840,1472_.jpg", // lol
  "https://m.media-amazon.com/images/I/616IbaEEIzL._AC_UY695_.jpg", // doo
];
