import React from "react";
import './List.css';


const List = (props) => {

    let listJSX = props.listToDisplay.map((object, index) => {
        return <li key={index}>{object.name} {object.lastname}</li>
    })

    return (
        <div>
            <ul className="users-list">
                {listJSX}
            </ul>
        </div>
    )
}

export default List;