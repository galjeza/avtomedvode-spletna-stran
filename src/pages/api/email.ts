
import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';

const APIKEY="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"
// write interface for req.body
interface RequestBody {
  email: string;
  message: string;
}

sgMail.setApiKey(APIKEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // get data from req.body with typescript
  const { email, message }: RequestBody = req.body as RequestBody;


  const msg = {
    to: 'gal.jeza55@gmail.com',
    from: "gal.jeza55@gmail.com",
    subject: 'New message from your website',
    text: message,
    html: `<strong>${message}</strong>`,
  };

  try{
    await sgMail.send(msg)
    res.status(200).json({ status: 'OK' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error })
  }

  console.log(email)

}