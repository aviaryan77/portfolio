import { NextApiRequest, NextApiResponse } from 'next';

import { services } from '@/DATA';

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(services);

  res.status(200).send({ services });
};
