import multer from 'multer';

import multerConfig from '../config/multerConfig';

import PhotoDB from '../models/db_photo';

const upload = multer(multerConfig).single('photo');


class Photo
{
  store(req,res)
  {
    return upload(req,res, async (err) =>
    {
      if(err)
      {
        return res.status(400).json(
          {
            errors: [err.code],
          }
        );
      }

      try
      {
        const { originalname, filename } = req.file;
        const { aluno_id} = req.body
        const photo = await PhotoDB.create({originalname, filename, aluno_id});

        return res.json(photo);
      }catch(err)
      {
        console.log(err.message);
        return res.status(400).json(
          {
            errors: ['ALUNO NÃO EXISTE'],
          });
      }
    });
  }
}

export default new Photo();
