import * as yup from 'yup'

export const userSchema = yup.object({
    sexe: yup
        .string()
        .required('Sexe is required'),

    username: yup
        .string()
        .required("User Name is required")
        .min(3, "user name must be at least 3 characters"),

    email: yup
        .string()
        .required("Email is required")
        .email("Email is invalid"),

    password: yup
        .string()
        .required("Password is required")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must be at least 6 characters, 1 Maj, 1 Min, 1 number & 1 special character"
        ),

    confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("password")], "Passwords must match"),

});


export const loginSchema = yup.object ( {
    username: yup
        .string()
        .required('Username is required'),

    password: yup
        .string()
        .required('Password is required')
})