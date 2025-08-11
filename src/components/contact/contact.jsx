
import './contact.css';
import linkedin from '../../assets/linkedin.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact(){
    const visit = () => {
        window.open("https://www.linkedin.com/in/yash-nanekar-b7b69a345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank");
    }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7nu3nh8', 'template_lahdurd', form.current, {
        publicKey: 'mZg2P4qPVMlQ86g4I',
      })
      .then(
        (result) => {
            console.log(result.text);
            e.target.reset();
            alert('SUCCESS! Message Sent');
        },
        (error) => {
            console.log(result.text);
            alert('FAILED... To send Message', error.text);
        },
      );
  };
    return(
        <section>
            <div id="contact">
                <h1 className="contactpagetitle">Contact Me</h1>
                <span className="contactdesc">
                    Please Fill Out the form for any work opportunities.
                </span>
                <form className='contactform' ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Your Name" className='name' ref={form} name='name'></input>
                    <input type="email" className="email" placeholder="Your Email" ref={form} name='email'></input>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" ref={form}></textarea>
                    <button type="submit" value="Send"className="formbtn">Submit</button>
                    <div className="linksform">
                        <h2>Visit my Linkedin Account.</h2>
                        <img src={linkedin}alt="Linkedin" className='iconlink'></img>
                        


                    </div>

                </form>
                 <button className='visit' onClick={visit}>Visit</button>


            </div>

        </section>
    )
}
export default Contact;
