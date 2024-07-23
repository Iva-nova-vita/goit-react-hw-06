import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

import css from './ContactForm.module.css';

export default function ContactForm({ initialValues, onSubmit }) {
  const nameId = useId();
  const phoneId = useId();

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    phone: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div className={css.wrap}>
          <label htmlFor={nameId}>Name</label>
          <Field type='text' name='name' id={nameId} />
          <ErrorMessage
            className={css.errorMessage}
            name='name'
            component='span'
          />
        </div>
        <div className={css.wrap}>
          <label htmlFor={phoneId}>Number</label>
          <Field type='text' name='phone' id={phoneId} />
          <ErrorMessage
            className={css.errorMessage}
            name='phone'
            component='span'
          />
        </div>
        <button className={css.btnSubmit} type='submit'>
            Submit
          </button>
      </Form>
    </Formik>
  );
}