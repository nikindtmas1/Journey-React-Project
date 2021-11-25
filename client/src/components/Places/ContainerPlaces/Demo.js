import FirstPlace from "./First";
import FourtPlace from "./Fourth";

const Demo = ({
    match
}) => {
    let component = FourtPlace

    if(match.params.id === "1a"){
     component = FirstPlace;

    }else{
        console.log('false');
    }
    
    return (
        <div>
            <div>{match.params.id}</div>
            {
                component
            }
        </div>





    );
};

export default Demo;