import './Banner.css'

import ArrowDown from '../icons/ArrowDown'

function Banner (){
    return(
        <>
        <header>
            <ul>
                <li><a href="#image-day">Image of the Day</a></li>
                <li><a href="#explore">Explore</a></li>
            </ul>
        </header>
        <section className='container-banner'>
            <div className='video-banner'>
                <video src="src/assets/images/nebula_red_-_31420 (Original).mp4"
                muted
                autoPlay
                loop
                type="video/mp4"
                ></video>
            </div>
            <div className='banner-text'>
                <h1>EXPLORE THE UNIVERSE</h1>
                <ul>
                    <li><a href="#image-day">Scroll</a></li>
                    <li><ArrowDown /></li>
                </ul>
            </div>
        </section>
        </>
    );
}

export default Banner