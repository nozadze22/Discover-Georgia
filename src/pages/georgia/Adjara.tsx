import { Button } from "react-bootstrap";
import { Travel } from "../../../components/travel";

export function Adjara() {

    const ajara = "https://storage.georgia.travel/images/adjara-gnta.webp"
    const batumi = "https://storage.georgia.travel/images/batumi(1).webp"
    const batumi2 = "https://storage.georgia.travel/images/gonio-sarpi-3.webp"

    const tourOne = "https://storage.georgia.travel/images/970x620/goderdzi-petrified-forest-natural-monument.webp"
    const whilee = "https://storage.georgia.travel/images/970x620/batumi-lighthouse-gnta.webp"

    const qobuleti ="https://storage.georgia.travel/images/445x420/kobuleti-gnta.webp"
    const sarfi = "https://storage.georgia.travel/images/445x420/sarpi-gnta.webp"
    const gonio = "https://storage.georgia.travel/images/445x420/gonio-gnta.webp"
    const kvariati = "https://storage.georgia.travel/images/445x420/kvariati-gnta.webp"
    return(

        <main className='kmain'>

<div className="kimage">
        <img className="kimg" src={ajara} alt="" />

        <h1 className="kcontent">Ajara</h1>
        <h6 className="kcontent2"> KOften 
            called the Pearl of the Black Sea, the Ajara region is one steeped in 
            history and beloved for its startling natural beauty. It is not only one of 
            the first places in the world to have experienced the spread of Christianity,
             but also a popular beach playground with all of the modern conveniences.
            A visit to Ajara can include time spent sunning yourself on the beaches of 
            the Black Sea, hiking or rafting in the mountains, hiking through the forest, 
            visiting ancient fortresses and
             monasteries, and - of course - eating some of the best food you’vel 
             ever eaten!
            
            </h6>

        <div className="kdestination">
            <h4>Distance to the location by road from:</h4>

            <h6>Tbilisi - <span 
            style={{fontWeight: "700"}}>
            5:30 hr
            </span>
            </h6>

            <h6>Kutaisi -
            <span 
            style={{fontWeight: "700"}}>
            2:20 hr
            </span>
            </h6>
            
            <h6>
            Mestia -
        <span 
        style={{fontWeight: "700"}}> 
            6:10 hr

            </span>
            </h6>
            </div> 

            
    </div>


    <section className="Kcontent">

        <h1 className="Kheader">
            Batumi</h1>

            <img className="Kcharhcimg" src={batumi}alt="" />


            <h5 className="Kstory">
            unny beaches, a botanical garden, the dolphinarium, dancing fountains, the Alphabetic Tower, the Panoramic Ferris Wheel, the moving sculpture of Ali and Nino, fascinating museums, Christian churches next to a mosque and a synagogue – all of this and more can be found in Batumi, the magnificent coastal city of Georgia.

One of Georgia’s most popular tourist destinations, Batumi is also your gateway to exploring the rest of the beautiful, historic Ajara.
                </h5>


                <h1 className="Kheader">Kobuleti, Gonio, Kvariati, Sarpi</h1>

            <img className="Kcharhcimg" src={batumi2}alt="" />


            <h5 className="Kstory">
            For those looking to escape the hustle and bustle of 
            city life and enjoy some time relaxing amidst nature’s splendour,
             Ajara has plenty of options. In the villages of Gonio, Kvariati, 
             and Sarpi, you can enjoy stunning views of both the mountains and the sea, 
             swim in crystal clear waters, work on your tan, and get your head straight 
             from the comfort of a beachfront bungalow.
In Kobuleti Municipality, you’ll also find cascading waterfalls, 
shimmering lakes, and unspoiled nature preserves just waiting to be explored. 
The seaside resorts of Kobuleti, Bobokvati, Chakvi, and Tsikhisdziri are especially popular.
                </h5>
<div className="activites">

<div className="flag">

<div className="flagbox">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-flag-fill" viewBox="0 0 16 16">
  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
</svg>
</div>

<h6 className="kcontentbox">Attractions</h6>
<h5 className="kcontentbox" >75</h5>
</div>


<div className="snake">
<div className="snakebox">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-option" viewBox="0 0 16 16">
  <path d="M1 2.5a.5.5 0 0 1 .5-.5h3.797a.5.5 0 0 1 .439.26L11 13h3.5a.5.5 0 0 1 0 1h-3.797a.5.5 0 0 1-.439-.26L5 3H1.5a.5.5 0 0 1-.5-.5m10 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
</svg>
</div>
<h6 className="kcontentbox2">Activities</h6>
<h5 className="kcontentbox2">15</h5>
</div>

</div>
    </section>


<section className="ktours">

    <div className="two_day">

        <img className="tourimg" src={whilee} alt="" />

        <h2 className="Kheadtitile">Two-Day Tour in Batumi</h2>

        <h5 className="kcontent_text">
        Discover the wonder of the Black Sea shore, 
        visit Batumi Botanical Garden, and, during
         this two-day tour, go see captivating sights 
         such as the Delphinarium, Batumi Boulevard, Ali 
         and Nino, the Wedding Palace, and the Dancing Fountain. 
         Have a unique experience while capturing the modern landscape 
         of Adjara on film.



        </h5>

         <div className="time_distance">
         <h5 className="time_time">time

<h6 className="time-hr">24-28 hr</h6>
</h5>

<h5 className="Kdistance">

Distance

<h6 className="time_time">10km</h6>
</h5>

         </div>

    </div>

    <div className="one_day">

        <img className="onetourimg" src={tourOne} alt="" />

        <h2 className="kheadtitle2">
        Three-Day Tour in Upper Adjara

        </h2>

        <h5 className="kontext_text2">
        et up an unforgettable three-day adventure in the wilderness where you will see 
        historical structures like Khikhani Fortress, Skhalta Monastery, and Tamar’s Bridge. 
        During the tour you will also be able to see Goderdzi, 
        the Green Lake, Khulo, Makhuntseti Waterfall, and enjoy a fantastic view.
        </h5>


        <div className="one_tourdistance">

        <h5 className="time_time">time

<h6 className="time-hr">46-60hr</h6>
</h5>

<h5 className="Kdistance2">

Distance

<h6 className="time_time">84km</h6>
</h5>
        </div>

       
    </div>

</section>



<Travel />

<section className="popular">

    <div className="pics">
        <img src={qobuleti} alt="photos" />
        <img src={gonio} alt="photos" />
        <img src={kvariati} alt="photos" />
        <img src={sarfi} alt="photos" />


    </div>

    <div className="context">

        <h2 className="contextpop">Popular Destinations in Adjara</h2>

        <h4 className="contextText">Ajara is a subtropical region of fantastic beauty. The four
             protected areas of the region are similar in their pristine wilderness and different 
             in the variety of animal and plant species. The mountains of Ajara are hiding steep 
             vineyards, babbling waterfalls and lakes, old fortresses and cute wooden houses standing 
             on high “legs”. Visit the mountains of Beshumi, Goderdzi and Gomarduli to
             find calmness and peace, and have fun at the seaside resorts of Batumi, Kvariati, Gonio, 
             Sarpi and Mtsvane Kontskhi.</h4>

            <a href="https://georgia.travel/choose-your-experience?location_ids[]=8">
            <Button className="discoveer">Learn more</Button>
            </a>

    </div>

   


</section>

<section className="jorney">


    <div className="map">
        <h5 className="discover_map">Discover Ajara on map</h5>
    <a  className="map_but" href="https://www.google.com/maps/search/Ajara/@42.072112,43.6926869,13z/data=!3m1!4b1?entry=ttu">
        <Button>Go to map</Button>
    </a>
    </div>

    <div className="fool">
    <h5 className="fool_text"> If you want to get know about Ajara</h5>

    <a className="fool_disc" href="https://georgia.travel/regions/kakheti">
    <Button>Press</Button>
    </a>
    </div>

   
</section>
        </main>
    )
}