let answers = [
  'Magic 8 ball answers: Outlook not so good.',
  'Magic 8 ball answers: Very doubtful.',
  'Magic 8 ball answers: As I see it, Yes.',
  'Magic 8 ball answers: Yes definitely.',
  'Magic 8 ball answers: My sources say no.',
];

const pikachu = [
  'My problem is that I push people away and I hate them for leaving.',
  'You feel it. When you really believe in something despite everyone telling you youre wrong.',
  'Theres magic, it brought us together. And that magic is called hope.',
  'I cant help it, I hurt the people who need me. Thats who I am.',
  'Im aware that you wont be able to understand my words but still Im warning you to put the stapler down or else I will hurt you by electric shock.',
  'Amazing! You perceived what I actually meant!',
  'He feigned that he is dead. Or some other person pretended his death. Or harry feigned someone elses death.',
  'Looking for the appropriate detective. I am your best chance to find out your pops.',
];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      'Cool shirt!',
      'Your Javascript skills are stellar.',
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      'A beautiful, smart, and loving person will be coming into your life.',
      'A dubious friend may be an enemy in camouflage.',
      'A faithful friend is a strong defense.',
      'A feather in the hand is better than a bird in the air.',
      'A fresh start will put you on your way.',
      'A friend asks only for your time not your money.',
      'A friend is a present you give yourself.',
      'A gambler not only will lose what he has, but also will lose what he doesn’t have.',
      'A golden egg of opportunity falls into your lap this month.',
    ];
    const i = Math.floor(Math.random() * fortunes.length);

    res.status(200).send(fortunes[i]);
  },

  getMagicBall: (req, res) => {
    const i = Math.floor(Math.random() * answers.length);

    res.status(200).send(answers[i]);
  },

  getBallMsgs: (req, res) => {
    res.status(200).send(answers);
  },

  addNewAnswer: (req, res) => {
    const { newAnswer } = req.body;
    answers.push('Magic 8 ball answers: ' + newAnswer);
    res.status(200).send(answers);
  },

  deleteAnswer: (req, res) => {
    const { id } = req.params;
    answers.splice(id, 1);
    res.status(200).send(answers);
  },

  updateAnswer: (req, res) => {
    const { id } = req.params;
    const { updateMsg } = req.body;
    answers[id] = updateMsg;
    res.status(200).send(answers);
  },

  getPikachuQuote: (req, res) => {
    const i = Math.floor(Math.random() * pikachu.length);
    res.status(200).send(pikachu[i]);
  },
};
