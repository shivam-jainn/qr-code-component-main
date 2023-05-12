import React from 'react'
import './card.css'

const Card = () => {
  return (
    <div className='card'>
        <div className="imagecont">
        <img
         src="../public/image-qr-code.png"
          style={{
            maxWidth: '250px',
            width:'100%',
            borderRadius : '5px',
            
          }}
        />
        </div>

        <div className="textcont">
          <h3>Improve your front-end skills by building project</h3>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to next level</p>
        </div>


    </div>
  )
}

export default Card;