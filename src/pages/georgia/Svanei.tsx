
import { Button } from "react-bootstrap";
import "../georgia/styles/georgianglobal.scss"
import "../../style/global.resposnive.scss"
export function Svaneti() {

  const svanetiphoto = "https://storage.georgia.travel/images/svaneti(1).webp";

   const sfirstphoto = "https://storage.georgia.travel/images/marshruti-svaneti.webp"
   const ssecondphoto= "https://storage.georgia.travel/images/ushguli-shkhara-glacier-nakvami-lake-3.webp"
  const sthridphoto = "https://storage.georgia.travel/images/lamaria-the-ushguli-church-of-the-mother-of-god-2.webp"
  return (

    <main className="svaneti">

      <div className="simage">
        <img className="simg" src={svanetiphoto} alt="" />

        <h1 className="scontent">Svaneti</h1>
        <h6 className="scontent2"> Svaneti is in the northwestern 
          part of Georgia and is considered one of the most beautiful regions. 
          It comprises  ancient historical/geographical areas 
         Zemo Svaneti, whose centers are,  the town of Mestia, respectively. In this region, you will discover unique monuments of Georgian architecture from various periods of history, with centuries-old history coming to life before your eyes. Travel through the beautiful, 
          expansive nature and enjoy the local cuisine.</h6>

          <div className="sdestination">
            <h4>Distance to the location by road from:</h4>

            <h6>Tbilisi - <span style={{fontWeight: "700"}}>
            5:30hr
              </span>
              </h6>
            <h6>Batumi -

              <span style={{fontWeight: "700"}}>
              2:15 hr
              </span>
           </h6>
            
            <h6>
            Kutaisi -
           <span style={{fontWeight: "700"}}> 2 hr</span>
            </h6>
            </div> 

      </div>

      <section className="svaneticontent">

        <div className="svaneti">

        <h1 className="svaneti-header">Zemo Svaneti</h1>

        <img className="sfirst-photo" src={sfirstphoto} alt="" />

        <h4 className="svaneti-content">
        When it is snowing and flakes are flying all around, 
        everything around you resembles a fine tapestry, and the towers, 
        built of stones and boulders look like defenders of the mystical silence. 
        <br />
        <br />
        The road follows the Enguri River Valley from Samegrelo to Zemo Svaneti, which 
        starts at the source of the Enguri River and ends at the border of Samegrelo.
        </h4>
        </div>

        {/* privelis dasasruli */}

        <div className="svaneti">

<h1 className="svaneti-header">The Nature in Zemo Svaneti</h1>

<img className="sfirst-photo" src={ssecondphoto} alt="" />

<h4 className="svaneti-content">
Zemo Svaneti is in Mestia Municipality, 
a high-mountain region and hotspot of tourism and alpinism, 
with alpine nature, clear lakes, the Enguri River and its rapid tributaries, 
and divine waterfalls. 
<br />
<br />
The noble peaks of the Caucasus Mountains stand tall in Zemo Svaneti, such as Shkhara 
(5,203 m), Jangha (5,078 m), Gistola (4,860 m), Tetnuldi (4,852 m), Tsurungala (4,222 m), 
Ailama (4,547 m), Mazeri (4,012 m), Chatini (4,412 m), and Ushba (4,700 m). 

<br />
<br />
An unforgettable winter awaits you at Mestia, Hatsvali, and Tetnuldi ski resorts.
 In the short summers, this place is magical, and you could not hope for a better 
 place for hiking and other adventures. 
</h4>
</div>

{/* meres dasasruli */}

<div className="svaneti">

<h1 className="svaneti-header">The Sights in Zemo Svaneti</h1>

<img className="sfirst-photo" src={sthridphoto} alt="" />

<h4 className="svaneti-content">
One of the major sights of Svaneti, and what gives it its ethnographic flavour
 is the Svan towers. 

These giants, standing 20 to 25 meters high on a background of mountains 
reaching up for the sky, with their walls as thick as a meter and a half,
 have stood faithfully to protect the populace for centuries, holding back 
 avalanches and enemies of any strength. The Svans lived with their families
  in four or five stories of the towers connected internally through wooden ladders,
   with the platform placed like a crown atop. The latter was used for combat purposes. 
<br />
Svan towers are not the only treasure that makes this region of Georgia stand out. 
Start your tour in Svaneti at the Mestia Historical-Ethnographical Museum, which 
has a large collection of Svaneti treasures. The common place of worship of all 
Zemo Svaneti is in Mestia, at Seti St. George Church, where icons and crosses 
from the 12th to 13th centuries are kept. Visit the single-nave, two-story basilica 
Laghami Transfiguration of the Savior Church.
<br />
<br />
nd finally, try outstanding Svan dishes, such as Kubdari and Kupati seasoned with unique 
Svan salt, the cheesy Mchadi called Chishvdari, Svan khachapuri, the local bread, honey, 
and the once-distilled Svan vodka called rakhi. You will understand that one lifetime is 
not enough to know Svaneti. 
</h4>
</div>

<div className="info">
  
  <a href="https://georgia.travel/popular-trips/two-day-tour-svaneti">
  <h6>if you want to get know about Svaneti</h6>

  <Button className="gotosvaneti">Click here</Button>
  </a>

</div>

      </section>
    </main>
    
  )
}

