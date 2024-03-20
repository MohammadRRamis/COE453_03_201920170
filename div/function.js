exports.div = (req, res) => {
  const x = req.body.X;
  const y = req.body.Y;
  const div = x / y;
  res.status(200).send({
    X: x,
    Y: y,
    Result: div,
  });
};
