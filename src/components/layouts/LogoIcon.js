import React from 'react'
import logoBase from '../../assets/img/logo-base.png'

const LogoIcon = ({width, height}) => {
  return (
    <div >
        <img 
          style = {{width, height, objectFit: 'contain'}}
          src={logoBase}
          srcSet={`${logoBase} 2x,
              ${logoBase}3x`}
          alt='LogoIcon'/>
    </div>
  )
}

export default LogoIcon;
