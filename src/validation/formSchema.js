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
 
 email: yup
 .string()
 .min('Please enter an email')
 .required('Password required'),

 phoneNumber: yup
 .string()
 .min('Please enter a phone number')
 .required('Phone number required'),
})
export default formSchema