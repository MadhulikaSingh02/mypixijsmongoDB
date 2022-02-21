const express = require("express"); // the library we will use to handle requests
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = 4567; // port to listen on

const app = express(); // instantiate express
app.use(require("cors")()); // allow Cross-domain requests
app.use(require("body-parser").json()); // automatically parses request data to JSON

app.set('view engine', 'ejs');

// make sure in the free tier of MongoDB atlas when connecting, to
// select version 4.0.* as the node.js driver

const uri = "mongodb+srv://madhulika:me%40A2173@cluster0.hmdpb.mongodb.net/test?retryWrites=true&w=majority"; // put your URI HERE
const client = new MongoClient(uri);//, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// connect to your MongoDB database through your URI. 
// The connect() function takes a uri and callback function as arguments.
var collection=null;
client.connect()
.then (()=>{
    collection = client.db("test").collection("users");
})
.catch(err=>{
    client.close();
    console.log(err);
})
  app.get("/:point", (req, res) => {

     collection.find({}).toArray((err, docs) => {
      if (err) {
        // if an error happens
        res.send("Error in GET req.");
      } else {
        // if all works
        //res.send(docs); //check
        res.render('index',{docs:docs});
        docs.forEach(element => {
            console.log(element.points);
        });
        
      }
    }); 
  });

  // Responds to POST requests with the route parameter being the username.
  // Creates a new user in the collection with the `user` parameter and the JSON sent with the req in the `body` property
  app.post("/:point", (req, res) => {
    // inserts a new document in the database (collection)
    //console.log("in Post\n");
    //console.log(req.body);
    //console.log(JSON.stringify(req.body));
    const product=req.body;
    collection.insertOne(
      product)
      .then( // this is one object to insert. `requst.params` gets the url req parameters
      () => {
          res.send("Information inserted");
      })
    .catch(err=>{
        client.close();
        console.log(err);
        res.send("Error in Post");
    })
  });

  // listen for requests
  var listener = app.listen(port, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });
//});