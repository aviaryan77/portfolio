import { NextApiRequest, NextApiResponse } from 'next';

import { services } from '@/DATA';

const S = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(services);

  res.status(200).send({ services });
};
export default S;
