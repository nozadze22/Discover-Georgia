import "../../src/style/global.resposnive.scss"
import "./meals.scss"


type GeorgianFoodProps = {
    imgURL: string,
    name: string
}

export function GeorgianFood ({ name, imgURL}: GeorgianFoodProps) {

    return (

        <div >
           <div className="sectionn"> 
           <img className="images" src={imgURL} alt="" />
           <h2 className="titlee">{name}</h2>

           </div>
               
            
        </div>

    )
}