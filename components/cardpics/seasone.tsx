
import "./seasone.scss"


export function Season () {
    const spring = "https://storage.georgia.travel/images/300x400/spring.webp"
    const summer= "https://storage.georgia.travel/images/300x400/summer-in-georgia-country.webp"
    const autumn = "https://storage.georgia.travel/images/300x400/copy-of-autumn-svaneti.webp"
    const winter = "https://storage.georgia.travel/images/300x400/copy-of-gudauri-1.webp"
    return (
        <div className="season">

      <div className="forimage">
        <img src={spring}  alt="" />
        <div className="conntext">
            <h2 className="title">Spring</h2>
            <h6 className="title">Experience all that Georgia has to offer during spring</h6>
        </div>
      </div>
      
      <div className="forimage">
        <img src={summer}  alt="" />
        <div className="conntext">
            <h2 className="title">Summer</h2>
            <h6 className="title">Georgia in summer is frequently teeming with tourists</h6>
        </div>
      </div>
      
      <div className="forimage">
        <img src={autumn}  alt="" />
        <div className="conntext">
            <h2 className="title">Autumn</h2>
            <h6 className="title">During September you can still enjoy hiking and outdoor activites</h6>
        </div>
      </div>
      
      <div className="forimage">
        <img src={winter}  alt="" />
        <div className="conntext">
            <h2 className="title">winter</h2>
            <h6 className="title">Chilly winter makes it a great destination for winter sports...</h6>
        </div>
      </div>
            


        </div>
    )
}