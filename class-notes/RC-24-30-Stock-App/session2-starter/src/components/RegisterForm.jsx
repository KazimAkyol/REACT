import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import * as Yup from "yup";

// Yup ile istediğimiz alanlara istediğimiz validasyon koşullarını oluşturuyoruz.Sonra oluşturduğumuz bu şemayı formike tanımlayarak kullanıyoruz.Böylelikle formik hem formumuzu yönetiyor hem de verdiğimiz validationSchema'yı uyguluyor. Dikkat edilmesi gereken husus; formikte tanımladığımız initialValues daki keylerle, Yupta tanımladığımız keylerin aynı olması.Eğer bir harf bile farklı olsa o alanla ilgili yazdığınız validation çalışmaz.
export const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .required("Bu alan zorunludur!")
        .min(3, "Username en az 3 karakter olmalıdır!"),
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .required()
        .min(8)
        .matches(/\d+/, "Digit karakter içermelidir!")
        .matches(/[a-z]/, "Küçük harf içermelidir!")
        .matches(/[A-Z]/, "Büyük harf içermelidir!")
        .matches(/[@$?!%&*]+/, "Özel karakter içermelidir(@$?!%&*)")
});

const SignUpForm = ({
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    isSubmitting,
}) => {
    return (
        <div>
            <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        name="username" // formik name attributed'ından eşleştirme yapıyor.
                        label="Username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yakalayan event
                        helperText={touched.username && errors.username} // validation'da verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için errors dan gelen mesajı yakalıyoruz.
                        error={touched.username && Boolean(errors.username)} //validation'da verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute'ı benden false/true degeri bekliyor ondan dolayı daha sağlıklı olması için Boolean deger döndürüyoruz.
                    // touched'da kullanıcının inputa tıklayıp tıklamadığını yakalıyor
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
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Loading..." : "Sign Up"}
                    </Button>
                </Box>
            </Form>
        </div>
    );
};

export default SignUpForm;
