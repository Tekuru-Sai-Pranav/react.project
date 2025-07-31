import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateStudent = () => {
    let navigate = useNavigate()
    let [formData, setFormData] = useState({
        username: "",
        useremail: ""
    })

    let handleChange = (e) => {
        let { name, value } = e.target
        setFormData({ ...formData, [name]: value })

    }

    let handleSubmit = (event) => {
        event.preventDefault()
        try {

            axios.post("http://localhost:5000/student", formData)
            navigate("/viewAll")

        } catch (error) {
            console.log(error);

        } finally {
            setFormData({
                username: "",
                useremail: ""
            })
        }
        console.log(formData);


    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">UserName : </label>
                    <input type="text" placeholder='enter username' name='username' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">UserEmail : </label>
                    <input type="email" placeholder='enter useremail' name="useremail" onChange={handleChange} />
                </div>
                <div>
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateStudent