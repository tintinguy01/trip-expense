"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useSignup } from "@/hooks/use-signup";

import Image from "next/image";

export const SignupModal = () => {
    const signUp = useSignup();
  return (
    <Dialog open={signUp.isOpen} onOpenChange={signUp.onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create an account</DialogTitle>
          <DialogDescription>
            Enter your credentials to create your account
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-6">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              type="username"
              placeholder="Enter your username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              defaultValue=""
              className="col-span-3"
            />
          </div>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="border-t border-gray-300 flex-grow" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="border-t border-gray-300 flex-grow" />
        </div>
        <div className="flex items-center gap-x-1 justify-center w-full">
          <Button variant="outline" className="flex items-center space-x-2 w-full">
            <Image
              src="/google.webp"
              alt="google"
              width={28}
              height={28}
            />
            <span>Sign in with Google</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-3 w-full">
            <Image
              src="/facebook.webp"
              alt="facebook"
              width={22}
              height={22}
            />
            <span>Sign in with Facebook</span>
          </Button>
        </div>
        <DialogFooter className="pt-5 gap-2">
          <Button type="submit" className="w-full">Sign up</Button>
          <Button type="submit" variant="secondary" className="w-full" onClick={signUp.onClose}>Sign in</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
