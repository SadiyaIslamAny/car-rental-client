"use client";
import { Card, Separator } from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    // console.log(user)
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (data) {
      redirect("/");
    }

    if(error){
      alert("Register failed")
    }
   
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10">
      <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-none bg-[#FF4C31]/5 p-4 sm:p-6 md:p-8">
        
        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Register Account
          </h1>
        </div>

        <Form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
          {/* Name */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter Your Name" className="w-full" />
            <FieldError />
          </TextField>

          {/* Image */}
          <TextField name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Enter Your Image URL" className="w-full" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" className="w-full" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6)
                return "Password must be at least 6 characters";
              if (!/[A-Z]/.test(value))
                return "Must contain uppercase letter";
              if (!/[a-z]/.test(value))
                return "Must contain lowercase letter";
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" className="w-full" />
            <Description>
              Must be at least 6 characters with 1 uppercase & 1 lowercase
            </Description>
            <FieldError />
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full rounded-none bg-[#FF4C31] text-white"
          >
            Register Account
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <Separator className="flex-1" />
          <span className="text-xs sm:text-sm whitespace-nowrap">
            Or login with
          </span>
          <Separator className="flex-1" />
        </div>

        {/* Google Login */}
        <Button
          onClick={handleGoogleLogin}
          variant="outline"
          className="w-full rounded-none flex items-center justify-center gap-2"
        >
          <FcGoogle /> Login with Google
        </Button>
      </Card>
    </div>
  );
};

export default RegisterPage;