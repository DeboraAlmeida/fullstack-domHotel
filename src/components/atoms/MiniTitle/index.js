import * as S from "./styles.js";

const MiniTitle = ({ span, text }) => {
  return (
    <S.DivWrapper>
      <S.H2Title><S.SpanText>{span}</S.SpanText>{text}</S.H2Title>
    </S.DivWrapper>
  );
};

export default MiniTitle;