import styled from 'styled-components';

export const BackGroundPage = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextColor = styled.h1`
  font-size: 80px;
  color: ${props => props.theme.colors.secundary};
`;

export const light = {
  title: 'light',
  colors: {
    primary: '#ffffff',
    secundary: '#000000',
  },
};
export const dark = {
  title: 'dark',
  colors: {
    primary: '#000000',
    secundary: '#ffffff',
  },
};
export const sapphire = {
  title: 'sapphire',
  colors: {
    primary: '#00a88e',
    secundary: '#ffffff',
  },
};
export const blueLight = {
  title: 'blueLight',
  colors: {
    primary: '#7fcbae',
    secundary: '#1B1464',
  },
};
export const grey = {
  title: 'grey',
  colors: {
    primary: '#3b3a3a',
    secundary: '#ffffff',
  },
};
export const yellow = {
  title: 'yellow',
  colors: {
    primary: '#d7df23',
    secundary: '#000000',
  },
};
export const BlueStrong = {
  title: 'BlueStrong',
  colors: {
    primary: '#1B1464',
    secundary: '#d7df23',
  },
};