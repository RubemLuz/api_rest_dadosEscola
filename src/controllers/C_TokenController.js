import User from "../models/db_user";
import jwt from "jsonwebtoken";

class TokenController
{
  async store(req,res)
  {
    try
    {
      const { email = '', password = ''} = req.body;

      if(!email || !password) { return res.status(401).json(
      {
        errors: ['Credenciais Invalidas!'],
      }
      )}
      const user = await User.findOne({ where : {email} });
      if(!user) { return res.status(401).json(
      {
        errors: ['Usuario não existe'],
      }
      )}

      if(!(await user.passwordIsValid(password)))
      {
        return res.status(401).json(
        {
        errors: ['Senha invalida'],
        });
      }

      const { id } = user;
      const token = jwt.sign({id, email }, process.env.TOKEN_SECRET,
        {
          expiresIn: process.env.TOKEN_EXPIRATION,
        }
      );

      return res.json(token);
    }
    catch(e)
    {
      return res.status(404).json(console.log(e));
    }
  }

}

export default new TokenController();
