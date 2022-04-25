import Sonny from "../images/sonny.jpeg";

const SideContent = (props) =>{
    return (
        <div className="side">
            <h2>About me</h2>
            <img id="pic" alt="pictures" src={Sonny} />
            <p>Sonny Anderson</p>
        </div>
    )
}

export default SideContent;