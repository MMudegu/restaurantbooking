import { Link, Outlet } from "react-router-dom"
import "../../Styling/Login.css"
import Footer from "../Footer"
import { SimpleHeader } from "../Reservation"

export default function Login(){
    return(
        <div className="Login">
            <SimpleHeader/>
            <div className="LoginChildren">
                <Link to='LoginForm'>Login</Link>
                <Link to='AccountSetup'>Account Setup</Link>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    )
}