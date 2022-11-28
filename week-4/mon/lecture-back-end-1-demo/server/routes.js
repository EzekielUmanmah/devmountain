import express from 'express';

const router = express.Router();

const inventory = [
  'greeting card',
  'wagon',
  'computer',
  'table',
  'chair',
  'milk',
  'sailboat',
  'conditioner',
  'rusty nail',
  'desk',
];

router.get('/inventory', (req, res) => {
  const { item } = req.query;

  if (item) {
    const findItem = inventory.filter((x) => x === item);
    res.status(200).send(findItem);
  } else {
    res.status(200).send(inventory);
  }
});

router.get('/inventory/:id', (req, res) => {
  const { id } = req.params;

  res.status(200).send(inventory[id]);
});

export default router;
