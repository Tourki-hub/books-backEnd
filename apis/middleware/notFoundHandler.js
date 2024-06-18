const notFound = (req, res, next) => {
  return res.status(404).json({ msg: "Path Not found!" });
};

module.exports = notFound;
