import React from "react";
import { useSelector } from "react-redux";
import { store } from './store/store'
function Guidelines() {

    const user = useSelector(state => state.user)

    return (
        <>
            <h1 >hello{user.firstName != "" ? " to " + user.firstName : ""}</h1>
            <h2>hello to guide</h2>
        </>
    )
}


export default Guidelines;