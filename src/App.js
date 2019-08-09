import React from "react";
import { render } from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as yup from 'yup';


const App = ({ values ,errors,touched}) => (
  <Form>
    <div>
      {touched.email && errors.email && <p>{errors.email}</p>}
    <Field type="email" name="email" />

    </div>
    <div>
      {
        touched.password && errors.password && <p>{errors.password}</p>
      }
    <Field type="password" name="password" />
    </div>
  
    <label> NewLettter
    <Field type="checkbox" name="newsletter" checked={values.newsletter}></Field>

    <Field component="select" name="plan">
      <option vlaue="free">
        free
      </option>
      <option vlaue="premium">
        premium
      </option>
    </Field>
    </label>

    <button type="submit">Submit</button>
  </Form>
);
const FormikApp = withFormik({
  mapPropsToValues({ email, password ,newsletter,plan}) {
    return { email: email || "", password: password || "" ,newsletter: newsletter || "",plan: plan || 'free'};
  },
 validationSchema:yup.object().shape({
   email:yup.string().email("email is not valiD!").required("Email is RequirEd"),
   password:yup.string().min(9,"password is not valiD!").required("password is RequirEd")
 }),
  handleSubmit(values,{resetForm,setErrors,setSubmitting}) {
    setTimeout(() => {
    if(values.email === "zwn@gmail.com"){
    setErrors({email:"That email is already taken"})
    }else{
resetForm()
      }
    setSubmitting(false)}, 2000)
  }
})(App);

export default FormikApp;
