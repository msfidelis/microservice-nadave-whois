const restify = require('restify');
const whois   = require('whois-json');

const PORT = process.env.PORT || 8080;

const MICROSERVICE_NAME  = 'whois-microservice';

const server = restify.createServer();

server.get('/whois/version', (req, res, next) => {
  res.send({version: "1.0", deployment: "blue"});
  next();
});

server.get('/healthcheck', (req, res, next) => {
  res.send({status: 200});
  next();
});

server.get('/whois/:domain',  async (req, res, next) => {

  const domain = req.params.domain;
  console.log(`searching for: ${domain}`);

  const result = await whois(domain);

  res.send(result);

  next();
});

server.listen(PORT, () => {
  console.log('%s listening at %s', MICROSERVICE_NAME, server.url);
});
