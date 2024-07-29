import "../src/pages/georgia/styles/kaxeti.scss"



const travelptho_1 = "https://storage.georgia.travel/images/445x420/tower-in-georgia.webp"
    const travelptho_2 = "https://storage.georgia.travel/images/445x420/arts-and-culture-in-georgia.webp"
    const travelptho_3 ="https://storage.georgia.travel/images/445x420/food-and-wine-georgia.webp"
export function Travel() {
    

    return(
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
    )

}