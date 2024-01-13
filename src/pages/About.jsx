import './About.css'
import headshot from '../images/IMG-2377.jpg'

export default function About(){
    return (
        <div class="flex-container">
            <div id="contents1">
                ⚘᠂
                <span class="title-word title-word-1">  who, </span>
                <span class="title-word title-word-2">what, </span>
                <span class="title-word title-word-3">where, </span>
                <span class="title-word title-word-4">when, </span>
                <span class="title-word title-word-5">why? </span>
                ᠂ ⚘
            </div>

            <div id="contents2">
                <div id="contents2text">
                <h1 id="titles2">
                    Who?
                </h1>
                <h2 id = "subtitles2">
                    A short journey back through my life
                </h2>
                <p id="paras2">
                    Hello! My name is Nikaia, phonetically Nik-eye-yah.
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
                    A look at what I'm curious about 
                </h2>
                <p id="paras3">
                    Technology is a readily influential tool and is being implemented across many industries. 
                    I'm particularly interested in the intesection of technology and the arts. For instance, utilizing data science
                    to track fashion trends and build models to predict future trends. 
                </p>
                </div>
            </div>

            <div id="contents4">
                <div id="contents4text">
                <h1 id="titles4">
                    Where
                </h1>
                <h2 id = "subtitles4">
                    A snapshot at where I spend my days
                </h2>
                <p id="paras4">
                    i am a student
                </p>
                </div>

            </div>
            <div id="contents5">
                <div id="contents5text">
                <h1 id="titles5">
                    When
                </h1>
                <h2 id = "subtitles5">
                    idk what this means
                </h2>
                <p id="paras5">
                    ni'll figure it out later
                </p>
                </div>

            </div>

            <div id="contents6">
                <div id="contents6text">
                <h1 id="titles6">
                    Why
                </h1>
                <h2 id = "subtitles6">
                    A brief summary of my values and what keeps me grounded
                </h2>
                <p id="paras6">
                    values blah blah
                </p>
                </div>
            </div>
        </div>
        


    )
}