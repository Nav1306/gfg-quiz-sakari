const { v4: uuid } = require("uuid");

const userData = {
  "users": [
    {
      id: uuid(),
      username: "prakashsakari",
      password: "ps12345",
      emailId: "pk123@email.com",
    },

    {
      id: uuid(),
      username: "ashishgupta",
      password: "ag12345",
      emailId: "ag123@email.com",
    },
  ],
};

module.exports = userData;
