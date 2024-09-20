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
        <div className="flex items-center gap-5 justify-center">
          <Button variant="outline" className="w-full">Sign up with Google</Button>
          <Button variant="outline" className="w-full">Sign up with Facebook</Button>
        </div>
        <DialogFooter className="pt-5 gap-2">
          <Button type="submit" className="w-full">Sign up</Button>
          <Button type="submit" variant="secondary" className="w-full" onClick={signUp.onClose}>Sign in</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
