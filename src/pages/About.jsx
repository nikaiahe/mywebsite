import './About.css'
import headshot from '../images/IMG-2377.jpg'

export default function About(){
    return (
        <div class="flex-container">
            <div id="contents1">*:･ﾟ✧ who, what, where, when, why? ✧･ﾟ:*</div>
            <div id="contents2">
                <div id="contents2text">
                <h1 id="titles2">
                    Who
                </h1>
                <h2 id = "subtitles2">
                    who i am
                </h2>
                <p id="paras2">
                    abou tmeeee
                </p>
                </div>

                <img src={headshot} alt text = "headshot" className="headshotimg"></img>
                
            </div>
            
            <div id="contents3">
                <div id="contents3text">
                <h1 id="titles3">
                    What
                </h1>
                <h2 id = "subtitles3">
                    what am i 
                </h2>
                <p id="paras3">
                    i am a student at columbia
                </p>
                </div>
                

            </div>
            <div id="contents4">Content 4</div>
            <div id="contents5">Content 5</div>
            <div id="contents6">Content 6</div>
        </div>
        


    )
}