import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputField from "./InputField"
import TextareaField from "./TextareaField";
import { Icon } from '@iconify/react';



const ContactForm = ({darkmode}) => {
  const color = (darkmode) => (darkmode ? '#8ed1fc' : "#ed2e38");
  const bgcolor = (darkmode) => (darkmode ? '#3e6259' : '#FCDAE0');
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: bgcolor(darkmode),
    boxShadow: 24,
    p: 4,
    fontFamily: "Roboto",
    color: color(darkmode),
  };
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    role: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_bdjanpp", "template_7t26mxo", values, "pjuE8ieyWx8EhmlW7")
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          role: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  const sending = (e) => {
    return (
      <>

        Email ssending...
      </>
    )
  }
  return (
    <>
    <Icon icon="fontisto:email" color={color(darkmode)} width="48" height="48" onClick={handleOpen}/>
    {/* <Button onClick={handleOpen}>Open modal</Button> */}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
     <div className="contact-form">
     
      <form onSubmit={handleSubmit}>
        <h3 className="text-gray-700 mb-7 text-xl font-semibold">I'D LOVE TO HEAR FROM YOU!  <br></br>SEND ME AN EMAIL...</h3>
        <br></br>
        <div className='contact-form-line1'>

          <InputField value={values.fullName} handleChange={handleChange} label="Full Name:" name="fullName" type="text" placeholder="John Doe" />
          <InputField value={values.email} handleChange={handleChange} label="E-Mail:" name="email" type="email" placeholder="jphn@example.com" />
        </div>
        <InputField value={values.subject} handleChange={handleChange} label="Subject:" name="subject" type="subject" placeholder="Hello" />

        <br></br>
        <TextareaField value={values.message} handleChange={handleChange} label="Your message here:" name="message" />
        <br></br>
        <Button type="submit" variant="outlined" onClick={sending()}
          sx={{ color: color(darkmode), borderColor: color(darkmode) }}
        >Send
          
        </Button>
        {status && renderAlert()}
      </form> 
    </div> 
        </Box>
      </Modal>
    </>
  )
}

const renderAlert = () => (
  <div className="">
    Email sent!
  </div>
)

export default ContactForm