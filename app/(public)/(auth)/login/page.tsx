"use client";

import EmailIcon from "@/components/common/svg/email-icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordIcon from "@/components/common/svg/password-icon";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/, {
      message: "Password must contain at least one letter and one number.",
    }),
});

const LoginPage = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    router.push("/discover")
    console.log(values);
  };

  return (
    <div className="relative flex h-dvh w-dvw bg-black">
      <div className="flex-2 absolute inset-0 opacity-20 object-cover xl:static xl:opacity-100 bg-no-repeat bg-cover bg-center bg-[url(/assets/images/login-bg.png)]"></div>
      <div className="flex-auto text-white flex items-center justify-center p-4">
        <div className="w-full max-w-md sm:max-w-lg xl:w-5/12 xl:min-w-[530px] border-1 border-gray-600 space-y-7 py-6 px-4 sm:px-6 xl:px-8 rounded-2xl">
          <h1 className="text-center text-2xl sm:text-3xl xl:text-title-xl mb-12">
            Login
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 sm:space-y-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl className="">
                      <Input
                        placeholder="Email"
                        {...field}
                        className="placeholder:text-lg sm:placeholder:text-xl border-0 border-b-1 rounded-none w-full pb-3 placeholder:text-gray-100 focus-visible:ring-0 outline-none text-base sm:text-lg"
                      />
                    </FormControl>
                    <EmailIcon className="absolute right-0 top-0 bottom-0 flex items-center" />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-4 relative">
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        className="placeholder:text-lg sm:placeholder:text-xl border-0 border-b-1 rounded-none w-full pb-3 placeholder:text-gray-100 focus-visible:ring-0 outline-none text-base sm:text-lg"
                      />
                    </FormControl>
                    <PasswordIcon className="absolute right-0 top-0 bottom-0 flex items-center" />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="rememberMe"
                    className="bg-white dark:data-[state=checked]:!bg-red-500"
                  />
                  <Label
                    htmlFor="rememberMe"
                    className="cursor-pointer text-sm sm:text-base"
                  >
                    Remember Me
                  </Label>
                </div>
                <Link
                  href="/register"
                  className="text-sm sm:text-base text-right"
                >
                  Forgot Password?
                </Link>
              </div>
              <Button
                variant="ghost"
                type="submit"
                className="bg-gray-300 text-black w-full h-[45px] text-lg sm:text-xl"
              >
                Login
              </Button>
            </form>
          </Form>

          <div className="flex items-center  gap-3">
            <div className="flex-1 h-px bg-gray-600 rounded-full" />
            <Label className="text-center text-sm sm:text-base text-gray-300 select-none">
              Continue With
            </Label>
            <div className="flex-1 h-px bg-gray-600 rounded-full" />
          </div>

          <div className="flex gap-4 ">
            <Button className="flex-1 flex items-center justify-center h-[62px] rounded-2xl bg-gray-800">
              <Image
                src="/assets/icons/svg/google-icon.svg"
                height={44}
                width={44}
                alt="google-icon"
              />
            </Button>
            <Button className="flex-1 flex items-center justify-center h-[62px] rounded-2xl bg-gray-800">
              <Image
                src="/assets/icons/svg/apple-icon.svg"
                height={44}
                width={44}
                alt="apple-icon"
              />
            </Button>
            <Button className="flex-1 flex items-center justify-center h-[62px] rounded-2xl bg-gray-800">
              <Image
                src="/assets/icons/svg/facebook-icon.svg"
                height={44}
                width={44}
                alt="facebook-icon"
              />
            </Button>
          </div>

          <Label className="flex justify-center text-sm sm:text-base text-center">
            Don`t have an account?
            <Link href="/register" className="text-primary-500">Forgot Password?</Link>
          </Label>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
