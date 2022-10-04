import React, { useState } from "react";
import { Typography, TextField } from '@mui/material';

// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = (data) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada


    const [ contact, newContact ] = useState('');

    const onSubmitContact = (contact) => {
        newContact(...contact, data);
    }

    const onChangeContact = (data) => {
        newContact.preventDefault();
        newContact(data.target.value);
        newContact("");
    }

    return (
        <>
        <form onSubmit={onSubmitContact}>
        <TextField id="filled-basic" label="Name" variant="filled" value={onChangeContact}/>
        <TextField id="filled-basic" label="Phone" variant="filled" value={onChangeContact}/>
        <TextField id="filled-basic" label="Email" variant="filled" value={onChangeContact}/>
        <TextField id="filled-basic" label="Photo URL" variant="filled" value={onChangeContact}/>
        </form>
        <Typography variant="h4">ADD NEW</Typography>
        </>
    );
}

export default ContactForm;