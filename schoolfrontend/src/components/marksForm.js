import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../css/create.css"

function MarksForm() {
    const intialData = { studentId: "", marks: "", subject: "" }
    const [data, setData] = useState(intialData)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8080/api/marks/`, data)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="createform">
            <form onSubmit={handleSubmit}>
                <h5>Enter Marks Details</h5>

                <label>Enter StudentId: </label>
                <input type="text" name="studentId" placeholder="Enter StudentId" value={data.studentId} onChange={handleChange} /><br />

                <label>Enter Marks: </label>
                <input type="text" name="marks" placeholder="Enter Marks" value={data.marks} onChange={handleChange} /><br />

                <label>Enter Subject: </label>
                <input type="text" name="subject" placeholder="Enter Subject" value={data.subject} onChange={handleChange} /><br />

                <button>Create</button>
            </form>
            <Link to={"/"}>Cancel</Link>
        </div>
    )
}

export default MarksForm