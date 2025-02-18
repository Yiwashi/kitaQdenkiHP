//Image

//css
import headertyles from './headerstyles.module.css'
//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//Link
import Link from 'next/link';



export default function Header() {

    return (
        <div className={headertyles.header}>
            <div className={headertyles.logo}>
                MyPortfolio
            </div>
            <Link href="#" >
                <FontAwesomeIcon icon={faBars} className={headertyles.menuIcon}/>
            </Link>
            <div className={headertyles.navbar}>
                
                <Link href="#about-me">
                    <div className={headertyles.headerBIG}>About</div>
                    <div className={headertyles.headerSMALL}>わたしについて</div>
                </Link>
                <Link href="#products">
                    <div className={headertyles.headerBIG}>Products</div>
                    <div className={headertyles.headerSMALL}>作品紹介</div>
                </Link>
                <button id="OpenModalContact">
                    <div className={headertyles.headerBIG}>Contact</div>
                    <div className={headertyles.headerSMALL}>お問い合わせ</div>
                </button>
            </div>
        </div>
      )
    }

