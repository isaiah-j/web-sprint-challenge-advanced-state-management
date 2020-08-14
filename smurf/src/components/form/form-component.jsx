import React, { useState } from 'react'
import './form-styles.scss'
import { TextField, Button } from '@material-ui/core'
import postSmurf from '../../redux/actions'


const initialValues = {
    name: 'John Smurf',
    age: 21,
    height: 6
}

const Form = () => {

    const [formValues, setFormValeus] = useState(initialValues)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValeus({
            ...formValues,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
        console.log('Something was submitted')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
                <TextField value={formValues.name} onChange={handleChange} name='name' label='name'></TextField>
                <TextField value={formValues.age} onChange={handleChange} name='age' label='age'></TextField>
                <TextField value={formValues.height} onChange={handleChange} name='height' label='height'></TextField>
                <Button type='submit' variant='contained' color='primary'>Create Smurf</Button>
            </div>
        </form>
    )
}

export default Form