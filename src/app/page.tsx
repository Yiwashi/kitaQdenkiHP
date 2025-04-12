import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, PenToolIcon as Tool, Settings, Users, Phone } from "lucide-react"
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
