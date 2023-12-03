// const heading=document.createElement("h1")
//         heading.innerHTML="Hello World"
//         const root=document.getElementById("root")
//         root.appendChild(heading)

const heading=React.createElement("h1",{},"hello App.js");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)