import nodemailer from 'nodemailer';



export const sendMail = async (text) => {

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: 'darron70@ethereal.email',
                pass: 's5pmWh2FY7zccz8mac'
            },
        });

        const info = await transporter.sendMail({
            from: "amuamrat@gmail.com", 
            to: "amrat9620@gmail.com", 
            subject: 'CONTACT REQUEST FROM PORTFOLIO',
            text: text,
        });

        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Send mail error:', error);
        throw error;
    }
};


const text = 'Hey, this is a test email.';
sendMail(text);


