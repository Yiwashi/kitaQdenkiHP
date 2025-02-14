import Image from "next/image";

import product2img from "./../../Public/images/shikaku.png"
import productstyles from "./products.module.css"

export default function Product2() {

    return (
        <div>
           <div className={productstyles.productback}>
                <div className={productstyles.productitem2}>
                    <Image src={product2img} alt="" className={productstyles.productimg}></Image>
                        <div className={productstyles.producttext}>
                            <div className={productstyles.producticons}>
                                <div className={productstyles.productkozin}>個人</div>
                                <div className={productstyles.producttype}>#webアプリ</div>
                                <div className={productstyles.productaward}>KCL☆Hack(2024/11)金賞</div>
                        </div>
                            <div className={productstyles.producttitle}>体組成計管理アプリ"たまLog"</div>
                            <div className={productstyles.productcoment}>結果用紙の写真をアップロードするだけ！</div>
                            <div className={productstyles.productskil}>言語==Typescript/JavaScript/CSS/Python</div>
                            <div className={productstyles.productskil}>フレームワーク==Next.js/React/Flask</div>
                            <div className={productstyles.productbutton}>
                                <a href='./products/product1.html' ><span>詳しくみる⇀</span></a>
                            </div>
                        </div>
                </div>
            </div>
            

        </div>
      )
    }

