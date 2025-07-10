import React from "react";
import { Button, TextField } from "@mui/material";

const SignUpForm = ({
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    isSubmitting,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Username"
                name="username" // formik name attributed'ından eşleştirme yapıyor.
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yakalayan event
                helperText={touched.username && errors.username} // validation'da verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için errors dan gelen mesajı yakalıyoruz.
                error={touched.username && Boolean(errors.username)} //validation'da verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute'ı benden false/true degeri bekliyor ondan dolayı daha sağlıklı olması için Boolean deger döndürüyoruz.
                // touched'da kullanıcının inputa tıklayıp tıklamadığını yakalıyor.
                variant="outlined"
                fullWidth
                type="text"
                margin="normal"
            />

            <TextField
                label="First Name"
                name="firstName"
                type="text"
                variant="outlined"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.firstName && errors.firstName}
                error={touched.firstName && Boolean(errors.firstName)}
                fullWidth
                margin="normal"
            />

            <TextField
                label="Last Name"
                name="lastName"
                type="text"
                variant="outlined"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.lastName && errors.lastName}
                error={touched.lastName && Boolean(errors.lastName)}
                fullWidth
                margin="normal"
            />

            <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Password"
                name="password"
                id="password"
                type="password"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
                fullWidth
                margin="normal"
            />

            <Button
                type="submit"
                variant="contained"
                fullWidth
                margin="normal"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Loading..." : "Sign Up"}
            </Button>
        </form>
    );
};

export default SignUpForm;