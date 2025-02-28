import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TriangleAlertIcon } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { SignInFlow } from "../types";
import { useState } from "react";
import { SignUpForm } from "./sign-up-form";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
  loginWithGitHub: () => void;
  loginWithGoogle: () => void;
}
export const SignUpCard = ({ setState, loginWithGitHub, loginWithGoogle }: SignUpCardProps) => {
  
 
  const [error, setError] = useState("");

 

 

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-lg font-medium">Sign up to continue</CardTitle>
      </CardHeader>
      <CardDescription>Use your email and password to sign in.</CardDescription>
      {!!error && (
        <div className="bg-destructive/15 text-sm p-3 rounded-md flex items-center gap-x-2 text-destructive mb-6">
          <TriangleAlertIcon className="size-4" />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-2.5 px-0 pb-0">
        <SignUpForm />
        
          <Separator className="mb-4" />
          <div className="flex flex-col gap-y-3">
          <Button
            variant="outline"
            className="w-full relative"
            onClick={() => loginWithGitHub()}
          >
            <FaGithub className="size-5 absolute top-2.5 left-2.5" />
            Continue with Github
          </Button>
          <Button
            variant="outline"
            className="w-full relative"
            onClick={() => loginWithGoogle()}
          >
            <FaGoogle className="size-5 absolute top-2.5 left-2.5" />
            Continue with Google
          </Button>
          </div>
       
        <p className="text-sm text-muted-foreground">
          Already have an account?
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => setState("signIn")}
          >
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
