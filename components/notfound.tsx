

import "./notfound.scss"
export function Notfound() {
const notfound = "https://weare1337.ru/wp-content/uploads/c/3/d/c3de8ec355fe0df6244b6195575e504d.jpeg"

    return (
       <section className="not">

         
<a href="/Home">
            <button>Go back to home</button>
           
        </a>
        <img src={notfound} alt="not found" />
       
       </section>
    )
}