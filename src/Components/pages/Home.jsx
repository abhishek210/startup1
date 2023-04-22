import { Link } from "react-router-dom"
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="name">
                    <h1>IT Solutions And Business</h1>
                    <h1>Services Company</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius consequatur, distinctio voluptate unde iste sit, deleniti esse iusto quos modi ipsum odit. Minima quaerat quis perferendis tenetur voluptatum optio obcaecati commodi praesentium omnis, magni eaque cupiditate nemo error. Nihil magni totam quibusdam ab vitae distinctio aliquid omnis dignissimos quas sunt.</p>
                    <Link to='/about' > <button>About Us</button></Link>
                    {/* <Link to='/contact'><button>Contact Us</button></Link> */}
                </div>
                <div className="image">
                   <img src="https://imgs.search.brave.com/uz1P9NMoZyEDc46vP8zzzUhtyAE8kS2bpKOKjMoj22Y/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5h/ZGxpdHRsZS5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy95b3Vy/LXN1Y2Nlc3MtYnVz/bmVzcy1hbmFseXN0/LmpwZw" alt="img" />
                </div>
            </div>
        </>
    )
}

export default Home