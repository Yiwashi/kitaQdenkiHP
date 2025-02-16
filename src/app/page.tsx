import Image from "next/image";
import styles from './styles/styles.module.css'

//components
import Title from "./components/title/title";
import Header from "./components/header/header";
import Product1 from "./components/Products/product1";
import Product2 from "./components/Products/product2";
import Product3 from "./components/Products/product3";
import Product4 from "./components/Products/product4";

export default function Home() {

    return (
    <>
    <Header/>
    <Title/>
    <div className="flex flex-col justify-center items-center">
      <div className={styles.contentTitle}>Products</div>
      <Product1/>
      <Product2/>
      <Product3/>
      <Product4/>
  

    
    <div className={styles.contentTitle}>About me</div>

    <div className={styles.contentTitle}>Concept</div>

    </div>

    
    </>
        
      )
    }

