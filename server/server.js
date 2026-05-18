const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-mail", async (req, res) => {

    const { name, email, message } = req.body;

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            replyTo: email,
            to: process.env.EMAIL,
            subject: "New Contact Form Message",
            html: `
                <h2>Contact Message</h2>

                <p><b>Name:</b> ${name}</p>

                <p><b>Email:</b> ${email}</p>

                <p><b>Message:</b> ${message}</p>
            `,
        });

        res.json({
            success: true,
        });

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
        });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server Running on ${process.env.PORT}`);
});