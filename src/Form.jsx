import { useFormik } from "formik"
import { signUpSchema } from "./schemas"

const initialValues = {
    username:"",
    email:"",
    mobileno:"",
    password:"",
    confirm_password:"",
}

export const Form = () => {

    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit: (value,action) => {
            console.log("Form Data",value);
            action.resetForm()
        }
    })
   
    // console.log("error",errors,values)
    return (
        <div className="flex flex-col justify-between align-center mt-10 ">
            <h1>Form Validation</h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-between align-center">
            <label htmlFor="username" className="mt-5">Username:</label>
            <input type="text" name="username" autoComplete="off" required value={values.username} onChange={handleChange} onBlur={handleBlur}/>
           {errors.username && touched.username ? <p>{errors.username}</p> : null}
            <br />
            <label htmlFor="email">Email:</label>
            <input type="tel" name="email" autoComplete="off" required value={values.email} onChange={handleChange} onBlur={handleBlur} className="mt-lg border"/>
            <br />    
            <label htmlFor="mobileno">Mobile.No:</label>
            <input type="tel" name="mobileno" autoComplete="off" required value={values.mobileno} onChange={handleChange} onBlur={handleBlur}/>
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" autoComplete="off" required value={values.password} onChange={handleChange} onBlur={handleBlur}/>
            <br/>
            <label htmlFor="confirm_password">Confirm-Password:</label>
            <input type="password" name="confirm_password" autoComplete="off" required value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>
            <br />
            <button type="submit">Registration</button>
        </form>
        </div>
    )
}