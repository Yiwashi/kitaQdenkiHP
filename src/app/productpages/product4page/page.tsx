import Image from "next/image";
import Link from 'next/link';
import product4 from "./../../Public/images/Portfolio.png"
import pagestyles from './../styles/productpage.module.css'

//components
import PageHeader from "../components/Header/pageHeader";
import Fotter from "@/app/components/footer/footer";

export default function Product4page() {

    return (
    <>
      <PageHeader/>

      <div className={pagestyles.Ptitle}>
              <div className={pagestyles.titleText}>
                  <div className={pagestyles.titleTexth3}>ポートフォリオサイト</div>
                  <div className={pagestyles.titleTexth1}>MyPortfolio</div>
                  <div className={pagestyles.titleTexth4}>-手がけたアイデアが形になった宝物を、この場所に。-</div>
              </div>
              <Image src={product4} alt="" className={pagestyles.Ptitleimg}></Image>
      </div> 

      <div className={pagestyles.tableWrapper}>
        <table className={pagestyles.table}>
          <tbody>
            <tr className={pagestyles.tableRow}>
              <th>GitHub</th>
              <td><Link href='https://github.com/0-s0g0/Myportfolio' >github.com/0-s0g0/Myportfolio</Link></td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>背景</th>
              <td>ハッカソンで作った作品をまとめたサイトを作りたい <br />LT等で使うポートフォリオを作りたい！</td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>目的</th>
              <td>初心に戻ってHTMLとCSSのコーディングを丁寧に一からしたい。JQueryとPHPも導入してみたい</td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>担当箇所</th>
              <td>すべて(個人)</td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>使用技術</th>
              <td>言語 : HTML/JavaScript/CSS/PHP<br />
                 フレームワーク : jQuert<br />
              </td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>制作期間</th>
              <td>(2025.01.01～Now)</td>
            </tr>
                   

          </tbody>
        </table>    
      </div>

      <Fotter/>

    </>
        
      )
    }

