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
    res.status(401).send('Não foi possível localizar o usuário')
  })
})

```

---

ulissescaon@gmail.com
Ulisses Caon - 2017