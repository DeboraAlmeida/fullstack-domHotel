import Button from 'components/atoms/Button'
import ImageDefault from 'components/atoms/ImageDefault'
import { SpanText } from 'components/atoms/MiniTitle/styles'
import React, { useRef, useState } from 'react'
import imgBanner from './images/imgBanner.webp'
import * as S from './styles'

const Banner = (): JSX.Element => {
  const [copied, setCopied] = useState<boolean>(false);
  const codeRef = useRef<HTMLSpanElement>(null);

  const copyCode = (): void => {
    const code = codeRef.current?.textContent || '';
    navigator.clipboard.writeText(code);

    setCopied(true);
    alert('Código copiado');
  };

  return (
    <S.BoxBanner>
      <ImageDefault src={imgBanner}></ImageDefault>
      <S.boxSpan>
        <SpanText ref={codeRef}>domhotel10%</SpanText>
      </S.boxSpan>
      <S.btnCoupon>
        <Button disabled={copied} action={copyCode}>
          Copie o código
        </Button>
      </S.btnCoupon>
    </S.BoxBanner>
  );
};

export default Banner;
