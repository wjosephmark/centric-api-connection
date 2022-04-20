# centric-api-connection-node

A generic connection to Centric's C8 REST API written in Node.  THIS EXAMPLE ONLY DISPLAYS READ FUNCTIONALITY.

A link to the basic documentation (exstensive documentation must be obtained through Centric): https://usermanual.wiki/Document/C820REST20API20Developer20Guide.1477580063.pdf

## generateCentricToken
* This function generates the access token that is needed to performing CRUD operations.
* It does not expect any arguments to be passed.
* It returns the token as a string.
* The needed credentials are: a Centric username, password
  * Store in environment variables called 'CENTRIC_USERNAME' and 'CENTRIC_PASSWORD'
* The needed headers are: Content-Type, Accept, Cookie (obtained from Centric)
  * Store cookie in environment variable called 'CENTRIC_COOKIE'
* You will also need to obtain your instances base url, and the port that you will be accessing from Centric
  * Store in environment variables called 'CENTRIC_BASE_URL' and 'CENTRIC_PORT'

## sendCentricRequest
* This function sends a GET request to the specified endpoint.
* It expects the desired endpoint passed as a string. ex: 'skus' or 'category1s'
* It returns an object containing the response's data.
* The needed headers are token (the token obtained in the generateCentricToken function) and cookie (the same used in the generateCentricToken, obtained from centric)