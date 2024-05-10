import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/home.css"

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios('http://localhost:8080/api/students')
            .then(res => {
                setData(res.data)
                console.log("data: ", res.data)
            })
    }, [])

    return (
        <div id="homediv">
            <h2 className='title'>School App</h2>
            <Link to="/studentForm">Add Student</Link>
            <Link to="/marksForm">Add Student Marks</Link>
            <table id="tradingtable">
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Class</th>
                        <th>Age</th>
                        <th>Home Town</th>
                        <th>Pincode</th>
                        <th>Subject</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {data.reverse().map((item, si) =>
                        item.marks.map((mark, mi) =>
                            <tr key={`${si}-${mi}`}>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.class}</td>
                                <td>{item.age}</td>
                                <td>{item.homeTown}</td>
                                <td>{item.pincode}</td>
                                <td>{mark.subject}</td>
                                <td>{mark.marks}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>

    );
}
export default Home;
