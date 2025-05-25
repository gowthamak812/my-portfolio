import React from "react";

function Cookie(name) {
    document.cookie = "username=gowtham; user-age=25; path=/; expires=Thu, 31 Dec 2025 12:00:00 UTC";
    document.cookie = "user-age=25; path=/; expires=Thu, 31 Dec 2025 12:00:00 UTC";
    function getcookie(name){
        let cookies = document.cookie.split("; ");
        for  (let cookie of cookies){
            let [key,value] = cookie.split("=");
            if(key === name){
                return value;
            }
        }
        return null;
    }

    let username = getcookie("username");
    console.log(username);
    
    return (
        ""
    );
}

export default Cookie;
