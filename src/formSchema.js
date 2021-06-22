import * as yup from 'yup'

const  formSchema = yup.object().shape({
 username:yup
 .string()
 .trim()
 .min(6, 'Please enter your username')
 .required('Username is required'),
 
 password: yup
 .string()
 .min(6,'Please enter a password')
 .required('Password required'),
 
 


})
export default formSchema