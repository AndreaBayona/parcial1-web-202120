const axios = require('axios');

const { response, request } = require('express');

const DATA_PLAYERS = "https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players";

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  const players = await axios.get(DATA_PLAYERS);
  const sum = parseInt(req.params.input);
  const filterPlayers = getPairs(players.data.values, sum);
  console.log(filterPlayers.length);
  return resp.send(filterPlayers).json;
};

const getPairs = (data, sum) => {
  const pairs = [];
  let tempPlayer;
  let tempPlayer2;

  for (let player1 = 0; player1 < data.length; player1++) {
    tempPlayer = parseInt(data[player1]["h_in"]);
    for (let player2 = player1 + 1; player2 < data.length; player2++) {
      tempPlayer2 = parseInt(data[player2]["h_in"]);
      if(tempPlayer + tempPlayer2 === sum) {
        let name1 = data[player1]["first_name"] + " " + data[player1]["last_name"];
        let name2 = data[player2]["first_name"] + " " + data[player2]["last_name"];
        pairs.push([name1, name2])
      }
    }
  }

  return pairs;
}

module.exports = { getPairsOfPlayers };
