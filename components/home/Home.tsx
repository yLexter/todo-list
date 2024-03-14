"use client";

import { nextAuthOptions } from "@/app/api/auth/[...nextauth]";
import { global } from "@/entities";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

type IPropHome = {};

export default async function Home({}: IPropHome) {
   return <div></div>;
}
