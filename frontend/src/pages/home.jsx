import "../css/home.css"
import bgv from "../assets/bgv.mp4"
function Home(){
    return (
        <div>
            <section class="showcase">
                <header>
                <h2 class="logo">Am.us</h2>
                </header>
                <video src={bgv} muted loop autoPlay></video>
                <div class="overlay"></div>
                <div class="text">
                <h2>Never Stop To </h2> 
                <h3>Exploring The World</h3>
                <a href="/signup">Sign Up</a>
                </div>
            </section>
        </div>
    )
}

export default Home;