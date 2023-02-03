import '../../styles/Banner.css';
import Logo from '../../logo.jpg'
import Mars from '../../mars.png'
import React, { useState, useEffect } from "react"


function Banner() {
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")
    const [fullText1, setFullText1] = useState(
        `Hello !`
    )
    const [fullText2, setFullText2] = useState(
        `My name is Phil Zieger`
    )
    const [fullText3, setFullText3] = useState(
        `I'm a full-stack developer`
    )
    const [index, setIndex] = useState(0)
    const [index2, setIndex2] = useState(0)
    const [index3, setIndex3] = useState(0)

    useEffect(() => {
        if (index < fullText1.length) {
          setTimeout(() => {
            setText1(text1 + fullText1[index])
            setIndex(index + 1)
          }, 50)
        }
        if (index >= fullText1.length) {
            if (index2 < (fullText2.length)) {
                setTimeout(() => {
                setText2(text2 + fullText2[index2])
                setIndex2(index2 + 1)
                }, 50)
            }
        }
        if (index2 >= fullText2.length) {
            if (index3 < (fullText3.length)) {
                setTimeout(() => {
                setText3(text3 + fullText3[index3])
                setIndex3(index3 + 1)
                }, 50)
            }
        }
      }, [index, index2, index3])

  return (
    <div className='portfolio-home-banner'>
        <div className='portfolio-home-banner-content'>
            <div className='portfolio-home-banner-text'>
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
            </div>

            <div className='portfolio-home-banner-img'>
                <img src={ Logo } alt="Logo" width="400" height="400" />
            </div>
        </div>
        <div className="etoile-1"></div>
        <div className="etoile-2"></div>
        <div className="etoile-3"></div>
        <div className="etoile-4"></div>
        <div className="etoile-5"></div>
        <div className="etoile-6"></div>
        <img src={ Mars } alt="Planette Mars" className='mars' />
    </div>
  );
}

export default Banner;
