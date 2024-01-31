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
import { useContext } from "react"
import { AuthContext } from "@/context/AuthContext"


const formSchema = z.object({
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
})

export function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  const { signIn } = useContext(AuthContext)
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    signIn(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-[430px] w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="text-[#999999] font-medium text-sm"
              >Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email address" {...field} 
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
        <Link href='/register'
          className="text-[#0C21C1] text-sm font-medium space-y-2 block"
        >Registre-se agora</Link>
        <Button type="submit"
          className="w-full text-white py-4 rounded-full bg-gradient-to-r bg-[#0C21C1] hover:bg-[#310CC2]
            min-h-[50px]
          "
        >Login</Button>
      </form>
    </Form>
  )
}
