import Image from "next/image";
import styles from './styles/styles.module.css'

//components
import Title from "./components/title/title";
import Header from "./components/header/header";
import Product1 from "./components/Products/product1";

export default function Home() {

    return (
    <>
    <Header/>
    <Title/>
    <div className="flex"></div>
    <Product1/>
    
    </>
        
      )
    }

