"use client";
import { redirect } from "next/navigation";

//css
import headertyles from './pageheader.module.css'



export default function PageHeader() {

    const handleRedirect = () => {
        redirect("/");
    };

    return (
        <div className={headertyles.header}>
            <div className={headertyles.home} onClick={handleRedirect}>
                ←Home
            </div>
        </div>
      )
    }

