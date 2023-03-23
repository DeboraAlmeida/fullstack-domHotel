import Button from 'components/atoms/Button'
import GenericInput from 'components/atoms/GenericInput'
import SubTitle from 'components/atoms/SubTitle'
import React, { useEffect, useState } from 'react'
import getActiveReservesbyId from 'services/getActiveReservesbyId'
import * as S from './styles'

const Coupon = ({ totalValue }) => {
  const [reservesById, setReservesById] = useState(0)
  const [discountedPrice, setDiscountedPrice] = useState(0)
  const [couponCode, setCouponCode] = useState('')
  const [codeUsed, setCodeUsed] = useState(false)

  const handleCouponCodeChange = (event) => {
    setCouponCode(event.target.value)
  }


  useEffect(() => {
    const ActiveReservesById = async () => {
      const result = await getActiveReservesbyId()
      setReservesById(result)
    }

    ActiveReservesById()
  }, [])

  const handleCouponApply = () => {
    if (reservesById) {
      if (couponCode === 'domhotel10%') {
        const price = parseInt(totalValue, 10)
        const discount = Math.round(price * 0.1)
        setDiscountedPrice(price - discount)
        localStorage.setItem('discountedValue', JSON.stringify(price - discount))
      } else {
        alert('Código Inválido')
      }
    } 
    setCouponCode('')
    setCodeUsed(true)
  }

  return (
    <S.boxCoupon>
      <GenericInput type={'text'} id={'couponCode'} onChange={handleCouponCodeChange} value={couponCode} placeholder={'Digite seu código'} />
      <S.boxButton>
      <Button disabled={codeUsed} action={handleCouponApply}>Adicionar</Button>
      </S.boxButton>
      {discountedPrice > 0 && (
        <S.boxPrice>
          <h2>{reservesById}</h2>
          <SubTitle>{`Total: R$ ${(discountedPrice).toFixed(2).toString().replace('.', ',')}`}</SubTitle>
        </S.boxPrice>
      )}
    </S.boxCoupon>
  )
}

export default Coupon
