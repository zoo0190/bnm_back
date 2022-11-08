// ...api/:appid/:version/:schemas/:idcmd?searchStr=abc
export const api = (res, req) => {
  const { appid, version, schemas, idcmd } = req.params;
  const { searchStr } = req.query;
  res.json({ appid, version, schemas, idcmd, searchStr });
};

export const apiParams = (req, res) => {
  const { appid, version, schemas, idcmd } = req.params;
  res.json({ appid, version, schemas, idcmd, query: req.query });
};

export const hello = (req, res) => {
  res.send('Hello World!');
};
