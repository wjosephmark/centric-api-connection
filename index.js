const axios = require("axios");
require('dotenv').config()

var centricToken = ''

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

// SEND REQUEST TO CENTRIC
// FUNCTION EXPECTS THE ENDPOINT PASSED AS A STRING.  EX: "skus" or "category_1s"
const sendCentricRequest = async (endpoint) => {
  var offput = 0;
  var finalQuery = false;
  var response = [];

  console.log(`Querying Centrics ${endpoint} Endpoint`);

  while (!finalQuery) {
    await axios({
      method: "get",
      url: `${process.env.CENTRIC_BASE_URL}:${process.env.CENTRIC_PORT}/csi-requesthandler/api/v2/${endpoint}?limit=1000&skip=${offput}`,
      headers: {
        token:
          centricToken,
        Cookie: centricToken,
      },
    })
      .then((centricResponse) => {
        centricResponse.data.forEach((item) => {
          response.push(item);
        });

        if (centricResponse.data.length < 1000) {
          finalQuery = true;
        } else {
          offput = offput + centricResponse.data.length;
        }
      })
      .catch((error) => {
        finalQuery = true;
        console.log(error.response);
      });
  }

  return response;
};

const handler = async (event, context) => {
  centricToken = await generateCentricToken()
}

handler()