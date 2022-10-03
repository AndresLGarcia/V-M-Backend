const { query } = require("express");
const service = require("../services");


const getAll = async (req, res, next) => {
  try {
    const data = await service.getAll();
    res.status(200).json({
      status: "success",
      data,
      length: data.length,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

const getAcronym = async (req, res) => {
  try {
    const acronym = req.query.value;
    if (!acronym) {
      res
        .status(400)
        .send({ message: "field value is required as query param to search" });
    }

    const data = await service.getAcronym(acronym);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

module.exports = { getAll, getAcronym };
