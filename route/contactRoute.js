const router = require("express").Router()
const nodemailer = require("nodemailer")

/* 
Steps to implement nodemailer.
1) Create Transporter Object.
2) We have to Set Mailing Options Object.
3) Deliver the Message with sent mail method.
*/
router.post("/", (req, res) => {
    let data = req.body
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({ msg: "Please Fill the Neccessary Fields!" })
    }

    // step 1.
    let smptTransporter = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        auth: {
            user: 'mushtaq.ahmed.av@gmail.com',
            pass: 'Rashid@123'
        }
    })
    // step 2.
    let mailOptions = {
        from: data.email,
        to: 'mushtaq.ahmed.av@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
        <h3> Information : </h3>
        <ul> 
        <li> Name : ${data.name} </li>
        <li> Email : ${data.email} </li>
        <li> Phone-Number : ${data.number ? data.number : "Not Provided"} </li>
        </ul>
        <h3> Message : </h3>
        <p> ${data.message} </p>
        `
    }
    // step 3.
    smptTransporter.sendMail(mailOptions, (error) => {
        try {
            if (error) return res.status(400).json({ msg: "Please Fill the Neccessary Fields!" })
            res.status(200).json({msg: "Thank you for contacting Mustaq."})
        } catch (error) {
            if (error) return res.status(500).json({ msg: "Server Error!" })
        }
    })

})

module.exports = router
