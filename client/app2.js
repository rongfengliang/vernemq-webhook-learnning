var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://127.0.0.1')
 
client.on('connect', function () {
  client.subscribe('$share/service1/dalongdemo', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log("app2",topic)
  console.log(message.toString())
})