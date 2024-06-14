const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const url = 'http://site.web.api.espn.com/apis/site/v2/sports/cricket/scorepanel';
  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
