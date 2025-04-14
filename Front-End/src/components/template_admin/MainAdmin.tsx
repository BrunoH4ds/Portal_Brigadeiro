"use client"

import { useEffect } from "react";
import SideBar from "../comp_admin/SideBar";
import Loading from "../optional/Loading";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export interface MainAdminProps {
  children: any;
  semCabecalho?: boolean;
}

export default function MainAdmin(props: MainAdminProps) {
  const { isAdmin } = useUser();
    const router = useRouter();
  
    useEffect(() => {
      if (!isAdmin) {
        router.push("/Entrar");
      }
    }, [router, isAdmin]);
  
    if (!isAdmin) {
      return <Loading />;
    }
  return (
    <div className="flex flex-col mx-8 lg:mx-0 lg:flex-row flex-1 h-full w-full mt-28 mb-8 lg:gap-0">
      {/* Sidebar */}
      <SideBar />

      {/* Content Area */}
      <div className="flex flex-1 flex-col lg:mx-8 gap-8">
        <div className="p-6 bg-white/50 shadow-lg rounded-lg">
        {props.children}
        </div>
      </div>
    </div>
  );
}
