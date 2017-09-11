# Description:
#   hello hubot World
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   sample_hubot hello - replay "Hello hubot World!!"
#
# Notes:
#   my first hubot app
#
# Author:
#   yukimura1227

module.exports = (robot) ->
  robot.respond /hello/i, (msg) ->
    msg.send "Hello hubot World!!"
