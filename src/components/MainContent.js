
import France98 from "./../../src/images/France98.jpeg";


const MainContent = (props) =>{
    return (
        <div className='mainContent'>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
            <img id="pic" alt="pictures" src={France98} />
            <p>{props.text}</p>
        </div>
    );
}

export default MainContent;