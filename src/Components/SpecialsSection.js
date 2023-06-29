import { Link } from "react-router-dom"
import "../Styling/SpecialsSection.css"

const specials = [
    {
        icon: require('../Resources/greek salad.jpg'),
        title: 'Greek Salad',
        price: '$12.99',
        description: `The famous greek salad of crispy lettuce,
                      peppers, olives and our Chicago style feta cheese, 
                      garnished with crunchy garlic and rosemary croutons.`,
    },
    {
        icon: require('../Resources/Bruchetta.jpg'),
        title: 'Bruchetta',
        price: '$5.99',
        description: `Our Bruschetta is made from grilled bread
                      that has been smeared with garlic and
                      seasoned with salt and olive oil. `,
    },
    {
        icon: require('../Resources/lemon dessert.jpg'),
        title: 'Lemon Dessert',
        price: '$5',
        description: `This comes straight from grandma’s
                      recipe book, every last ingredient has
                      been sourced and is as authentic as can be imagined.`,
    }
]

const Mapping= ({icon,title,price,description})=>(
    <div className="Tile">
        <img src={icon}/>
        <h2>{title}</h2>
        <h2>{price}</h2>
        <p>{description}</p>
    </div>
)

export default function SpecialsSection(){
    return (
        <main main className="SpecialsContainer">
            <h1>This Week's Specials!</h1>
            {specials.map(({icon,title,price,description})=><Mapping icon={icon} title={title} price={price} description={description} key={title}/>)}
            <Link to="/Menu" className="MenuButton">Online Menu</Link>
        </main>
    )
}