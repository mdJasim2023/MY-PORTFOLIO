import React, { useState } from 'react';
import './interview.css';

function GetEmployeeDetails2() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        salary: '',
        gender: '',
        mobile: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Enter employee name"
                    value={formData.name}
                /><br /><br />
                <input
                    type="text"
                    name="age"
                    onChange={handleChange}
                    placeholder="Enter employee age"
                    value={formData.age}
                /><br /><br />
                <input
                    type="text"
                    name="salary"
                    onChange={handleChange}
                    placeholder="Enter salary"
                    value={formData.salary}
                /><br /><br />
                <input
                    type="text"
                    name="gender"
                    onChange={handleChange}
                    placeholder="Enter gender"
                    value={formData.gender}
                /><br /><br />
                <input
                    type="text"
                    name="mobile"
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    value={formData.mobile}
                /><br /><br />
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <table className="tab">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Salary</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{submittedData.name}</td>
                            <td>{submittedData.age}</td>
                            <td>{submittedData.gender}</td>
                            <td>{submittedData.salary}</td>
                            <td>{submittedData.mobile}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default GetEmployeeDetails2;
