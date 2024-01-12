import './About.css'
import headshot from '../images/headshot.jpg';
export default function About(){
    return (
    <>
    <div id="headshot"></div>
    
    

    <div id="main">
        <h1 id="intro">hello</h1>
        <p id="para">this is about me</p>
        <img src={headshot} alt text="headshot" />
    </div> 
    </>
   
        


    )
}