import Aluno from "../models/db_aluno";

class Home
{
  async index(req,res)
  {
    const newAluno = await Aluno.create(
      {
        name: 'Rubem',
        sobrenome: 'Luz',
        email: 'rubem.luz.santos@gmail.com',
        idade: 27,
        peso: 58,
        altura: 1.70,
      });
      res.send(newAluno);
  }
}

export default new Home();
