exports.add = (req, res) => {
  const x = req.body.X;
  const y = req.body.Y;
  const add = x + y;
  res.status(200).send({
    X: x,
    Y: y,
    Result: add,
  });
};