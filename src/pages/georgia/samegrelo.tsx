import { Button } from 'react-bootstrap'
import '../georgia/styles/georgianglobal.scss'
const  mainphto = "https://www.turebi.ge/uploads/photos/tours1/large/33061_5.jpg?v=0"
const Samegrelopic1 ="https://storage.georgia.travel/images/samegrelo.webp"
const Samegrelopic2 = "https://storage.georgia.travel/images/kolkheti-national-park.webp"
const Samegrelopic3 = "https://storage.georgia.travel/images/dadiani-palace-in-zugdidi.webp"
function Samegrelo() {
  return (

    
    <main className="svaneti">

      <div className="simage">
        <img className="simg" src={mainphto}  alt="" />

        <h1 className="scontent">Samegrelo</h1>
        <h6 className="scontent2"> Samegrelo is in the western 
          part of Georgia and is considered one of the most beautiful regions. 
          It comprises  ancient historical/geographical areas 
         Samegrelo, whose centers are,  the town of Zugdid, respectively. In this region, you will discover unique monuments of Georgian architecture from various periods of history, with centuries-old history coming to life before your eyes. Travel through the beautiful, 
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

        <h1 className="svaneti-header">Samegrelo</h1>

        <img className="sfirst-photo" src={Samegrelopic1} alt="" />

        <h4 className="svaneti-content">
        Samegrelo is situated between the Black Sea and the Rioni, Enguri, and Tskenistskali rivers in the central part of western Georgia. The region has a humid, subtropical climate, with primarily snowless winters, hot summers, mighty rivers, marshes, springs, and lakes.

The kingdom of Colchis existed in this area from the 6th to the 2nd centuries BCE. Colchis is associated with the myth of Jason and the Argonauts, as Greek mythology enthusiasts are already aware.
        <br />
        <br />
        In the 1st century BCE, Colchis fell under Roman sovereignty. Later, it became a part of unified western and eastern Georgia. 

It then became the Odishi Principality, which was proclaimed a protectorate of Russia in the 19th century, following which it became a part of an independent democratic country in 1918. Now, the area of Samegrelo is a part of the Samegrelo-Zemo Svaneti administrative unit and is comprised of Abasha, Martvili, Senaki, Chkhorotsku, Tsalenjikha, Khobi, and the port city of Poti. 
        </h4>
        </div>

        {/* privelis dasasruli */}

        <div className="svaneti">

<h1 className="svaneti-header">Nature in Samegrelo
</h1>

<img className="sfirst-photo" src={Samegrelopic2} alt="" />

<h4 className="svaneti-content">
Begin the adventure at the Kolkheti National Park on the shores of the Black Sea, around Paliastomi Lake. You can take a boat, cutter, pontoon, or kayak to see the unique Kolkhetian forest and wetlands, which are now under UNESCO protection. From the observation towers, you can see as many as one hundred species of migratory birds. 
<br />
<br />
The mountainous area of Samegrelo is amazing. Go up to Tsalenjikha, 2,650 meters above sea level on the Egrisi Range, to see the colorful lakes, where you will find the glacial Tobavarchkhili Lake and the waterfalls and small lakes of the Magana river. 

<br />
<br />
Put the following natural monuments on your list of places to see: Kuakantsalia, a magically swaying, 12-ton boulder in Tsalenjikha; Katsoburi Managed Reserve; Intsra Valley; Oniore and Chkhomuri Waterfalls; Martvili and Balda Canyons. 

If you’re searching for a vacation by the sea, then visit Anaklia and Maltakva
</h4>
</div>

{/* meres dasasruli */}

<div className="svaneti">

<h1 className="svaneti-header">The Sights in Samegrelo</h1>

<img className="sfirst-photo" src={Samegrelopic3} alt="" />

<h4 className="svaneti-content">

Many tourists start their journey through Samegrelo from the magical palace in Zugdidi, the main city of Samegrelo, which has been the calling card of the region since the 17th century. It was the residence of the famous princes of Samegrelo, the Dadianis. The palace is now a state museum, where exhibits of worldwide significance and religious relics are kept. 
<br />
One of the most important sites of not only Samegrelo, but all of Georgia, is Nokalakevi, the capital of western Georgia from the 5th to 6th centuries CE. 

The long history of Samegrelo encompasses many architectural monuments, such as Martvili Mother of God Church (7th century), Tsaishi Cathedral (10th-11th centuries), Kortskheli Virgin Church (17th century), Khobi Monastery (13th-14th centuries), Abedati Fortress (4th-6th centuries) and Church (9th century), Rukhi Fortress (17th century), Shkhepi Fortress (4th-16th centuries), and more.
<br />
<br />
The largest hydroelectric power station in the country, Engurhesi, is in Samegrelo. It is the most complex and magnificent structure of 20th-century Georgia. Here you can take a boat trip on the Enguri River and even have a tour inside this engineering marvel.
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

export default Samegrelo
