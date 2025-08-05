// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Header header={course}/>
//       <Content 
//         part1={part1}
//         part2={part2}
//         part3={part3}/>

//     </div>
//   )
// }

// const Header = (props) => {
//   return(
//     <>
//       <h1>{props.header}</h1>
//     </>
//   )

// }

// const Content = (props) => {
//   //Calls parts 3 times and parts 
//   //will render the name and exercises 
//   return(
//     <>
//       <Parts part={props.part1}/>
//       <Parts part={props.part2}/>
//       <Parts part={props.part3}/>
//     </>
//   )
// }

// const Parts = (props) => {
//   return(
//     <>
//       <ul>
//         <li>{props.part.name} with {props.part.exercises} exercises</li>
//       </ul>
//     </>
//   )

// }
// /*My solution*/
const App = () => {
  // const-definitions 
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  //app body 
  return (
    <div>
      <Header header={course}/>
      <Content 
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total one={exercises1} two={exercises2} three={exercises3}/>
    </div>

  )
  
}

//Renders name of the course
const Header = (props) => {
  return(
    <>
      <h1>{props.header}</h1>
    </>
  )
}

//Renders the parts and their number of exercises 
const Content = (props) => {
   
  return(
    <div>
      <Part part= {props.part1} exercises={props.exercises1}/>
      <Part part= {props.part2} exercises={props.exercises2}/>
      <Part part= {props.part3} exercises={props.exercises3}/>
    </div>
  )
}

const Part = (props) => {

  return(
    //Render name and number of exercises 
    <div>
        <ul>
          <li>{props.part} - {props.exercises} exercises</li>
        </ul>
    </div> 
  )
}

const Total = (props) => {

  let sum = props.one+props.two+props.three

  return(
    <>
      <p>Total exercises: {sum}</p>
    </>

  )

}
export default App