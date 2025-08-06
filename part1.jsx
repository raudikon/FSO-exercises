/* On Types and Passing Arguments. 
Basic example - exercises 1.1 and 1.2
All the arguments needed to render are stored as consts. */ 
const App = () => {
  /* This part outside the return() is pure JavaScript*/ 
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  /*This part is JSX. It's HTML-like Javascript.*/ 
  return (
    <div>

      {/*Call the Header functional component with the argument "header", which is of the JavaScript primitive type String. To use JavaScript in the JSX body, it has to be wrapped in {}. */}
      <Header header={course}/> 

      {/* We're calling Content three times to render the three names, but each time the argument name is the same. This makes the Content component reusable.  */}
      <Content name={part1} exc={exercises1}/>
      <Content name={part2} exc={exercises2}/>
      <Content name={part3} exc={exercises3}/>
      <Total one={exercises1} two={exercises2} three={exercises3}/>
    </div>
  )
}

/*Use the props keyword to indicate arguments.
React components receive a SINGLE props object.
It is also possible to use destructuring on a single object in place of the props keyword.*/
const Header = (props) => {

  return(
    <>
      {/* The app component calls the Header function above with the argument header. The props object can contain any JavaScript values, like strings, numbers, arrays, objects, functions, Booleans, etc. 
      
      props.header accesses the header property of the props object. Remember that the dot notation is used to access properties of objects.  */}
      <h1>{props.header}</h1>
    </>
  )
}

const Content = (props) => {

  return(
    <>
      <p> ~ {props.name} - {props.exc} exercises</p>
    </>
  )

}

const Total = (props) => {

  // We don't need to put props in {} here because this part is normal JavaScript.
  const tot = props.one+props.two+props.three

  return(
    <>
      <p>There is a total of {tot} exercises.</p>
    </>
  )
}
export default App


