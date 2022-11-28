import React from 'react'
import PropTypes from 'prop-types'


type Props = {
  logo: string  //Whatsapp-logo
  phone:string
  message:string,
  width:number, //80px
  height:number
}

const WhatsappButton = ({logo, phone,message, width, height}:Props ) => {
  const formattedMessage = message.replace(/ /g, "%20")

  return (
    <>
    <div className="fixed bottom-2 right-2 flex flexColunm">
      <a href={`https://wa.me/${phone}?text=${formattedMessage}`}
      target="_blank"
      rel="noreferrer noopener"
      >
        <img src={logo} width={width} height={height} alt= "logo de whatsapp"/>
      </a>
      </div>
    </>
  )
}

WhatsappButton.protoTypes ={
  logo:PropTypes.string.isRequired,
  phone:PropTypes.string.isRequired,
  message:PropTypes.string,
  width:PropTypes.number,
  height:PropTypes.number
}

WhatsappButton.defaultProps = {
  logo:"whatsapp-logo",
  phone:"3003407437",
  message:"Te estas comucanco con sony store",
  width:80, //80px
  height:80
}

WhatsappButton.schema ={
  title:"Whatsapp Button",
  type:"object",
  properties:{
    logo:{
      title:"Whatsapp logo",
      type:"string",
      widget:{
        "iu:widget":"image.uploader"
      },
      phone:{
        title:"telefono",
        description:"Por favor ingrese el numero de telefono",
        type:"string",
      },
      message:{
        title:"Mensaje",
        description:"Por favor ingrese el un mensaje",
        type:"string",
        widget:{
          "ui:widget":"textarea"
        }
      },
      width:{
        title:"acho img",
        description:"Por favor ingrese ancho de la img",
        type:"nuber",
      },
      height:{
        title:"altura img",
        description:"Por favor ingrese altura de la img",
        type:"number",
      },
    }
  }
}

export default WhatsappButton
