import express from 'express';
import { PORT } from './config.js';
import { api, apiParams, hello } from './routes/api.js';

const app = express();

app.get('/', hello);

app.all('/api/:appid/:version/:schemas/:idcmd', api);

app.all('/apiparams/:appid/:version/:schemas/:idcmd', apiParams);

const server = app.listen(PORT, () => {
  console.log(`BnM Server listening on port ${PORT}`);
});

export { server };
