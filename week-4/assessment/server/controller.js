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

const inspire = [
  '“All our dreams can come true, if we have the courage to pursue them.” —Walt Disney',
  '“The secret of getting ahead is getting started.” —Mark Twain',
  '“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.” —Michael Jordan',
  '“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” —Mary Kay Ash',
  '“The best time to plant a tree was 20 years ago. The second best time is now.” ―Chinese Proverb',
];

const help = [
  'Always have a willing hand to help someone, you might be the only one that does. ROY T. BENNETT',
  'Great opportunities to help others seldom come, but small ones surround us every day. SALLY KOCH',
  'Selfless giving is the art of living. FREDERIC LENZ',
  'The best way to find yourself is to lose yourself in the service of others. MAHATMA GANDHI',
  'Service to others is the rent you pay for your room here on earth. MOHAMMAD ALI',
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

  getChooseQuote: (req, res) => {
    const { choice } = req.params;

    if (choice === '0') {
      const i = Math.floor(Math.random() * inspire.length);
      res.status(200).send(inspire[i]);
    }

    if (choice === '1') {
      const i = Math.floor(Math.random() * help.length);
      res.status(200).send(help[i]);
    }
  },
};
