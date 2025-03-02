"use client";
import React, { useState } from "react";
import { Button, TextField, IconButton, Divider } from "@mui/material";
import { Google, Facebook, Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import bgImage from "../../public/coffee/log.jpg"; // Add your background image
import "./Auth.css"; // Correct import

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="container">
      <Image src={bgImage} alt="Background" layout="fill" objectFit="cover" className="bgImage" />
      <div className="glassmorphismBox">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form>
          {!isLogin && <TextField fullWidth label="Username" variant="outlined" className="input" />}
          <TextField fullWidth label="Username / Email / Mobile" variant="outlined" className="input" />
          {!isLogin && <TextField fullWidth label="Email" variant="outlined" className="input" />}
          {!isLogin && <TextField fullWidth label="Mobile" variant="outlined" className="input" />}
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            className="input"
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <Button fullWidth variant="contained" color="primary" className="button">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>
        <Divider className="divider">OR</Divider>
        <div className="socialButtons">
          <Button startIcon={<Google />} variant="contained" className="socialButton google">
            Google
          </Button>
          <Button startIcon={<Facebook />} variant="contained" className="socialButton facebook">
            Facebook
          </Button>
        </div>
        <p className="toggleText">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={toggleForm}>{isLogin ? "Sign Up" : "Login"}</span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
