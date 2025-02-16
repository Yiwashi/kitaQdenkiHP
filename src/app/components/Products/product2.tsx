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
                                <div className={productstyles.productteam}>チーム</div>
                                <div className={productstyles.producttype}>#webアプリ</div>
                                <div className={productstyles.productaward}>ハックツハッカソン(2024/12)企業賞</div>
                        </div>
                            <div className={productstyles.producttitle}>わたしが!?「市か区」の観光大臣!</div>
                            <div className={productstyles.productcoment}>写真を撮ってポスターを作っちゃおう！</div>
                            <div className={productstyles.productskil}>Typescript/Python/HTML/JavaScript/CSS</div>
                            <div className={productstyles.productskil}>Next.js/Frask/React/WebRTC/CSS Modules/tailwind CSS</div>
                            <div className={productstyles.productbutton}>
                                <a href='./products/product1.html' ><span>詳しくみる⇀</span></a>
                            </div>
                        </div>
                </div>
            </div>
            

        </div>
      )
    }

