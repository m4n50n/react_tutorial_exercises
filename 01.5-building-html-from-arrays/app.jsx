import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [];
const websLists = ["google.com", "facebook.com", "amazon.com"];

for (const web of websLists) {
    navlinkItems.push(
        <li className="nav-item">
            <a className="nav-link" href="#">Link to {web}</a>
        </li>
    );
}

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
