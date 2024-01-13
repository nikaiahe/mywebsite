import './Projects.css'
import maze from '../images/IMG_0073.jpg'
import runway from '../images/runway.jpg'

export default function Projects(){
    return (
        <div class="flex-container">
            <div id="content1">
                <h1 id="title1">
                    ☆ what i've been working on! ☆
                </h1>
                
            </div>

            <div id="content2">
                <div id="content2text">
                <h1 id="title2">
                    Omnidirectional Marble Maze Game
                </h1>
                <h2 id = "subtitle2">
                    Art of Engineering: September 2023 - December 2023
                </h2>
                <p id="para2">
                    wow guys pretend i wrote a super cool paragraph about this project
                </p>
                </div>

                <img src={maze} alt text="maze" className="mazeimg"></img>
                
            </div>
            
            <div id="content3">
                <div id="content3text">
                <h1 id="title3">
                    Using Image Processing to Analyze the Influence of Fashion Trends Across Fashion Capitals 
                    from 2000 to 2020: A Retrospective Quantitative Analysis
                </h1>
                <h2 id = "subtitle3">
                    AP Research: August 2022 - May 2023
                </h2>
                <p id="para3">
                    wow what a cool project
                </p>
                </div>
                <img src={runway} alt text="runway" className="runwayimg"></img>

            </div>
            <div id="content4">guys i really dont feel like filling this in</div>
            <div id="content5">or this</div>
        </div>
        


    )
}