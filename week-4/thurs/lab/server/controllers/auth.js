const bcrypt = require('bcryptjs');

const users = [];

module.exports = {
  login: (req, res) => {
    console.log('Logging In User');
    console.log(req.body);
    const { username, password } = req.body;
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username === username &&
        bcrypt.compare(users[i].password, password)
      ) {
        const response = users[i];
        delete response.password;
        console.log(response);
        return res.status(200).send(response);
      }
    }
    res.status(400).send('User not found.');
  },
  register: (req, res) => {
    const { password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 12);
    const newUser = { ...req.body, password: hashedPassword };
    users.push(newUser);
    console.log('users: ', users);
    res.status(200).send(newUser);
  },
};
