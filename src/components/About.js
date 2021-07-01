import React from "react"

const About = ({blogImage="https://via.placeholder.com/215", blogP}) => {
    return (
        <aside>
            <img src={blogImage} alt="blog logo"></img>
            <p>{blogP}</p>

        </aside>

    )
}








export default About