import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
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
    console.log(req.userID);

    return res.json(req.userID);
  }
}

export default new RecipientController();
