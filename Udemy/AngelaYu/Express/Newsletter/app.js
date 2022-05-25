const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;

  let data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  let jsonData = JSON.stringify(data);
  let url = "https://us17.api.mailchimp.com/3.0/lists/84c36f4e76";

  let options = {
    method: "POST",
    auth: "Deepak:6fc2f3ad99859852c86fa6d7285b0c3c-us17"
  }

  let request = https.request(url, options, (response) => {

    if(response.statusCode === 200){
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});

app.post("/failure", (req, res) => {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening at 3000...");
})



// Mailchimp API KEY - 6fc2f3ad99859852c86fa6d7285b0c3c-us17
// Audience ID - 84c36f4e76
