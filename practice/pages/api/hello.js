// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { _connection } from '../../lib/config/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const response = await _connection
      .collection('movies')
      .findOne({ title: 'Blacksmith Scene' });

    res.json(response);
  } else {
    return;
  }
}
