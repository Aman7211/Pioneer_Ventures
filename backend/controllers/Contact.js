const Contact = require('../models/contactSchema');

exports.ContactForm = async(req,res)=>{
 try {
    const {firstname, lastname, email, mobile, message}= req.body;

    if(!firstname || !lastname || !email || !mobile || !message){
        return res.status(400).json({
            success:false,
            message :"All the field is Compulsory"
        })
    }
    const contact = await Contact.create({
        firstname,
        lastname,
        email,
        mobile,
        message
    });
    return res.json({
        success: true,
        contact,
        message:"Contact Sent Successfully "
    })
 } catch (error) {
    return res.status(500).json({
        success:false,
        message:"Contact detail unable to Send"
    })
 }
  
}