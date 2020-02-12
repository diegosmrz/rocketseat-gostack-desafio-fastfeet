import { Router } from 'express';
import Recipient from './app/models/Recipient';

const routes = new Router();

routes.get('/', async (req, res) => {
  const recipient = await Recipient.create({
    name: 'Nome do destinatário',
    address: 'Rua do destinatário',
    number: 181,
    addressdetails: 'Complemento',
    city: 'Cidade',
    state: 'Estado',
    cep: 'CEP',
  });

  return res.json(recipient);
});

export default routes;
