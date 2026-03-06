import HomeMain from "./home/components/main"
import ServiceHome from "./home/components/services"
import CompanyHome from "./home/components/company"
import CareerHome from "./home/components/careers"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeMain/>

      <ServiceHome/>

      <CompanyHome/>

      <CareerHome/>

      
    </div>
  )
}
