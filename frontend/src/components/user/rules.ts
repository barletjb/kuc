import * as yup from 'yup'

export const userSchema = yup.object({
    username: yup
        .string()
        .required("Le nom d'utilisateur est obligatoire")
        .min(3, "Le nom d'utilisateur doit faire au moins 3 caractères"),

    email: yup
        .string()
        .required("L'email est obligatoire")
        .email("L'email n'est pas valide"),

    password: yup
        .string()
        .required("Le mot de passe est obligatoire")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
        ),

    confirmPassword: yup
        .string()
        .required("Veuillez confirmer votre mot de passe")
        .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas"),
});