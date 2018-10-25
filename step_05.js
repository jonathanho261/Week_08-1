const express = require('express')
var bodyParser = require('body-parser')
var request = require('request');

//  Create an instance of express
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//  Declare a port to run on
const port = 3000

//  Declare a route
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/form2.html')
})

function reallyCoolAPI(query) {
	// request.get('https://swapi.co/api/people/?search=',options,function(err,res,body){
	//   if(!err &&res.statusCode !== 200 ){
	//   	console.log(body);
	//   }
	// });
  return "my API result"
}

app.get("/api/search/query", (req, res) => {
  let query = req.params.query
  res.send(reallyCoolAPI(query))
})

app.post("/", (req, res) => {
  let str = req.body.str
  let message = "this is what you looked for:"
  // var request = require('request');
  // request('http://www.google.com', function (error, response, body) {
  // if (!error && response.statusCode == 200) {
  // 	console.log(body) // Print the google web page.
  //   }
  // })
  res.send(message)
})

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
