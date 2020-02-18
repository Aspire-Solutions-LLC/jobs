const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/users.js');
const secrets = require('../config/secrets.js');

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}); 

router.post('/login', (req, res) => {
  let { email, password } = req.body;
  Users.find({ email })
  .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // produce a token  
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.email}!`,
          token,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => { 
    
      res.status(500).json(error); 
      console.log(req.body)
      
    });
});

function generateToken(user) {
  const jwtPayload = {
    subject: user.userId,
    email: user.email
    };

  const jwtOptions = {
    expiresIn: '1d',
  };
  return jwt.sign(jwtPayload, secrets.jwtSecret, jwtOptions);
}

module.exports = router;
