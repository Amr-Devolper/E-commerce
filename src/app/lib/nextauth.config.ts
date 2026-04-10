
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Fresh Cart",
      credentials: {
        email: {},
        password: {},
      },
// @ts-ignore
      async authorize(credentials) {
        {
          const response = await fetch(
            "https://ecommerce.routemisr.com/api/v1/auth/signin",
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          const finalRes = await response.json();
          console.log(finalRes);

          if(finalRes.message === "success"){
            return {
                name : finalRes.user.name,
                email : finalRes.user.email,
                realTokenFromBackend : finalRes.token
            }
          }


          return null;
        }
      },
    }),
  ],

  callbacks : {
    jwt(params){

        //login(authorize) refresh , navigation
       
      console.log("jwt callback params : ", params)

        if(params.user){
          // @ts-ignore
             params.token.realTokenFromBackend = params.user.realTokenFromBackend
        }


       return params.token 
    },

    session(param){
        return param.session
    }
  },

  pages: {
    signIn : "/login"
  }
  ,
//   secret : process.env.BETTER_AUTH_SECRET


};
