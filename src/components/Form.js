import React, { useRef } from 'react'

const Form = () => {

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [subject, setSubject] = React.useState();
    const [message, setMessage] = React.useState();

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSubject = (event) => {
        setSubject(event.target.value);
    }

    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // const email = event.target.elements.email.value;
        // const password = event.target.elements.password.value;
        alert(name + " " + email + " " + subject + " " + message)
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' value={name} onChange={handleName} />
                </div>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' value={email} onChange={handleEmail} />
                </div>

                <div>
                    <label htmlFor='subject'>Subject</label>
                    <input id='subject' type='text' value={subject} onChange={handleSubject} />
                </div>

                <div>
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' value={message} onChange={handleMessage} />
                </div>
                <button type='submit'>Submit</button>
            </form>


        </div>
    )
}

export default Form