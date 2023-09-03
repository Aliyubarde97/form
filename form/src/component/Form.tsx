import { FormEvent, useRef } from "react";

const Form = () => {
 const nameRef =  useRef<HTMLInputElement>(null);
 const ageRef = useRef<HTMLInputElement>(null);
 const person = { name:"", age:0 };



  const HandleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if(nameRef.current !==null)
    person.name = (nameRef.current.value)
    if(ageRef.current !==null)
    person.age = parseInt(ageRef.current.value)
    console.log(person)
  }
  return (
    <form onSubmit={HandleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" ref={nameRef} type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="" id="age" className="form-label">
          Age
        </label>
        <input type="number" ref={ageRef} className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
