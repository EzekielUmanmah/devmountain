import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
const chats = [];

export function createMessage(req, res) {
  console.log(req.body);
  const { pin, message } = req.body;
  for (let i = 0; i < chats.length; i++) {
    const existing = compareSync(pin, chats[i].pinHash);
    if (existing) {
      chats[i].messages.push(message);
      let messagesToReturn = { ...chats[i] };
      delete messagesToReturn.pinHash;
      res.status(200).send(messagesToReturn);
      return;
    }
  }

  const salt = genSaltSync(5);
  const pinHash = hashSync(pin, salt);

  let msgObj = {
    pinHash,
    messages: [message],
  };
  chats.push(msgObj);
  let messagesToReturn = { ...msgObj };
  delete messagesToReturn.pinHash;
  res.status(200).send(messagesToReturn);
}
