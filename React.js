

/*
<div id=" parent">
  <div id="child">
    <h1></h1>
    <h2></h2>
  </div>


</div>


*/
 
const parent=React.createElement(
  "div",
  {id:"parent"},
  React.createElement(
    "div",
    {id:"child"},
   [ 
    React.createElement(
      "h1",
      {id:"h1"},
      "I  am h1 tag"
    ),React.createElement(
      "h2",
      {id:"h2"},
      "I  am h2 tag")
    ]
  )

);
const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent); 
    console.log(parent);



// const heading =React.createElement(
//   "h1",
//   {id:"head"},
//   "hello world from react"
// );

    // const root=ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading); 
    // console.log(heading);//this will return an object
