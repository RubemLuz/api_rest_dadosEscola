import Aluno from '../models/db_aluno';
import Photo from '../models/db_photo';

class AlunoController
{
  async index(req,res)
  {
    const alunos = await Aluno.findAll(
      {
        attributes: ["id", "nome", "sobrenome", "email","peso", "altura"],
        order: [['id', 'DESC'],[Photo,'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename','url'],
        }
      }
    );

    res.json(alunos);
  }

  async store(req,res)
  {
    try
    {
      const aluno = await Aluno.create(req.body);

      return res.json(aluno);
    }
    catch(e)
    {
      return res.status(400).json({
        error: e.erros.map((err) => err.message)})
    }
  }
  async show(req,res)
  {
    try
    {
      const { id } = req.params;
      if (!id)
      {
        return res.status(400).json({
          error: ['Missing ID']
        })
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ["id", "nome", "sobrenome", "email","peso", "altura"],
        order: [['id', 'DESC'],[Photo,'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename','url'],
        }
      });
      if (!aluno)
      {
        return res.status(400).json({
          error: ['Missing Aluno!']
        })
      }

      return res.json(aluno);
    }
    catch(e)
    {
      return res.status(400).json({
        error: e.erros.map((err) => err.message)})
    }

  }
  async update(req,res)
  {
    const { id } = req.params;
      if (!id)
      {
        return res.status(400).json({
          error: ['Missing ID']
        })
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno)
      {
        return res.status(400).json({
          error: ['Missing Aluno!']
        })
      }
      const newAluno = await aluno.update(req.body);

      return res.json(newAluno);
  }
  async delete(req,res)
  {
    const { id } = req.params;
      if (!id)
      {
        return res.status(400).json({
          error: ['Missing ID']
        })
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno)
      {
        return res.status(400).json({
          error: ['Missing Aluno!']
        })
      }

      await aluno.destroy();

      return res.json({ Mensage: 'Aluno apagado!'})
  }

}

export default new AlunoController();
