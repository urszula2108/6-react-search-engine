import React from "react";
import './Filters.css';


const Filters = (props) => {

    return (
        <div className="main-div-search">
            <div>
                <div className="header-list">
                    <h2 >User's List</h2>
                </div>
                <div className="div-search-input">
                    <input type="text" name="search-input" id="serach-input" value={props.usersString} onChange={props.enteredString} placeholder="Find employee..."></input>
                </div>
            </div>
            <div>
                <div>
                    <input type="checkbox" id="female" name="female" onChange={props.changeBoxWoman} checked={props.valueInputWoman} />
                    <label htmlFor="female">Kobiety</label>
                </div>
                <div>
                    <input type="checkbox" id="male" name="male" onChange={props.changeBoxMan} checked={props.valueInputMan} />
                    <label htmlFor="male">Mężczyźni</label>
                </div>
            </div>
        </div>
    )
}


export default Filters;










