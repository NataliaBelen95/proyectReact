import React from "react";
import cafe1 from "../../assets/imagenes/Home-Landing/cafe1.jpg"
import cafe2 from "../../assets/imagenes/Home-Landing/cafe2.jpg"
import cafe3 from "../../assets/imagenes/Home-Landing/cafe3.jpg"

import styles from "./Landing.module.css"
import { Link } from "react-router-dom";




const Landing = () => {


return (
        <section className={styles.section_hero}>
        {/* <!-- 1.  Now we need to make our hero section display grid and need to center the content in the page.
      
             2. To acheive that we need to create a div container inside of our section that contains all the text and img --> */}
  
        <div className={styles.hero}>
          <div className={styles.hero_text_box}>
            <h1 className={styles.heading_primary}>
              Tu café para todos los días, CoffeShop
            </h1>
            <p className={styles.hero_description}>
             
              Ahora Lo podés tener en tu casa. Disfrútalo!
              
             
            </p>
            <Link to="#" 
              >Comprar
            </Link>
            <Link to="#" 
              >Más Sobre Nosotros &darr;
            </Link>
          </div>
          <div className={styles.hero_img_box}>
          <div className={styles.image_container}>
            <img
              src={cafe1}
              alt="coffe1"
              className="hero-img"
            />
            <img
              src={cafe3}
              alt="coffe3"
              className="hero-img"
            /><img
            src={cafe2}
            alt="coffe2"
            className="hero-img"
          />
          <img src="https://img.freepik.com/fotos-premium/desayuno-mermelada-naranja-croissant-mantequilla-capuchino-cafeteria-al-aire-libre-manana-soleada_132278-3561.jpg"/>
          </div>
          </div>
          <div className={styles.delivered_meals}>
            <div className={styles.delivered_imgs}>
              <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-1.jpg" alt="Customer photo" />
              <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-2.jpg" alt="Customer photo" />
              <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-3.jpg" alt="Customer photo" />
              <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-4.jpg" alt="Customer photo" />
              <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-5.jpg" alt="Customer photo" />
              <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-6.jpg" alt="Customer photo" />
            </div>
            <p className={styles.delivered_text}>
              <span>250,000+</span> reseñas!
            </p>
          </div>
        </div>
      </section>
    )


}


export default Landing