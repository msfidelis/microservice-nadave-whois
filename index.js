const restify = require('restify');
const whois   = require('whois-json');

const server = restify.createServer();

const PORT = process.env.PORT || 8080;

const MICROSERVICE_NAME  = 'whois-microservice';


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
