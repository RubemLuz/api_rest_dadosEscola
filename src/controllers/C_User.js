import User from "../models/db_user";

class Home
{
  async store(req,res)
  {
    try
    {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    }
    catch(e)
    {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async index(req,res)
  {
    try
    {
      const users = await User.findAll();
      return res.json(users);
    }
    catch(e)
    {
      console.log(e);
      return res.json (null);
    }
  }

  async show(req,res)
  {
    try
    {
      const { id } = req.params;
      const usersId = await User.findByPk(id);
      return res.json(usersId);
    }
    catch(e)
    {
      console.log(e);
      return res.json (null);
    }
  }

  async update(req,res)
  {
    try
    {
      const { id } = req.params;
      if(!req.params.id) {return res.status(400).json(
        { errors: ['ID não enviado!']}
      );}

      const usersId = await User.findByPk(id);
      if(!usersId) {return res.status(400).json(
        { errors: ['Usuario não existe!']}
      );}

      const updateData = await usersId.update(req.body);
      return res.json(updateData);
    }
    catch(e)
    {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async delete(req,res)
  {
    console.log("PASSANDO O DELETE!");
    try
    {
      const { id } = req.params;
      if(!req.params.id) {return res.status(400).json(
        { errors: ['ID não enviado!']}
      );}

      const usersId = await User.findByPk(id);
      if(!usersId) {return res.status(400).json(
        { errors: ['Usuario não existe!']}
      );}

      await User.destroy( {where: {id}} );

      return res.json(usersId);
    }
    catch(e)
    {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}

export default new Home();
