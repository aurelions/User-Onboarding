import React from 'react'

export default function EmployeeForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onSubmit = evt => {
          evt.preventDefault()
          submit()
      }

      const onChange = evt => {
          const { name, value, passcode} = evt.target
          change(name, value, passcode)
          

          //might input that checkbox thing for tos... probably not though?
          
      }

      return (
          <form className="form container" onSubmit={onSubmit}>

            <button disabled={disabled}>Submit</button>

            <br />


            <div>
                {/* Validation errors go here */}
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.passcode}</div>
                <div>{errors.tos}</div>
            </div>


            <div className='input container'>


                    <label>Username

                        <input 
                            type="text"
                            value={values.username}
                            onChange={onChange}
                            name='username'
                        />

                    </label>

                        <br />

                    <label>Email

                        <input 
                        type="text"
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        />

                    </label>

                        <br />

                    <label>passcode

                        <input 
                        type="text"
                        value={values.passcode}
                        onChange={onChange}
                        name='passcode'
                        />

                    </label>

                        <br />

            </div>


            <label>Do you agree to our Terms of Service?

                <input 
                type="checkbox"
                name="tos"
                value="false"
                checked={values.tos}
                onChange={onChange}
                />

            </label>

        </form>
          
      )


}