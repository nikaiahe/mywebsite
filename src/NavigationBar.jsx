import './NavigationBar.css'
function NavigationBar(){
    return(
        <>
        <nav>
            <h1 id= "name">
                nikaia he
            </h1>
            <div>
                <ul id ="navbar">
                    <li><a href="#/Home">Home</a> </li>
                    <li><a href="#/More">More</a></li>
                    <li><a href="#/Stuff">Stuff</a></li>
                    <li><a href="#/About">About</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavigationBar