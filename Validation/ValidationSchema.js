export const userValidationSchema = {
    username : {
        isLength: {
            options: {
                min: 5,
                max: 8
            },
            errorMessage: 'Username should be at least 3 charachters with the max of 32 characters'
        },
        isString : true,
        notEmpty : true
    },
    displayName: {
        notEmpty: true
    }
}