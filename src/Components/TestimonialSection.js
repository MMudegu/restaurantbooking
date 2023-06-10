import { FaStar } from "react-icons/fa";
import "../Styling/TestimonialSection.css"


const testimonials = [
    {
        rating:5,
        avatar:require('../Resources/white male.jpg'),
        name:'John Doe',
        review: `"The restaurant serves tasty food in addition to having attentive staff!"`,
    },
    {
        rating:4.5,
        avatar: require('../Resources/White woman.jpg'),
        name:'Mary Stewart',
        review: `"Incredible food and even better ambiance"`,
    },
    {
        rating:5,
        avatar: require('../Resources/black man.jpg'),
        name:'Bill Brown',
        review:`"The website works seemlessly and the staff are very helpfull"`,
    },
    {
        rating:5,
        avatar:require('../Resources/latino man.jpg'),
        name:'Ruben Garcia',
        review:`"Their food is incredible and their portions are also great"`,
    },

]

const RenderRating=({rating})=>{
    switch (rating) {
        case 4.5: return(<div className="RatingFive"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="Half"/></div>);
            
            break;
        
        case 5: return(<div className="RatingFive"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>);
            
            break;
    
        default:
            break;
    }
}

const TestimonialCard = ({rating,avatar,name,review})=>{
    return(
        <div className="TestimonialCard">
            <RenderRating rating = {rating}/>
            <img src={avatar} alt="Customer Avatar"/>
            <h2 className="Name">{name}</h2>
            <p className="Review">{review}</p>
        </div>
    )
};

export default function TestimonialSection(){
    return(
        <main className="TestimonialSection">
            <h1>Testimonials</h1>
            {testimonials.map(({rating,avatar,name,review})=><TestimonialCard rating={rating} avatar={avatar} name={name} review = {review}/>)}
        </main>
    );
}