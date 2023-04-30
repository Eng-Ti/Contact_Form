import React from 'react'
import Axios from 'axios'
import '../style/ContactForm.css'


const ContactForm = () => {

    const [form, setForm] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(form.name + ' ' + form.email + ' ' + form.subject + ' ' + form.message);

        alert("Form Submitted!")

        setForm({
            name: '',
            email: '',
            subject: '',
            message: '',
        })

        const url = "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries"

        Axios.post(url, {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message
        })

            .then(res => {
                console.log(res.form)
            })

    };

    return (
        <div>

            <p>Contact Us</p>

            <form className='form' onSubmit={handleSubmit}>

                <div className='name'>
                    <div><label htmlFor='name'>Name:</label></div>
                    <div><input id='name' type='text' value={form.name} onChange={handleChange} /></div>

                </div>

                <div className='email'>
                    <div><label htmlFor='email'>Email:</label></div>
                    <div> <input id='email' type='email' value={form.email} onChange={handleChange} /></div>

                </div>

                <div className='subject'>
                    <div><label htmlFor='subject'>Subject:</label></div>
                    <div><input id='subject' type='text' value={form.subject} onChange={handleChange} /></div>

                </div>

                <div className='message'>
                    <div><label htmlFor='message'>Message:</label></div>
                    <div><textarea id='message' type='text' value={form.message} onChange={handleChange} /></div>

                </div>
                <button type="submit">
                    Submit</button>
            </form>

        </div>
    )
}

export default ContactForm