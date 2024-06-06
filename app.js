// const heading = document.createElement("h1");
// heading.innerText = "myname is atul chauhan";
// const root= document.getElementById("ROOT"); //
//   root.appendChild(heading);

// !PARCEL USES
//IT CREATES A SERVER FOR OUR PROJECT TO RUN
// HMR (HOT MODULE REPLACEMENT)
//FILE WATCHER ALGORITHMS which are written in C++
//BUNDLING
//MINIFYING
//REMOVING CONSOLES
//CLEANING OUR CODE
//PARCEL IS A BEAST
//DEV AND PRODUCTION BUILD
//IT CONTSAINS SUPERFAST BUILD ALGORITHMS
//IT DOES IMAGE OPTIMIZATION
//IT DOES JS OPTIMIZATION
//CACHING WHILE DEVELOPMENT ( it will reduce the building time of the project just by checking the changes which we done in our code)
//COMPRESSIONS OF FILES , VARIABLES ,etc
//COMPATIBILITY WITH OLDER VERSIONS OF BROWSER
//IT GIVES US FUNCTIONALITY THAT WE CAN BUILD OUR APP ON HTTPS ON DEV MACHINE JUST BY WRITING COMMAND ( npx parcel index.html --https)
//we can also use command like(npx parcel build index.html --https) or simply without https
//&THIS IS THE VERY IMPORTANT INTERVIEW QUESTION PARCEL ALSO MANAGES THE PORT NUMBER
//&ANYTHING WHICH WE CAN BE  GENERATED ON SERVER SHOULD BE PUT INTO .gitignore file SO parcel-cache file will be pushed into .gitignore file
//CONSISTENT HASHIGN ALGORITHMS
//ZERO CONFIGURATIONS HAVE TO BE DONE AFTER INSTALLING PARCEL
//& WE HAVE A PACAKE MANGER WHICH HANDLES OR TAKES CARES OF THE TRANSITIVE DEPENDENCIES OF OUR CODE 

import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
  "h1",
  {
    key: "heading1",
    id: "title",
    style: {
      color: "red",
      backgroundColor: "blue",
    },
  },
  "heading1"
);
const heading2 = React.createElement(
  "h1",
  {
    key: "heading2",
    id: "title2",
    style: {
      color: "red",
      backgroundColor: "blue",
    },
  },
  "heading2 MY NAME IS ATUL CHAUHAN AND I AM "
);

const container = React.createElement(
  "div",
  {
    id: "container",
    className: "firstclass",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("ROOT"));
root.render(container);
