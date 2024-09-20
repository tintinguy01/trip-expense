"use client";

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useSignup } from "@/hooks/use-signup";

export const Login = () => {
  const signUp = useSignup();

  return (
    <Card className="w-[450px] sm:max-w-[425px]">
      <CardHeader className="flex text-center">
        <CardTitle className="p-2">Sign into Tripify</CardTitle>
        <CardDescription>Welcome back! Please sign in to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-6 text-left pt-3">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="email">Email address or username</Label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" placeholder="Enter your password" />
            </div>
          </div>
        </form>
        <div className="flex items-center w-full my-4">
          <hr className="border-t border-gray-300 flex-grow" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="border-t border-gray-300 flex-grow" />
        </div>
        <div className="flex items-center gap-x-2 justify-center">
          <Button variant="outline" className="w-full">Sign in with Google</Button>
          <Button variant="outline" className="w-full">Sign in with Facebook</Button>
        </div>
        <div className="flex justify-center pt-8">
          <Button className="w-full">Continue</Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <CardDescription>Don't have an account?
          <Button variant="link" onClick={signUp.onOpen}>
            Sign up
          </Button>
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
