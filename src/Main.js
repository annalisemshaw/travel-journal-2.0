import React from "react"
import pin from './images/pin.png'

export default function Main(props) {
    return (
        <section className="section">
            <div>
                <img className="section--img" src={`${props.item.img}`} />
            </div>

            <div className="section--info">
                <div className="section--stats">
                    <div className="location">
                        <img className="section--pin" src={pin} />
                        <span className="section--location">
                            {props.item.location}
                        </span>
                    </div>
                    <span className="section--link">
                        <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                    </span>
                </div>
                <h3 className="section--title">{props.item.title}</h3>
                <h4 className="section--dates">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="section--descrip">{props.item.description}</p>
            </div>
        </section>
    )
}