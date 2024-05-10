import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../css/create.css"

function StudentForm() {
    const intialData = { firstName: "", lastName: "", class: "", age: "", homeTown: "", pincode: "" }
    const [data, setData] = useState(intialData)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8080/api/students/`, data)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="createform">
            <form onSubmit={handleSubmit}>
                <h5>Enter Student Details</h5>

                <label>Enter FirstName: </label>
                <input type="text" name="firstName" placeholder="Enter FirstName" value={data.firstName} onChange={handleChange} /><br />

                <label>Enter LastName: </label>
                <input type="text" name="lastName" placeholder="Enter Lastname" value={data.lastName} onChange={handleChange} /><br />

                <label>Enter Class: </label>
                <input type="text" name="class" placeholder="Enter Class" value={data.class} onChange={handleChange} /><br />

                <label>Enter Age: </label>
                <input type="text" name="age" placeholder="Enter Age" value={data.age} onChange={handleChange} /><br />
                <br />

                <label>Enter HomeTown: </label>
                <input type="text" name="homeTown" placeholder="Enter HomeTown" value={data.homeTown} onChange={handleChange} /><br />
                <br />

                <label>Enter Pincode: </label>
                <input type="text" name="pincode" placeholder="Enter Pincode" value={data.pincode} onChange={handleChange} /><br />
                <br />
                <button>Create</button>
            </form>
            <Link to={"/"}>Cancel</Link>
        </div>
    )
}

export default StudentForm