const PORT = 4045;
const { app } = require('./app');

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Starting server on ${PORT}`);
  });
};

start();
