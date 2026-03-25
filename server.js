import app from './app';

const port = 1500;
app.listen(port, () =>
  {
    console.log("");
    console.log(`Usando a porta ${port}.\nPara conectar no (http://localhost:${port}).`);
  });
