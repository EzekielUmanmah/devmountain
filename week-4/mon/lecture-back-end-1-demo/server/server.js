import express from 'express';
import cors from 'cors';

import routes from './routes.js';

const app = express();

// const whitelist = ['http://localhost:5500', 'http://127.0.0.1:5500'];
// const corsOptions = {
//   origin: (origin, cb) =>
//     whitelist.indexOf(origin) !== -1
//       ? cb(null, true)
//       : cb(new Error('Not allowed by CORS')),
// };
// app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('lecture demo server reached'));

app.use('/api', routes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => `Server listening on port ${PORT}`);
