
import { Button } from "react-bootstrap";
import "./styles/kaxeti.scss"
import "../../style/global.resposnive.scss"

export function Khaxeti () {

    const kmainphoto = "https://storage.georgia.travel/images/kakheti-gnta.webp";
    const Kcharch = "https://storage.georgia.travel/images/alaverdi.webp";
    const twotour = "https://storage.georgia.travel/images/445x420/kakheti-tour.webp"
    const onetour =  "https://storage.georgia.travel/images/445x420/sighnaghi.webp";

    const travelptho_1 = "https://storage.georgia.travel/images/445x420/tower-in-georgia.webp"
    const travelptho_2 = "https://storage.georgia.travel/images/445x420/arts-and-culture-in-georgia.webp"
    const travelptho_3 ="https://storage.georgia.travel/images/445x420/food-and-wine-georgia.webp"
    return(

        <main className='kmain'>

<div className="kimage">
        <img className="kimg" src={kmainphoto} alt="" />

        <h1 className="kcontent">Kakheti</h1>
        <h6 className="kcontent2"> Kakheti is the Chakrulo song 
            that was sent into space as a message from Earth; Kakheti is 
            the ancient monasteries that protected the important treasures; Kakheti is
             the Qvevri, an ancient winemaking vessel where aromatic, flavourful Georgian 
             wine is born. Kakheti is the Alazani Valley and steep mountain passes, evergreen
              forests and arid steppes, densely populated villages and small, historical cities
            . How could you ever run out of reasons to visit Kakheti!
            
            </h6>

        <div className="kdestination">
            <h4>Distance to the location by road from:</h4>

            <h6>Tbilisi - <span 
            style={{fontWeight: "700"}}>
            1:50 hr
            </span>
            </h6>

            <h6>Batumi -
            <span 
            style={{fontWeight: "700"}}>
            7:15 hr
            </span>
            </h6>
            
            <h6>
            Kutaisi -
        <span 
        style={{fontWeight: "700"}}> 
            5:10 hr
            </span>
            </h6>
            </div> 

            
    </div>


    <section className="Kcontent">

        <h1 className="Kheader">
            kaxeti is sceond</h1>

            <h5 className="Kstory">
                
            Kakheti is a region of Georgia that shares borders with both the 
            Russian Federation to the north and Azerbaijan to the east and the south.

            People have lived in this area since the Stone Age,
            and this is evident in the abundance of historical monuments that dot the landscape, many of which were educational centres in the past. One notable example of this is the Davitgareji Monastery Complex, which stretches across twenty-five kilometers and is famed for both its architecture and its art.
            </h5>

            <img className="Kcharhcimg" src={Kcharch}alt="" />


            <h5 className="Kstory">
                
            There is a collection of ecclesiastical architecture in Kakheti, with such
             amazing representatives as Alaverdi, Ikalto, Shuamta, Bodbe, Nekresi and other churches.


For travelers who are interested in history, there are numerous museums in the region 
where ancient objects and ethnographic materials discovered during archaeological 
excavations are kept.


Kakheti is the birthplace of many outstanding Georgians, including kings, artists,
 writers, and public figures, so there are many house-museums here to honour those 
 people and help visitors who are interested in Georgia get to know them better. 


These include the palace of King Erekle (Heraclius) II in Telavi; the museums of Ilia 
Chavchavadze and Kote Marjanishvili in Kvareli, and in Mirzaani,  the house-museum of Niko Pirosmanashvili.

In addition to its fascinating history, Kakheti is also Georgia’s premiere 
winegrowing region. Due to the fertile soil and the abundance of sun, 
winemaking is a Kakhetian farmer’s primary business. The most popular varieties are Kakhuri Mtsvane, Saperavi, Rkatsiteli, and Khikhvi.

In addition to producing the best wines, Kakhetians are also famous for 
the quality of their food. Notable local dishes include mtsvadi, chakapuli, 
and khashlama, and for dessert they will have you try churchkhela and tatara made 
from grape juice.
                </h5>

<div className="activites">

<div className="flag">

<div className="flagbox">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-flag-fill" viewBox="0 0 16 16">
  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
</svg>
</div>

<h6 className="kcontentbox">Attractions</h6>
<h5 className="kcontentbox" >91</h5>
</div>


<div className="snake">
<div className="snakebox">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-option" viewBox="0 0 16 16">
  <path d="M1 2.5a.5.5 0 0 1 .5-.5h3.797a.5.5 0 0 1 .439.26L11 13h3.5a.5.5 0 0 1 0 1h-3.797a.5.5 0 0 1-.439-.26L5 3H1.5a.5.5 0 0 1-.5-.5m10 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
</svg>
</div>
<h6 className="kcontentbox2">Activities</h6>
<h5 className="kcontentbox2">9</h5>
</div>

</div>
    </section>


<section className="ktours">

    <div className="two_day">

        <img className="tourimg" src={twotour} alt="" />

        <h2 className="Kheadtitile">Two-Day Kakheti Tour</h2>

        <h5 className="kcontent_text">
        Come visit Kakheti, famous for its monuments from various 
        different time periods and diverse nature, where you can go 
        see ancient architectural monuments and impressive fortresses. 
        This two-day tour will end up being a Kakhetian adventure for you, 
        introducing you to 
        new places and filling you with emotions.
        </h5>

         <div className="time_distance">
         <h5 className="time_time">time

<h6 className="time-hr">24-30 hr</h6>
</h5>

<h5 className="Kdistance">

Distance

<h6 className="time_time">50km</h6>
</h5>

         </div>

    </div>

    <div className="one_day">

        <img className="onetourimg" src={onetour} alt="" />

        <h2 className="kheadtitle2">
        One-Day Tour in Kakheti
        </h2>

        <h5 className="kontext_text2">
        The most beautiful region of the most beautiful country – Kakheti, where numerous strange and wonderful sights await you, including the spectacular Georgian attraction of Davit Gareji, the village with a grand history known as Bodbe, and the tourists’ choice, a lovely example of the synthesis of past and present, the city of love – Sighnaghi.
        </h5>


        <div className="one_tourdistance">

        <h5 className="time_time">time

<h6 className="time-hr">8-12hr</h6>
</h5>

<h5 className="Kdistance2">

Distance

<h6 className="time_time">110km</h6>
</h5>
        </div>

       
    </div>

</section>



<section className="kplaces">

    <div className="kphoto">
        <img className="photo_k" src={travelptho_1} alt="" />
        <h4 className="K_text_photo">
            Cultural Monuments
        </h4>
    </div>
    <div className="kphoto">
        <img className="photo_k" src={travelptho_2} alt="" />

        <h4 className="K_text_photo">
            Arts & Culture
        </h4>
    </div>
    <div className="kphoto">
        <img className="photo_k" src={travelptho_3} alt="" />

        <h4 className="K_text_photo">
            Food & Wine
        </h4>
    </div>
</section>

<section className="jorney">


    <div className="map">
        <h5 className="discover_map">Discover Kakheti on map</h5>
    <a  className="map_but" href="https://www.google.com/maps/search/kakheti/@42.072112,43.6926869,13z/data=!3m1!4b1?entry=ttu">
        <Button>Go to map</Button>
    </a>
    </div>

    <div className="fool">
    <h5 className="fool_text"> If you want to get know about kakheti</h5>

    <a className="fool_disc" href="https://georgia.travel/regions/kakheti">
    <Button>Press</Button>
    </a>
    </div>

   
</section>
        </main>
    
    )
}