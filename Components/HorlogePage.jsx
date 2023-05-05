import Image from "next/image"
import background_section_1 from "../pages/images/section_1.png"

import HorlogeStyle from '@/styles/HorlogeStyle.module.css'
import { useState } from "react"
export default function HorlogePage(images){

  

  


    return(
       
        <section  className={`${HorlogeStyle.sectionHorloge}`}>
            <div  className={`${HorlogeStyle.horloge_titre_container}`}><h2 className={`${HorlogeStyle.horloge_titre}`}>Horloges</h2></div>
            <div className={`${HorlogeStyle.horloge_presentation_container}`}>
                <div className={`${HorlogeStyle.horloge_presentation}`}>
                   <div style={{display:"flex", flexDirection:"column", justifyContent:'center', alignItems:"center", fontSize:"2.8rem"} }>
                   <Image width={images.images[0].width} height={images.images[0].height} src={images.images[0].image} alt={images.images[0].title}/>
                   {images.images[0].title}
                   </div>
                   <div style={{display:"flex", flexDirection:"column", justifyContent:'center', alignItems:"center",fontSize:"2.8rem"} }>
                   <Image width={images.images[0].width} height={images.images[0].height} src={images.images[0].image} alt={images.images[0].title}/>
                   {images.images[0].title}
                   </div>
                   <div style={{display:"flex", flexDirection:"column", justifyContent:'center', alignItems:"center",fontSize:"2.8rem"} }>
                   <Image width={images.images[0].width} height={images.images[0].height} src={images.images[0].image} alt={images.images[0].title}/>
                   {images.images[0].title}
                   </div>

                </div>
            </div>


      </section>
     
    )
}

