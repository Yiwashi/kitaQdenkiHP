import Image from "next/image";

import product3img from "./../../Public/images/ThanksLink.png"
import productstyles from "./products.module.css"

export default function Product3() {

    return (
        <div>
           <div className={productstyles.productback}>
                <div className={productstyles.productitem3}>
                    <Image src={product3img} alt="" className={productstyles.productimg}></Image>
                        <div className={productstyles.producttext}>
                            <div className={productstyles.producticons}>
                                <div className={productstyles.productteam}>チーム</div>
                                <div className={productstyles.producttype}>#webアプリ</div>
                                <div className={productstyles.productaward}>技育camp(2025/01)努力賞</div>
                        </div>
                            <div className={productstyles.producttitle}>ThanksLink</div>
                            <div className={productstyles.productcoment}>「ありがとう」で繋がる・広がるSNS</div>
                            <div className={productstyles.productskil}>Typescript/JavaScript/CSS/SQL</div>
                            <div className={productstyles.productskil}>Next.js/master.js/React/tailwind CSS</div>
                            <div className={productstyles.productbutton}>
                                <a href='./products/product1.html' ><span>詳しくみる⇀</span></a>
                            </div>
                        </div>
                </div>
            </div>
            

        </div>
      )
    }

