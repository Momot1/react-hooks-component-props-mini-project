import React from "react";

function MinutesRead( {minutes} ){
    let response, emoji, num
    if(minutes < 30){
        emoji = "☕️"
        num = minutes/5
    } else{
        emoji = "🍱"
        num = minutes/10
    }

    for(let i = 0; i < num; i++){
        response+=emoji
    }

    return (
        <>
            {response} {minutes} minutes read
        </>
    )
}

export default MinutesRead