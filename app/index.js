const express = require('express');
const config = require('../config.js');
const { addEmo, getEmo, deleteById, updateEmoji, findEmoji } = require('./data.js');

const app = express();
app.use(express.json());

//reading
app.get('/emoji', (req, res) => {
  const emoji = getEmo();
  return res.json(emoji);
});

//reading
app.get('/emoji/:id', (req, res, next) => {
  const newemo = findEmoji(req.params.id);
  if (!newemo) {
    return next({
      message: 'emoji not found',
    });
  }
});

//adding info
app.post('/emoji', (req, res, next) => {
  if (!req.body.emoji || !req.body.emojiName) {
    return next({
      message: 'add emoji and emoji name',
    });
  }
  const emoji = addEmo(req.body.emoji, req.body.emojiName);
  return res.json(emoji);
});

//updating
app.put(
  ('/emoji',
  (req, res) => {
    const up = addEmo(req.body.emoji, req.body.emojiName);
    return res.send({
      message: 'Put updated',
    });
  }),
);

//deleting
app.delete('/emoji/:id', (req, res, next) => {
  const deleteEmo = deleteById(req.params.id);

  if (!deleteEmo) {
    return next({
      code: 400,
      message: 'Failed to delete by Id ' + req.params.id,
    });
  }
  res.json(deleteEmo);
});

app.listen(config.port, () => {
  console.log(`print it http://localhost:${config.port}`);
});
