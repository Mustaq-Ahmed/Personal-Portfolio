import React from "react"

import './MainHeader.css'

export default function Navbar(props) {

    return (
        <div className="main-header-container">
        {props.children}
        </div>
    )
}