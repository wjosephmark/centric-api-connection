const axios = require("axios");
require('dotenv').config()

//GENERATE CENTRIC TOKEN
const generateCentricToken = async () => {
  var data = JSON.stringify({
    username: process.env.CENTRIC_USERNAME,
    password: process.env.CENTRIC_PASSWORD,
  });

  var config = {
    method: "POST",
    url: `${process.env.CENTRIC_BASE_URL}:${process.env.CENTRIC_PORT}/csi-requesthandler/api/v2/session`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Cookie: process.env.CENTRIC_COOKIE,
    },
    data: data,
  };

  console.log(config);
  var response = await axios(config)
    .then((centricResponse) => {
      return centricResponse.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};

const handler = async (event, context) => {
  var centricToken = await generateCentricToken()
}

handler()