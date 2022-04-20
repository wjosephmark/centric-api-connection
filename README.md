# centric-api-connection-node

##Generate Centric Token
*This function generates the access token that is needed to performing CRUD operations.
*It does not expect any arguments to be passed.
*The needed credentials are: A Centric username, password
  *Store in .env file as 'CENTRIC_USERNAME' and 'CENTRIC_PASSWORD'
*The needed headers are: Content-Type, Accept, Cookie (obtained from Centric)
  *Store cookie in .env file as 'CENTRIC_COOKIE'
*You will also need to obtain your instances base url, and the port that you will be accessing from Centric
  *Store in .env file as 'CENTRIC_BASE_URL' and 'CENTRIC_PORT'