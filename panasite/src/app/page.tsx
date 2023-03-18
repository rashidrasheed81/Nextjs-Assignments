'use client';
import Cta from "@/components/cta/Cta";
import Faq from "@/components/faq/Faq";
import Feature from "@/components/features/Feature";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header"
import Highlights from "@/components/highlights/Highlights";
import Newsletter from "@/components/newsletter/Newsletter";
import TopContainer from "@/components/topcontainer/TopContainer";
import { Box} from "@chakra-ui/react";


export default function Home() {
  return (
    <>
    {/* <Header/> */}
    <Box as="main">
    <TopContainer/>
    <Feature/>
    <Cta/>
    <Highlights/>
    <Newsletter/>
    <Faq/>
    <Footer/>
    </Box>
    
    </>
    
    
    
  )
}
