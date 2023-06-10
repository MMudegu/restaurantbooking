import "../Styling/LandingPage.css"
import AboutSection from "./AboutSection"
import Footer from "./Footer"
import HeaderSection from "./HeaderSection"
import HeroSection from "./HeroSection"
import SpecialsSection from "./SpecialsSection"
import TestimonialSection from "./TestimonialSection"


export default function LandingPage(){
    return(
        <>
        <HeaderSection/>
        <HeroSection/>
        <SpecialsSection/>
        <TestimonialSection/>
        <AboutSection/>
        <Footer/>
        </>
    )
}