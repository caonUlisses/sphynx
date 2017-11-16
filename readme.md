# SPHYNX

An authentication middleware for express microservices.

# How to use

You can install it with npm:


```bash
$ npm install sphynx --save

```

Then you are a simple require away from sphynx:

```javascript
const {sphynx} = require('sphynx')
```

It assumes you have a route like:

```javascript
// assuming your express() variable is called 'app'
app.get('/auth', (req, res) => {
  let token = req.header('x-auth')

  // just make sure your model have a method that returns a user by token
  User.returnByToken(token).then((user) => {
    res.status(200).send(user)
  }).catch((e) => {
    res.status(401).send('Unable to find user')
  })
})


```
### Real world example

You can easely plug it into your system and use it, as in:

```javascript
const express  = require('express')
// If you're not using ES6, you can change the line below 
const {sphynx} = require('sphynx')
let app = express()

// This one line will take care of requesting your auth server to know if the user is logged in
app.use(sphynx)

// If you want to use it on specific routes, you can add it like:
app.get('/foo', sphynx, (req, res, next) => {
  // your code here
})

```
You can access the user object sent over the request if you want to

## Got questions?

ulissescaon@gmail.com