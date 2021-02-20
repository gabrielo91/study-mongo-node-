const mongoose = require('mongoose');
const PORT = 3002;
const { app } = require('./app');

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/study-node', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Connected to mongoose');
  } catch (error) {
    console.error(error);
  }

  app.listen(PORT, () => {
    console.log(`Starting server on ${PORT}`);
  });
};

start();
