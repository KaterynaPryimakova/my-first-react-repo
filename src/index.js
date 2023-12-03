import React from "react";
import ReactDOM from "react-dom";

// const firstElem = React.createElement("span", { children: "Hello" });
// const secondElem = React.createElement("span", { children: "!!!" });

const firstElem = <span>Hello</span>;
const secondElem = <span>!!!</span>;

// const element = React.createElement("div", {
//     a: 5,
//     b: 10,
//     children: [firstElem, secondElem],
// });

const jsxElem = (
    <div>
        {firstElem}
        {secondElem}
        {2 + 2}
    </div>
);
console.log(jsxElem);

ReactDOM.render(jsxElem, document.querySelector("#root"));

// ============================================================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
