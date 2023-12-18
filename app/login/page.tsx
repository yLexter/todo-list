"use client";

import {
   Button,
   Checkbox,
   Divider,
   FormControlLabel,
   IconButton,
   InputAdornment,
   TextField,
   Typography,
} from "@mui/material";
import React, { useState } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomButton from "../../components/utils/inputs/CustomButton";
import CustomInput from "../../components/utils/inputs/CustomInput";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SocialButton from "./SocialButton";
import LockIcon from "@mui/icons-material/Lock";
import { useAuthenticateContext } from "@/contexts";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import Home from "@/components/home/Home";
import PageLogin from "./LoginScreen";

type IPropLoginScreen = {};

export default function Page({}: IPropLoginScreen) {
   const { user, authenticateUser } = useAuthenticateContext();

   if (user) return <Home />;

   return <PageLogin />;
}
