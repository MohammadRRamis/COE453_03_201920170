exports.sub = (req, res) => {
  const x = req.body.X;
  const y = req.body.Y;
  const sub = x - y;
  res.status(200).send({
    X: x,
    Y: y,
    Result: sub,
  });
};
