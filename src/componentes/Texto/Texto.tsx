import React from 'react'
import { TextoStyled, Props } from './Texto.styles'

function Texto(props: Props) {
    return <TextoStyled {...props} />
}

//export default React.memo(Texto)
export default Texto