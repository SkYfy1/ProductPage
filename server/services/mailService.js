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

    async afterActivation(to) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Спасибо за активацию аккаунта на StyleNest',
            text: '',
            html:
                `
                    <div>
                        <h1>Спасибо за активацию аккаунта</h1>
                        <h1>${to}</h1>
                    </div>
                `
        })
    }

    async orderConfirmation(to, orderData) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Спасибо за заказ на StyleNest',
            text: '',
            html:
                `
                    <div>
                        <h1>Ваш заказ:</h1>
                        <h1>${orderData}</h1>
                    </div>
                `
        })
    }
}

const mService = new mailService();

export default mService;