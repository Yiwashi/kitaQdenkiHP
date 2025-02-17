"use client";
import { redirect } from "next/navigation";

import Image from "next/image";

import product1img from "./../../Public/images/tamalog.png"
import productstyles from "./products.module.css"

export default function Product1() {

    const handleRedirect = () => {
        redirect("/productpages/product1page");
    };

    return (
        <div>
           <div className={productstyles.productback}>
                <div className={productstyles.productitem1}>
                    <Image src={product1img} alt="" className={productstyles.productimg}></Image>
                        <div className={productstyles.producttext}>
                            <div className={productstyles.producticons}>
                                <div className={productstyles.productkozin}>個人</div>
                                <div className={productstyles.producttype}>#webアプリ</div>
                                <div className={productstyles.productaward}>KCL☆Hack(2024/11)金賞</div>
                        </div>
                            <div className={productstyles.producttitle}>体組成計管理アプリ「たまLog」</div>
                            <div className={productstyles.productcoment}>結果用紙の写真をアップロードするだけ！</div>
                            <div className={productstyles.productskil}>Typescript/JavaScript/CSS/Python</div>
                            <div className={productstyles.productskil}>Next.js/React/Flask</div>
                            <div className={productstyles.productbutton} onClick={handleRedirect}>
                                詳しくみる⇀
                            </div>
                        </div>
                </div>
            </div>
            

        </div>
      )
    }

