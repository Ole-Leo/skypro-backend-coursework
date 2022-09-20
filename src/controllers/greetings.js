const greetings = (req, res, next) => {
  res.status(200).send(`It's alive`);
};

module.exports = greetings;
