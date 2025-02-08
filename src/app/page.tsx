import Image from "next/image";
import styles from './styles/styles.module.css'

export default function Home() {
  return (
    <div>
        <section id="products" className="products">
            <h2>Products</h2>
            <div class="product-grid">

                <div class="product-back">
                    <div class="product-item">
                        <img src="./Public/images/tamalog.png" alt="product1">
                        <div class="product-text">
                            <div class="product-icons">
                                <div class="product-kozin">個人制作</div>
                                <div class="product-type">#webアプリ</div>
                                <div class="product-award">KCL☆Hack(2024/11)金賞</div>
                            </div>
                            <div class="product-title">体組成計管理アプリ"たまLog"</div>
                            <div class="product-coment">結果用紙の写真をアップロードするだけ！</div>
                            <div class="product-skil">言語>>Typescript/JavaScript/CSS/Python</div>
                            <div class="product-skil">フレームワーク>>Next.js/React/Flask</div>
                            <div class="product-button">
                                <a href='./products/product1.html' ><span>詳しくみる⇀</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product-back">
                    <div class="product-item2">
                        <div class="product-text">
                            <div class="product-icons">
                                <div class="product-team">チーム制作</div>
                                <div class="product-type">#webアプリ</div>
                                <div class="product-award">ハックツハッカソン(2024/12)企業賞</div>
                            </div>
                            <div class="product-title">わたしが!?「市か区」の観光大臣!</div>
                            <div class="product-coment">写真を撮ってポスターを作っちゃおう！</div>
                            <div class="product-skil">言語>>Typescript/JavaScript/CSS/Python</div>
                            <div class="product-skil">フレームワーク>>Next.js/React/Flask</div>
                            <div class="product-button">
                                <a href='./products/product2.html' >詳しくみる⇀</a>
                            </div>
                        </div>
                        <img src="./Public/images/shikaku.png" alt="product2">
                    </div>
                </div>

                <div class="product-back">
                    <div class="product-item3">
                        <img src="./Public/images/ThanksLink.png" alt="product3">
                        <div class="product-text">
                            <div class="product-icons">
                                <div class="product-team">チーム制作</div>
                                <div class="product-type">#webアプリ</div>
                                <div class="product-award">技育camp(2025/1)努力賞</div>
                            </div>
                            <div class="product-title">thanksLink</div>
                            <div class="product-coment">「ありがとう」でつながるSNS</div>
                            <div class="product-skil">言語>>Typescript/JavaScript/CSS/SQL</div>
                            <div class="product-skil">フレームワーク>>Next.js/master.js/React/tailwind CSS</div>
                            <div class="product-button">
                                <a href='./products/product3.html' >詳しくみる⇀</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product-back">
                    <div class="product-item2">
                        <div class="product-text">
                            <div class="product-icons">
                                <div class="product-kozin">個人制作</div>
                                <div class="product-type">#webサイト</div>
                            </div>
                            <div class="product-title">My Portfolio</div>
                            <div class="product-coment">ポートフォリオサイト</div>
                            <div class="product-skil">言語>>HTML/JavaScript/CSS/PHP</div>
                            <div class="product-skil">フレームワーク>>jQuert</div>
                            <div class="product-button">
                                <a href='./products/product4.html' >詳しくみる⇀</a>
                            </div>
                        </div>
                        <img src="./Public/images/Portfolio.png" alt="product4">
                    </div>
                </div>

            </div>
        </section>


        <section id="about-me" class="about-me">
            <h2>About Me</h2>
            <div class='aboutmeback'>
                <div class='aboutmeBox'>
                    <img src="./Public/images/Me.png" alt="product3">
                    <div class="aboutmetext">
                        <div class="aboutmetextName">Sogo Rei</div>
                        <div class="aboutmetextSub">北九州の大学四年生(2025.4大学院進学予定)</div>
                        <div class="aboutmetextMain">制御工学を専攻し、医用画像工学を研究テーマにしています。趣味でハッカソンなどに参加してアプリ制作をしています。研究で得た知識を何か形にできないかなと思いはじめました。</div>
                        <div class="aboutmetexttag">北九州ITコミュニティ「StepBycode」を運営しています。</div>
                    </div>
                </div>
            </div>
        </section>

        <section id="concept" class="concept">
            <h2>Concept</h2>
            <div class='concept-back'>
                <div class="concept-text">「好き」を形にしたい
               <br>手がけたアイデアが形になった宝物を、この場所に。
               <br>これからも新たな挑戦を。</div>
            </div>
        </section> 
    </div>
  );
}
