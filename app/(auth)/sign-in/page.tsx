"use client"

import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
})

const SignIn = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div>
      <Card className='w-110 max-w-400 -mx-auto '>
        <CardHeader>
          <CardTitle className='flex items-center'>Sign In</CardTitle>
          <CardDescription>Welcome Back! Please Sign In to continue</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field })=> (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="John@gmail.com" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                        This is your Email
                      </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                    
                  )} 
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field })=> (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                        This is your Email
                      </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                    
                  )} 
                  />
                  <Button type='submit'>Sign In</Button>
              </form>
            </Form>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <p className='text-sm text-muted-foreground'>
            Don&apos;t have an account yet? {' '}
            <Link href="/sign-up" className='text-primary hover:underline'>
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignIn