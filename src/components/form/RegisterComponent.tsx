import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "./Button"
import { Input } from "./Input"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./Form"
import Link from "next/link"


const formSchema = z.object({
  username: z.string(
    {
      required_error: "Username is required.",
    }
  ).min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string(
    {
      required_error: "Email is required.",
    }
  ).email({
    message: "Please enter a valid email.",
  }),
  password: z.string(
    {
      required_error: "Password is required.",
    }
  ).min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string(
    {
      required_error: "Password Confirm is required.",
    }
  ),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export function RegisterComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: ""
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-[430px] w-full">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="text-[#999999] font-medium text-sm"
              >Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Username" {...field} 
                  className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-[#000842]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="text-[#999999] font-medium text-sm"
              >Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Email address" {...field} type="text"
                  className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-[#000842]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="text-[#999999] font-medium text-sm"
              >Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Password" {...field} type="password"
                  className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-[#000842]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="text-[#999999] font-medium text-sm"
              >Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Password" {...field} type="password"
                  className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-[#000842]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link href='/'
          className="text-[#0C21C1] text-sm font-medium space-y-2 block"
        >Log in</Link>
        <Button type="submit"
          className="w-full text-white py-4 rounded-full bg-gradient-to-r bg-[#0C21C1] hover:bg-[#310CC2]
            min-h-[50px]
          "
        >Register</Button>
      </form>
    </Form>
  )
}
