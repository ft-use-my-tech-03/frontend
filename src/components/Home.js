import React from 'react'

const Home = () => {
    return (
        <div className="hboxParent">
            <div className="hbox2">
                <div className="hboxIntro">
                    <h1>
                        Use My Tech Stuff:
                    </h1>
                    <p>
                        Much like AirBnB, but for high end electronics. Are you tired of paying ridiculous fees for camera and other equipment rentals? Bypass the middleman and rent from a real person!
                    </p>
                    <img src="https://ma-hub.imgix.net/wp-images/2019/07/22174711/cameras-renting-vs-owning.jpg?w=800&h=400&auto=format" />
                </div>
                
                <div className="hboxOptions">
                    <h3>
                        Video
                    </h3>
                    <h3>
                        Audio
                    </h3>
                    <h3>
                        Tech
                    </h3>
                </div>
            </div>
        </div>
    )
}


export default Home