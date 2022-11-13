import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    destination: Yup.string()
      .required('Required'),
    dateSelect: Yup.string()
      .required('Required'),
  });