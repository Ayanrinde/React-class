import React, { useState } from "react";

const Ternary = () => {
    const [name, setName] = useState("adebayo");
    const [userName, setUserName] = useState("");
    // const gender = "male"; // You might want to make this dynamic if needed

    const changeName = () => {
        setName(userName);
    };

    const user = (e) => {
        setUserName(e.target.value);
    };

    const allStudents = [
        { firstName: "bayo", lastName: "peter" },
        { firstName: "sola", lastName: "ade" }
    ];

    return (
        <div>
            <h1 className={gender === "male" ? "bg-blue-500" : "bg-red-500"}>{name}</h1>
            <input
                onChange={user}
                type="text"
                placeholder="Enter username"
                className="rounded-md p-4"
            />
            <button
                className="bg-green-500 text-white p-5 rounded-md my-3"
                onClick={changeName}
            >
                Change Name
            </button>

            <table className="border-collapse border border-slate-500">
                <thead>
                    <tr>
                        <th className="border border-slate-600">First Name</th>
                        <th className="border border-slate-600">Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {allStudents.map((student, index) => (
                        <tr key={index}>
                            <td className="border border-slate-700">{student.firstName}</td>
                            <td className="border border-slate-700">{student.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Ternary;
