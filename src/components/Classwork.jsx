import React, { useState } from 'react'
import axios from "axios"

function classwork() {
    let endpoint = "https://api.github.com/users";
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get(endpoint).then((response) => {
            console.log(response.data);
            setData(response.data)
        })

    }
    return (
        <div>
            <h1>Fetch</h1>
            <button className='bg-green-700 rounded-md' onClick={fetchData}>catch</button>
            {data.map((item, index) => (
                <div key={index} className="m-6 flex">
                    {/* {item.login}
                    <img src={item.avatar_url} height={200} width={200} alt="" /> */}

                    
                    <div
                        className="flex-initial w-64 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                className="rounded-t-lg"
                                src={item.avatar_url} height={200} width={300}
                                alt="" />
                        </div>
                        <div className="p-6">
                            <h1 className="text-base text-neutral-600 dark:text-neutral-200">
                            {item.login}
                            </h1>
                        </div>
                    </div>

                </div>
            ))};
        </div>
    );
}

export default classwork