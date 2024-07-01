
// import { Geo } from "./components/gerogias"
import {Carrousel} from "../../components/carrosuel/carrousel"
import "../style/home.scss"
import { Complect} from "../../components/complecs/Complec"
import ComplectItems from "./data/items.json"
import { Button, Card, NavLink } from "react-bootstrap"
import {Season} from "../../components/cardpics/seasone"
import  "../style/global.resposnive.scss"
export function Home () {
    const xinkali = "https://podacha-blud.com/uploads/posts/2022-06/1654220984_49-podacha-blud-com-p-krasivoe-foto-khinkali-foto-53.jpg"
    const mwvadi = "https://adygsalt.ru/blog/foto/marinad-dlya-shashlika-iz-svininyi/cX6T15oiMsE.jpg"


    return (
<>


<main className="main">
<h1 className="geo" style={{display:"flex", justifyContent:"center", alignItems:"center", color: 'red', paddingTop: "50px"}}>GEORGIA</h1>

<section className="carr">
<Carrousel/>
</section>

<section className="cards">
{ComplectItems.map(item => (
    <Complect {...item} />
))}

</section>

<section className="food">
    <div className="context">
        <h5 className="firstcontext">
            Discover Georgian gastronomy

        </h5>
        <h4 className="maincontext">
        A Taste of Georgia, Literally...
        </h4>

        <h6 className="lastcontext">
        Savour the unique flavors of Georgian cuisine. Combining Eastern and Western influences, this vibrant cuisine is going to fascinate your tastebuds. Explore the culinary delights of Georgia in a traditional and modern interpretation and realize why our country is a foodie paradise.
        </h6>

    <NavLink  href="/Taste">
    <Button className="buuton" >
            Lets` dig in
        </Button>
    </NavLink>

    </div>

    <div className="foodimg">
        <Card  >
            <img src={mwvadi} alt="" />
        </Card >
        <Card >
            <img src={xinkali} alt="" />
        </Card>
      
    </div>
</section>


<section className="tour">
<Season />

</section>
{/* <Geo /> */}



</main>

</>
    )
}

