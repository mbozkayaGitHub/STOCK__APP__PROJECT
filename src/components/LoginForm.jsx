import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import LoadingButton from "@mui/lab/LoadingButton"

import { Form } from "formik"
import { useSelector } from "react-redux"
import { object, string } from "yup"

export const loginScheme = object({
  email: string()
    .email("please enter a valid email")
    .required("Email zorunludur"),
  password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "email must include at least a number ")
    .matches(/[a-z]/, "email must include at least a lowercase letter ")
    .matches(/[A-Z]/, "email must include at least an uppercase letter ")
    .matches(
      /[!'+%&/()=?#$]/,
      "email must include at least a special character"
    ),
});

const LoginForm = ({ values, handleChange, handleBlur, errors, touched }) => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values?.email || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values?.password || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <LoadingButton type="submit" variant="contained" loading={loading}>
          {" "}
          Submit
        </LoadingButton>
      </Box>
    </Form>
  );
};

export default LoginForm;
