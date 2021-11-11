import React from "react";
import MinutesRead from "./MinutesRead";

function Article({ title, date = "January 1, 1970", preview, minutes }){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} <MinutesRead minutes = {minutes}/></small>
            <p>{preview}</p>
        </article>
    )
}

export default Article