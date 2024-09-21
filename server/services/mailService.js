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
                <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
    <style type="text/css">
            
    </style>
  </head>
  <body>
    <main>
                    <div>
                        <h1>Ваш заказ:</h1>
                            <div>Product name:${orderData.order[0].name}</div>
                            <div style="color: red">Quantity: ${orderData.order[0].quantity}</div>
                        <h1>Total: ${orderData.totalPrice}</h1>
                    </div> 
    </main>
    <script src="index.js"></script>
  </body>
</html>
                `
        })
    }
}

const mService = new mailService();

export default mService;