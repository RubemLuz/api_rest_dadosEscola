import User from "../models/db_user";

class Home
{
  async store(req,res)
  {
    try
    {
      const newUser = await User.create(req.body);
      const {id, nome, email} = newUser;

      return res.json({id, nome, email});
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
      const users = await User.findAll( { attributes: ['id', 'nome', 'email'] });
      console.log(req.userId);
      console.log("ij");
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
      const usersId = await User.findByPk(id);

      const { id, nome, email } = usersId;
      return res.json({ id, nome, email });
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
      const user = await User.findByPk(req.userId);
      if(!user) {return res.status(400).json(
        { errors: ['Usuario não existe!']}
      );}

      const updateData = await user.update(req.body);
      const {id, nome, email} = updateData;
      return res.json({id, nome, email});
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
      const id = await User.findByPk(req.userId);
      if(!id) {return res.status(400).json(
        { errors: ['Usuario não existe!']}
      );}

      await User.destroy( {where: {id}} );

      return res.json(id);
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
