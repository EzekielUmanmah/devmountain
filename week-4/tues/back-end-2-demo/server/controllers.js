import db from './db.js';

let globalId = 11;

export const getMovies = (req, res) => res.status(200).send(db);

export const createMovie = (req, res) => {
  const { title, rating, imageURL } = req.body;
  const newMovie = {
    id: globalId,
    title,
    rating,
    imageURL,
  };
  db.push(newMovie);
  globalId++;
  res.status(201).send(db);
};

export const deleteMovie = (req, res) => {
  const { id } = req.params;

  const index = db.findIndex((movie) => movie.id === +id);

  db.splice(index, 1);
  res.status(200).send(db);
};

export const updateMovie = (req, res) => {
  const { id } = req.params;
  const { type } = req.body;

  const index = db.findIndex((movie) => movie.id === +id);

  const movie = db[index];

  type === 'plus' ? movie.rating++ : movie.rating--;

  res.send(db);
};
