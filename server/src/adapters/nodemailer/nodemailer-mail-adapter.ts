import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b2c4e92f0fcb6b",
    pass: "caf0b019ed50a2",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMain({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Lucas Gomes <lucas@gmail.com>",
      subject,
      html: body,
    });
  }
}
