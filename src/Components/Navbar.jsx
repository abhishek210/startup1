
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div className="main">
            <div className="logo">
                <h2 style={{marginTop:"40px"}}>ithub45</h2>
            </div>
            <div className="navbar">
             <Link to='/' > <h3>Home</h3></Link> 
             <Link to='/about' ><h3>About</h3></Link>  
             {/* <Link to='/contact' ><h3>Contact</h3></Link> */}
            </div>
            </div>
        </>
    )
}

export default Navbar