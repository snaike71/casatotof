import Image from "next/image"
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import image1 from "../pages/images/image1.jpg"
import image2 from "../pages/images/image2.jpg"
import image3 from "../pages/images/image3.jpg"
import image4 from "../pages/images/image4.jpg"
import image5 from "../pages/images/image5.jpg"
import totof from "../pages/images/Totof1.png"
import background_section_1 from "../pages/images/section_1.png"
import { GetStaticProps } from "next";
const inter = Inter({ subsets: ['latin'] })
export default function HomePage(){
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dgrekt4cp'
        }
      });
    
      // cld.image returns a CloudinaryImage with the configuration set.
      const logo = cld.image('logoCasaTotof');
    const Horloge = ()=>{
        window.scrollBy({
            top      : window.innerHeight,
            behavior : "smooth",
        })
    }
    return(
        <section style={{height:"100vh" ,display:'grid',gridTemplateRows:"100px 1fr"}}>
      <header className={`${styles.header}`}>
          <div>
            <a  href="#Accueil" className={`${styles.title}`}> <AdvancedImage cldImg={logo} style={{width:"100px"}} />
            </a>
          </div>
          <div className={`${styles.menus_button}`}>
            <nav >
              <ul className={`${styles.menus}`}>
                <li className={`${styles.menu}`}><a  href="#Accueil">Accueil</a></li>
                <li className={`${styles.menu}`}><a onClick={Horloge} href="#Horloge">Horloge</a></li>
                <li className={`${styles.menu}`}><a href="#Apropos">À propos</a></li>
                <li className={`${styles.menu}`}><a href="#Contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div></div>
       </header>
      <main className={`${styles.main} ${inter.className}`}>

        <div className={`${styles.presentation}`}>
          <div className={`${styles.presentation_title} `}>La Casa : 3d printing for decoration</div>


          <div className={`${styles.presentation_image}`}>
            <Image src={image1}  alt='1' style={{width:"auto" ,height:"auto"}}/>
          </div>
        </div>
        <div style={{ overflow: "hidden", minWidth:"500px",maxWidth:"500px"}}>
          <figure>
            <Image src={image1}  alt='1' style={{   width:"20%" ,height:"100%"  }}/>
            <Image src={image2} alt='2'  style={{   width:"20%" ,height:"100%"  }}/>
            <Image src={image3} alt='3'  style={{   width:"20%" ,height:"100%"  }}/>
            <Image src={image4} alt='4'  style={{   width:"20%" ,height:"100%"  }}/>
            <Image src={image1} alt='5'  style={{   width:"20%" ,height:"100%"  }}/>
          </figure>
        </div>


      </main>
      </section>


    )
  
}  
