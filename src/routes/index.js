const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  const allowUrl = url => url.startsWith('/css/') || url.startsWith('/img/') || url == '/private';
  if (process.env.SITE_PRIVATE && !req.session.xAuth && !allowUrl(req.url || '/') && !req.isAuthenticated()) {
    res.redirect('/private');
  } else {
    next();
  }
});

router.get('/private', (req, res) => {
  res.render('private');
});

router.post('/private', (req, res) => {
  let errors = [];
  const { password } = req.body;
  if(process.env.SITE_PRIVATE && password != process.env.SITE_PRIVATE) {
    errors.push({text: 'Passwords do not match.'});
  }
  if(errors.length > 0){
    res.render('private', {errors});
  } else {
    req.session.xAuth = 'ok';
    res.redirect('/notes');
  }
});

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
