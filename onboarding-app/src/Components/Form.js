import React from 'react'

function Employee({ details }) {
    if (!details) {
        return <h3>Working fetching your employee&apos;s details...</h3>
    }


    return(

        <div className='employee container'>

            <h2>Username: { details.username }</h2>
            <p>Email: { details.email }</p>
            <p>Password: { '*'.repeat(details.passcode.length) } </p>
            {/* <p>Terms of Service: { details.tos }</p> */}


        </div> //employee container

    )


}   

export default Employee