const secrets = {
  dbUri: process.env.DB_URI || 'mongodb://caio:caio123@ds139896.mlab.com:39896/node',
};

const getSecret = (key) => secrets[key];

module.exports = { getSecret };
