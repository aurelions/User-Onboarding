
import './App.css';
import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
//file imports
import Employee from './Components/Form'
import EmployeeForm from './Components/EmployeeForm'
import { newSchema, formSchema } from './Validation/Schema';
import axios from 'axios';


//TESTING HERE

newSchema.isValid({
  name: 'Joey'
}).then(valid => console.log('AYO HE VALID'))


//TESTING HERE


//Set initial form values as blanks or false depending...
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false,
}

//set the errors initial form
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: '',
}

//set the employees as an empty array
const initialEmployees = []
//submit button will be disabled at default 
const initialDisabled = true



 function App() {

  // STATES
  const [employee, setEmployee] = useState(initialEmployees)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  //Here I will set up the helper functions  :)

  const getEmployees = () => {
    //This is where I will put employees into state
    axios.get('https://fakeapi.com')
      .then(res => setEmployee(res.data))
  }

  const postNewEmployee = newEmployee => {
    //Here I will POST the new employee to some fake api...
    //and reset the form using the initial values that I set above...
    axios.post('https://reqres.in/api/users', newEmployee) //THIS SHOULD POST TO THE FAKE API?
      .then(({ data }) => {

          setEmployee([...employee, data])

          setFormValues(initialFormValues)

      })
  }

  const inputChange = (name, value, passcode) => {
    //here is where I will run the validation using YUP

    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors)
      .catch(err => console.log(err))

    setFormValues({
      ...formValues,
      [name]: value //This is not an array
    })
  }

  const formSubmit = () => {
      const newEmployee = {
       username: formValues.username.trim(),
       email: formValues.email.trim(),
       passcode: formValues.passcode.trim(),
      //  tos: formValues.tos(),
       //do something with the TOS later... gotta figure that out lol
      }
      //POST NEW EMPLOYEE IN HERE AFTER SUBMIT
      postNewEmployee(newEmployee)

  }

  useEffect(() => {
    getEmployees()
  }, [])

  useEffect(() => {
    //do something with disabled every time form values changes... 
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))

  }, [formValues])

  return (
    <div className="App">
      
      <header>
        <h1>User Onboarding!</h1>
      </header>

      <EmployeeForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        employee.map(employees => {
          return (
            <Employee key={employees.id} details={employees} /> //This will map through whatever I create in Form.js
          )
        })
      }

    </div>
  );
}

export default App;
