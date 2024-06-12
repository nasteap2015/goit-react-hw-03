import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from "yup";


const initialValues = {
        name: '',
        phone: '',
};
    
const ContactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    phone: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
})

const ContactForm = ({onAdd}) => {
    const nameFieldId = useId();
    const phoneFieldId = useId();

    const handleSubmit = (values, actions) => {
    onAdd({
      id: Date.now(),
        name: values.name,
        number: values.phone
    });
    actions.resetForm();
  };

    return (
        <Formik initialValues={initialValues} validationSchema={ContactFormSchema} onSubmit={handleSubmit}>
            <Form>
                <div>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" id={nameFieldId} />
                    <ErrorMessage name="name" component="span" />
                    <label htmlFor={phoneFieldId}>Number</label>
                    <Field type="tel" name="phone" id={phoneFieldId} />
                    <ErrorMessage name="phone" component="span" />
                    <button type="submit">Add contact</button>
                </div>
            </Form>
        </Formik>
    )
};

export default ContactForm;