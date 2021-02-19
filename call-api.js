const https = require('https');

async function callApi(url) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(data));
      });

      res.on('error', (err) => {
        reject(err);
      });
    });

    req.end();
  });
}

module.exports = { callApi };
