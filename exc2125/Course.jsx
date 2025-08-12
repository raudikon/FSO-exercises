const Course = ( {courses} ) => {

  
  let total = 0;
  return (
    <>
      {courses.map((course) => (       
        //Necessary <div></div>!! Multiple JSX statements must be wrapped into one container, to be returned as one fragment.   
        <div key={course.id}> 
          <h1>{course.name}</h1>          
          {course.parts.map((part) => (   
            <p key={part.id}>{part.name} - {part.exercises}</p>
          ))}

          <strong>There are a total of {course.parts.reduce((acc, part)=> (acc+part.exercises),0)} exercises.</strong>
        </div>
      ))}
    </>
  );
  
}

export default Course;

