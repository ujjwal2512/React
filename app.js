const parent = React.createElement("div", { id: "parent" },
React.createElement("div", { id: "child" },[
React.createElement("h1", { id: "heading" },"Hello World"),
React.createElement("h1", { id: "heading" },"Hello World Again"),
]
)
); //creates object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //convert object to h1 tag and put in root