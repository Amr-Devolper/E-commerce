"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchemaType, loginSchema } from "./login.Schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginAction } from "./login.action";
import { signIn } from "next-auth/react";

export default function page() {
  const Router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(values: LoginSchemaType) {
    // const finalRes = await loginAction(values);


    signIn("credentials" , {
      ...values,  
      redirect : true ,
      callbackUrl : "/" ,
        
    })

    // console.log(finalRes);

    // if (finalRes == "success") {
    //   toast.success(finalRes, {
    //     position: "top-center",
    //     richColors: true,
    //   });

    //   // Router.push("/");
    // } else {
    //   toast.error(finalRes, {
    //     position: "top-center",
    //     richColors: true,
    //   });
    // }
  }

  return (
    <>
      <div className="p-3 w-10/12 mx-auto bg-gray-100 rounded-lg my-50">
        <h1 className="text-3xl my-3 text-center ">Login Page</h1>
        <form action="" onSubmit={form.handleSubmit(handleLogin)}>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your Email"
                  autoComplete="off"
                  className="bg-sky-100"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Input
                  type="password"
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your Password"
                  autoComplete="off"
                  className="bg-sky-100"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button type="submit" className="w-full cursor-pointer my-3">
            Login In Now
          </Button>
        </form>
      </div>
    </>
  );
}
