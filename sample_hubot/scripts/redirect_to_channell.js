/*
Description:
  redirect to channel

Dependencies:
  None

Configuration:
  None

Commands:
  sample_hubot rule [channel] [probability] [word 1] [word 2] [word n].... - post to channel in probability the words

Notes:
  my first hubot app

Author:
  yukimura1227
*/

function sleep(msec) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

module.exports = function(robot) {
  robot.hear(/^rule\s+#(.*)\s+(\d+)\s+(.*)/i, async (res) => {
    var channel    = res.match[1];
    var probability = res.match[2];
    var words       = res.match[3].split(' ');
    res.send(channel);
    res.send(probability);
    for(let word of words) {
      // res.send(word);
      robot.send({ room: channel }, word);
      await sleep(3000);
    }
  });
};
