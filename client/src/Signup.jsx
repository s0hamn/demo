
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export default function Signup() {
    const [name, setName] = useState('')
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://demo-bice-nu.vercel.app/register', {
            name: name
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="Name">Name</label>
                    <input type="text" placeholder='Enter Name' autoComplete='off'
                        name='name'
                        className='form-control rounded-0'
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary rounded-0'>Submit</button>
            </form>
        </div>
    )
}
