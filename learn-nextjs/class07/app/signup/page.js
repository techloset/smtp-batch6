"use client"
import { useFormik } from 'formik';
import * as yup from "yup"

export default function SignUp() {
 
    const validationSchema = yup.Schema.shape({
         firstLast: yup.string().required().in()
    })
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          password:'',
        },
        validationSchema:validationSchema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      const {errors, touched, onChange, onSubmit, values} = formik
  return (
    <form onSubmit={onSubmit}>
       <label htmlFor="firstName">Enter Name:</label>
       <input type="text" id="firstName" onChange={onChange} name="firstName" />
      {errors.firstName && touched.firstName &&  <span>{errors.firstName}</span>} 
       <br />
    </form>
  )
}
