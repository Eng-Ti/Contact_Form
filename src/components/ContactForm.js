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


    const saveFormData = async () => {
        const response = await fetch("https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries", {
            method: 'POST',
            body: JSON.stringify(form)
        });
        if (response.status !== 200) {
            throw new Error('Request failed: ${response.status}')
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await saveFormData();
            alert("Form Submitted!")
            setForm({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
        }

        catch (e) {
            alert('Registration failed!')
        }
    }

    // setForm({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: '',
    // })

    // const url = "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries"

    // Axios.post(url, {
    //     name: form.name,
    //     email: form.email,
    //     subject: form.subject,
    //     message: form.message
    // })

    //     .then(res => {
    //         console.log(res.form)
    //     })


    return (
        <div className='wrapper'>

            <p>Contact Us</p>

            <form className='form' onSubmit={handleSubmit}>

                <div className='name'>
                    <div><label htmlFor='name'>Name:</label></div>
                    <div><input id='name' type='text' placeholder='name' value={form.name} onChange={handleChange} /></div>

                </div>

                <div className='email'>
                    <div><label htmlFor='email'>Email:</label></div>
                    <div> <input id='email' type='email' placeholder='email' value={form.email} onChange={handleChange} /></div>

                </div>

                <div className='subject'>
                    <div><label htmlFor='subject'>Subject:</label></div>
                    <div><input id='subject' type='text' placeholder='subject' value={form.subject} onChange={handleChange} /></div>

                </div>

                <div className='message'>
                    <div><label htmlFor='message'>Message:</label></div>
                    <div><textarea id='message' type='text' placeholder='message' value={form.message} onChange={handleChange} /></div>

                </div>
                <button type="submit" disabled={!form.email}>
                    Submit</button>
            </form>

        </div>
    )
}

export default ContactForm