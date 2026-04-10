import * as zod from "zod"


export const signUpSchema = zod.object({
    name: zod.string("enter your name").nonempty("name is required"),
    email: zod.string("enter valid email").email("enter a valid email"),
    password: zod.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , "password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    rePassword: zod.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , "password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    phone: zod.string("enter your phone number")
  }).refine(function(params){
    return params.password === params.rePassword
  }, {
    error : "password is not the same as re-password", 
    path : ["rePassword"]
  })


  export type SignUpSchemaType = zod.infer<typeof signUpSchema>