import * as S from './styles.js';

const NavMenu = ({ setStage }) => {
  const changeStage = (step) => {
    setStage(step);
  };

  return (
    <S.Menu>
      <S.MenuItem onClick={() => changeStage('initial')}>Home</S.MenuItem> |
      <S.MenuItem onClick={() => changeStage('components')}>Components</S.MenuItem>
    </S.Menu>
  );
};

export default NavMenu;