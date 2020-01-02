const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGOOSE || 'mongodb://localhost/node-notes-db', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
