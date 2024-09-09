import nodemailer from 'nodemailer'

class mailService {
    constructor() {
        this.transporter = nodemailer.createTransport(
            {
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            }
        )
    }
    async sendMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на StyleNest',
            text: '',
            html:
                `
                    <div>
                        <h1>Для активации перейдите по ссылке снизу</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }
}

const mService = new mailService();

export default mService;