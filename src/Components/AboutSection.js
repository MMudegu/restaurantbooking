import "../Styling/AboutSection.css"
import Owner1 from "../Resources/Mario and Adrian A.jpg"
import Owner2 from "../Resources/Mario and Adrian b.jpg"


export default function AboutSection(){
    return(
        <main className="AboutSection">
            <h1 id="About">About Us</h1>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
               Lorem ipsum dolor sit amet, <br/>
               consectetur adipiscing elit, <br/>
               sed do eiusmod tempor incididunt <br/>
               ut labore et dolore magna aliqua.<br/>
            </p>
            <img src={Owner1} className="ImgOwner1" alt="This is a photo of one of the restaurants owners"/>
            <img src={Owner2} className="ImgOwner2" alt="This is a photo of one of the restaurants owners"/>
        </main>
    )
}