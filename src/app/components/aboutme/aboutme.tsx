import Image from "next/image";
import Link from 'next/link';

import aboutmeGirl from "./../../Public/images/Me.png"
import aboutmestyles from './aboutme.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Aboutme() {

    return (
        <div  className={aboutmestyles.aboutmeback}>
            <div className={aboutmestyles.aboutmeBox}>
                <Image src={aboutmeGirl} alt="" className={aboutmestyles.aboutmeimg}></Image>
                <div  className={aboutmestyles.aboutmetext}>
                    <div className={aboutmestyles.aboutmetextName}>Sogo Rei</div>
                    <div className={aboutmestyles.aboutmetextSub}>北九州の大学四年生(2025.4大学院進学予定)</div>
                    <div className={aboutmestyles.aboutmetextMain}>制御工学を専攻し、医用画像工学を研究テーマにしています。趣味でハッカソンなどに参加してアプリ制作をしています。研究で得た知識を何か形にできないかなと思いはじめました。</div>
                    <div className={aboutmestyles.aboutmetexttag}>北九州ITコミュニティ「StepBycode」を運営しています。</div>
                    <div className={aboutmestyles.aboutmeicons}>

                        <Link href="https://www.instagram.com/0_s0g0" >
                            <FontAwesomeIcon icon={faInstagram} className={aboutmestyles.icon}/>
                        </Link>
                        <Link href="https://x.com/0_s0g0" >
                            <FontAwesomeIcon icon={faXTwitter} className={aboutmestyles.icon}/>
                        </Link>
                        <Link href="https://www.facebook.com/share/1WFxQ2T4mg/" >
                            <FontAwesomeIcon icon={faFacebook} className={aboutmestyles.icon}/>
                        </Link>
                        <Link href="https://github.com/0-s0g0" >
                            <FontAwesomeIcon icon={faGithub} className={aboutmestyles.icon}/>
                        </Link>
                    </div>
                </div>
                
                
            </div>
        </div>
      )
    }
