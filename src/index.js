const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const configAuthentication = require('./config/authentication');
const registerUserRoutes = require('./routes/userRoutes');
const registerWalletRoutes = require('./routes/walletRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

configAuthentication(app);

registerUserRoutes(app);
registerWalletRoutes(app);

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
