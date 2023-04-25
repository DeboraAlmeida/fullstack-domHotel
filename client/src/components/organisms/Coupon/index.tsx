import Button from 'components/atoms/Button'
import GenericInput from 'components/atoms/GenericInput'
import SubTitle from 'components/atoms/SubTitle'
import React, { useState } from 'react'
import getActiveReservesbyId from 'services/getActiveReservesbyId'
import * as S from './styles'

interface Props {
  totalValue: ''
}

const Coupon = ({ totalValue }: Props) => {
  const [discountedPrice, setDiscountedPrice] = useState(0)
  const [couponCode, setCouponCode] = useState('')
  const [codeUsed, setCodeUsed] = useState(false)

  const handleCouponCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(event.target.value)
  }

  const ActiveReservesById = async () => {
    const result = await getActiveReservesbyId()
    return result
  }

  const handleCouponApply = async (): Promise<void> => {
    const logado = sessionStorage.getItem('isLogged')
    if (logado) {
      const reserveById = await ActiveReservesById()
      if (reserveById) {
        alert('Cupom válido apenas para primeira reserva')
      } else {
        if (couponCode === 'domhotel10%') {
          const price: number = parseFloat(totalValue.replace('R$', ''))
          const discount = Math.round(price * 0.1)
          const newValue = price - discount
          setDiscountedPrice(newValue)
          localStorage.setItem('newValue', JSON.stringify(newValue))
        } else {
          alert('Código Inválido')
        }
      }
      setCouponCode('')
      setCodeUsed(true)
    }

  }

  return (
    <S.boxCoupon>
      <GenericInput type={'text'} id={'couponCode'} onChange={handleCouponCodeChange} value={couponCode} placeholder={'Digite seu código'} />
      <S.boxButton>
        <Button disabled={codeUsed} action={handleCouponApply}>Adicionar</Button>
      </S.boxButton>
      {discountedPrice > 0 && (
        <S.boxPrice>
          <SubTitle>{`Total: R$ ${(discountedPrice).toFixed(2).toString().replace('.', ',')}`}</SubTitle>
        </S.boxPrice>
      )}
    </S.boxCoupon>
  )

}

export default Coupon
