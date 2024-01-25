import React, { useState } from "react"
import style from "./About.module.css"

function About () {
const [name, setName] = useState("bayo")
const changeName = () => {
    setName("black Panther")
}
    return (
        <div>
            <h1 className={style.head}>Hello World</h1>
            <h1>{name}</h1>
            <button onClick={changeName}>click me</button>

        </div>
    )
}

export default About