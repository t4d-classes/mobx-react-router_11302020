import { Formik, Form, Field } from 'formik';
import axios from 'axios';

export const LoginForm = ({ onLogin }) => {

  return (
    <Formik
      initialValues={{ username: 'adodsworth', password: 'testpass' }}
      onSubmit={async (values) => {

        const response = await axios.post('/api/users/login', {
          ...values,
          kind: 'employee',
        });

        onLogin(response.data);
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </Form>
      )}
    </Formik>
  );


};