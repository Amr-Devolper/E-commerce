import * as zod from "zod"


export const loginSchema = zod.object({
    email: zod.string("enter valid email").email("enter a valid email"),
    password: zod.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , "password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
  })


  export type LoginSchemaType = zod.infer<typeof loginSchema>