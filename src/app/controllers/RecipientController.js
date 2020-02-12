import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      number: Yup.integer().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Scham validation invalid' });
    }

    const recipientExists = await Recipient.findOne({
      where: {
        name: req.body.name,
        number: req.body.number,
        cep: req.body.cep,
      },
    });

    if (recipientExists) {
      return res.status(400).json({
        error: 'Recipient name already exists on this Number and CEP.',
      });
    }

    const { name, address, number, city, state, cep } = await Recipient.create(
      req.body
    );

    return res.json({
      name,
      address,
      number,
      city,
      state,
      cep,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      address: Yup.string(),
      number: Yup.integer(),
      city: Yup.string(),
      state: Yup.string(),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Scham validation invalid' });
    }
    console.log(req.userID);

    return res.json(req.userID);
  }
}

export default new RecipientController();
