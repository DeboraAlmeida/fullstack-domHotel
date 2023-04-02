import Button from 'components/atoms/Button'
import { SpanText } from 'components/atoms/MiniTitle/styles'
import SubTitle from 'components/atoms/SubTitle'
import React, { useRef, useState } from 'react'
import * as S from './styles'
 
const Banner = () => {
  const [copied, setCopied] = useState(false)

  const codeRef = useRef(null)

  function copyCode() {
    const code = codeRef.current.textContent
    navigator.clipboard.writeText(code)

    return (
      alert('Código copiado'),
      setCopied(true)
    )
  }
  
  return (
    <S.BoxBanner> 
      <SubTitle>Comece sua viagem com o pé direito! Ganhe 10% off na sua primeira reserva!</SubTitle> 
      <S.boxSpan>
        <SpanText ref={codeRef}>domhotel10%</SpanText>
      </S.boxSpan>
      <S.btnCoupon>
        <Button disabled={copied} action={copyCode}>Copie o código</Button> 
      </S.btnCoupon>
      
    </S.BoxBanner>
  )
}

export default Banner