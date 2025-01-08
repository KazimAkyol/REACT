import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";
import useAuthCall from "../hook/useAuthCall";

const Register = () => {
  const { register } = useAuthCall;

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Kullanici adi 5 karakterden az olamaz")
      .max(50, "Kullanici adi 50 karakterden fazla olamaz")
      .required("Kullanici adi zorunludur"),
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Email adresinde @ isareti olmalidir")
      .required("Bu alan zorunludur"),
    password: Yup.string()
      .min(8, "Password 8 karakterden fazla olmalidir")
      .matches(/[a-z]/, "Password kucuk harf icermelidir")
      .matches(/[A-Z]/, "Password büyük harf icermelidir")
      .matches(/\d+/, "Password sayisal karakter icermelidir")
      .matches(/[@$?!%&*]+/, "Özel karakter içermelidir(@$?!%&*)"),
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          {/* /* -------------------------------------------------------------------------- */}
          {/* {{FORMIK YAPISI}} */}

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
              register(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  label="User Name"
                  onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yakalayan event.
                  error={touched.username && errors.username} // validation'da verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için errors dan gelen mesajı yakalıyoruz.
                  helperText={touched.username && errors.username} // validation'da verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute'ı benden false/true degeri bekliyor, ondan dolayı daha sağlıklı olması için boolean deger döndürüyoruz.
                  // touched'da kullanıcının inputa tıklayıp tıklamadığını yakalıyor.
                  variant="outlined"
                  fullWidth
                  type="text"
                  margin="normal"
                />

                <TextField
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  label="First Name"
                  onBlur={handleBlur}
                  error={touched.firstName && errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  variant="outlined"
                  fullWidth
                  type="text"
                  margin="normal"
                />

                <TextField
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  label="Last Name"
                  onBlur={handleBlur}
                  error={touched.lastName && errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  variant="outlined"
                  fullWidth
                  type="text"
                  margin="normal"
                />

                <TextField
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  label="Email"
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                  variant="outlined"
                  fullWidth
                  type="email"
                  margin="normal"
                />

                <TextField
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  label="Password"
                  onBlur={handleBlur}
                  error={touched.password && errors.password}
                  helperText={touched.password && errors.password}
                  variant="outlined"
                  fullWidth
                  type="password"
                  margin="normal"
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  margin="normal"
                >
                  SUBMIT
                </Button>
              </form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
