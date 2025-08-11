import { useId } from "react";
import { nanoid } from 'nanoid'
import { Formik,Field, Form,ErrorMessage } from 'formik';
import * as Yup from "yup";



const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short").max(50, "").required("Required"),
  number:Yup.string().min(3,"Too Short").max(50,"").required("Required")
})

const ContactForm = ({ form,setForm }) => {
  const initialValues = {
  id:"",
  name: "",
  number: ""
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const id = nanoid()
    values.id = id
    console.log(values)
    setForm([...form,values])
    
    actions.resetForm()
  }
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId}></Field>
          <ErrorMessage name="name" component="span" />

          <label htmlFor={numberFieldId}>Contact</label>
          <Field type="tel" name="number" id={numberFieldId}></Field>
          <ErrorMessage name="number" component="span" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
