/* eslint-disable no-console */

const functions = require("firebase-functions");
const { responseToken } = require("tw-activity").crc;

const config = {
  consumer_secret: functions.config().twitter.consumer_secret
};

exports.webhook = functions.https.onRequest((request, response) => {

  switch (request.method) {
    case "GET":
      webhookGet(request, response);
      break;
    case "POST":
      webhookPost(request, response);
      break;
    default:
      response.sendStatus(405);
      break;
  }
});

// https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/guides/securing-webhooks
function webhookGet(request, response) {

  const crcToken = request.query.crc_token;
  if (crcToken) {
    const response_token = responseToken(crcToken, config.consumer_secret);
    response.status(200).send(response_token);
  } else {
    console.error("crc_token missing from request.");
    response.sendStatus(400);
  }
}

function webhookPost(request, response) {

  console.log("receive event", request.body);

  // <you can edit here>

  response.sendStatus(200);
}
