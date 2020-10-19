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
    primary: '#fff',
    secundary: '#000',
  },
};
export const dark = {
  title: 'dark',
  colors: {
    primary: '#000',
    secundary: '#fff',
  },
};
export const sapphire = {
  title: 'sapphire',
  colors: {
    primary: '#00a77e',
    secundary: '#fff',
  },
};
export const blueLight = {
  title: 'blueLight',
  colors: {
    primary: '#5cdbae',
    secundary: '#0a1260',
  },
};
export const grey = {
  title: 'grey',
  colors: {
    primary: '#e3e3e3',
    secundary: '#f00',
  },
};
export const yellow = {
  title: 'yellow',
  colors: {
    primary: '#dddd23',
    secundary: '#000',
  },
};
export const BlueStrong = {
  title: 'BlueStrong',
  colors: {
    primary: '#164145',
    secundary: '#dddd23',
  },
};