import * as Yup from "yup";

export const signUpSchema = Yup.object({
    username:Yup.string().min(2).max(25).required("Please Enter Username"),
    email:Yup.string().email().required("Please Enter Your Email"),
    mobileno:Yup.string().min(10).max(10).required("Please Enter Valid Mobile Number"),
    password:Yup.string().min(6).required("please Enter Password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null],"Password Must Match")
})