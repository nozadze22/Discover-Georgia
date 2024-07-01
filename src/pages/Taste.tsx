import "../style/taste.scss"
import "../style/global.resposnive.scss"

import Food from "./data/Food.json"
  import {GeorgianFood} from "../../components/Taste/Meals"
import { Button } from "react-bootstrap"
 
 
 export function Taste () {
     return (

        <>
        
        <div className="headerr2">
            <h1 className="maintitle">Taste  Georgia Food</h1>

            

            <section className="Food">
           {Food.map(item => (
            <GeorgianFood {...item} />
           ))}

        </section>
        
        <div className="dishes">
        <h5 className="warning">! Not all Georgian dishes here are just Romenimes</h5>
        <h5 className="warning2">If you are interested in Georgian cuisine

       <a href="https://georgia.travel/food-wine/georgian-cuisine?sort%5Btop%5D=1" target="_blank">
       <Button className="gonext">discover</Button>
       </a>
        </h5>
        
        </div>


        </div>
        
     
        </>
    )
 }