import db from './db.js';

let globalId = 4;

export const getHouses = (req, res) => res.send(db);

export const deleteHouse = (req, res) => {
  const { id } = req.params;

  const index = db.findIndex((house) => house.id === +id);

  db.splice(index, 1);
  res.status(200).send(db);
};

export const createHouse = (req, res) => {
  const { price, address, imageURL } = req.body;
  const newHouse = {
    price: +price,
    address,
    imageURL,
    id: globalId,
  };

  db.push(newHouse);
  globalId++;
  res.status(201).send(db);
};

export const updateHouse = (req, res) => {
  const { id } = req.params;
  const { type } = req.body;

  const index = db.findIndex((house) => house.id === +id);

  const house = db[index];

  type === 'minus' ? (house.price -= 10000) : (house.price += 10000);

  res.status(200).send(db);
};
