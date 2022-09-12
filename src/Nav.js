import React from "react"
import earth from './images/earth.png'

export default function Nav() {
    return (
        <nav className="navbar">
            <img className="nav--logo" src={earth} />
            <h3 className="nav--brand" >my travel journal.</h3>
        </nav>
    )
}