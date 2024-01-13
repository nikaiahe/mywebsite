import './NavigationBar.css'
function NavigationBar(){
    return(
        <>
        <nav>
            <h1 id= "name">
                nikaia he ❣
            </h1>
            <div>
                <ul id ="navbar">
                    <li><a href="#/Home">Home</a> </li>
                    <li><a href="#/About">About</a></li>
                    <li><a href="#/Projects">Projects</a></li>
                    <li><a href="#/Contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavigationBar