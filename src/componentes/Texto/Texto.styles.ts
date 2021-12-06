
import styled from 'styled-components'


export type Props = Text & {
    cor?: string
    tamanho?: number
    marginTop?: number
    children?: string | React.ReactNode
    
    
}

export const TextoStyled = styled.text<Props>`
    font-size: ${(props) => props.tamanho ?? 10}px;
    margin-top: ${(props) => props.marginTop ?? 0}px;
`