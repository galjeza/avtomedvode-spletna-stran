
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
// write interface for req.body
interface RequestBody {
  email: string;
  message: string;
}



// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // get data from req.body with typescript
  const { message }: RequestBody = req.body as RequestBody;



  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
      user: 'avtomedvode.povprasevanje@gmail.com',
      pass: 'jtumlfdkroxgrmvz',
    },
    secure: true,
  })

  const mailData = {
    from: 'avtomedvode.povprasevanje@gmail.com',
    to: 'gal.jeza55@gmail.com',
    subject: `Povpraševanje s spletne strani`,
    text:message,
   }

   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
   transporter.sendMail(mailData, function (err: any, info: any) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

  console.log(email)
  res.send('ok')

}