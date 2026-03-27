// Here {} this is used to give a attributes to the elements or the objects

/** 
 <div id="parent">
  <div id="child1">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
 </div>  
 **/ 

 const parent = React.createElement("div", {id:"parent"}, 
  [React.createElement("div", {id:"child1"}, 
  [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]),React.createElement("div", {id:"child2"}, 
  [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")])]);

const heading = React.createElement("h1", {id:"heading"}, "Hello From React");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//React element is a plain JavaScript object

//The combination of children and attributes are the props

//Children means the value which go and sit inside the element (eg: "Hello From React") and attributes will be the {id:"heading"} combination of attributes and children = props.

//root.render(heading); here we are rendering the react element we are passing the react element or javascript object

//root.render function job is basically take the react element and create the html element which understands by the browser and put it inside the root.

//this render function will replace whatever there inside the root element not append it and the file order is so much important <div id="root">Akshay is here</div> this akshay is here will replaced.

//<div id="root">Akshay is here</div> if we have some on the top and bottom of this root section it will append it

//we call react is a library because we can use react for small portion of the page too its not a full fludge framework 