import * as yup from 'yup'


export const newSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    // age: yup.number().required('Age is required').positive().integer()
})

export const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required()
        .min(5, 'Username must be at minimum, 5 characters long'),

    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),

    passcode: yup
        .string() 
        .required('Password is required'),


    tos: yup
        .boolean(),

})
