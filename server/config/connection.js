// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;

//----------------------------------------------------------------

const mongoose = require('mongoose');
const is_production = process.env.NODE_ENV;

const url = is_production ? 'mongodb+srv://b-alt-del:password12345@cluster0.c5whavk.mongodb.net/?retryWrites=true&w=majority' : 'mongodb://127.0.0.1:27017/googlebooks'

  mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;