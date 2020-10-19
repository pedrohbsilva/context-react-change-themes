import React, { useState, useEffect } from 'react';
import { BackGroundPage, TextColor } from './styles/styles';
import './styles/global.css';
import { useSwitchTheme } from './hooks/SwitchTheme';

interface ColorProps {
  id: number;
  value: string;
  name: string;
}

function App() {

  const { toggleTheme } = useSwitchTheme();
  const [selectValue, setSelectValue] = useState('');

  const list = [
    { id: 1, value: 'light', name: 'Tema Claro' },
    { id: 2, value: 'dark', name: 'Tema Dark' },
    { id: 3, value: 'blueLight', name: 'Tema Azul Claro' },
    { id: 4, value: 'grey', name: 'Tema Cinza' },
    { id: 5, value: 'sapphire', name: 'Tema Azul Sáfira' },
    { id: 6, value: 'yellow', name: 'Tema Amarelo' },
    { id: 7, value: 'BlueStrong', name: 'Tema Global' },
  ];

  useEffect(() => {
    const load = async () => {
      const existingPreference = localStorage.getItem('title');
      if (!existingPreference) {
        localStorage.setItem('title', 'BlueStrong');
        toggleTheme();
      }
      if (existingPreference && selectValue.length === 0) {
        localStorage.setItem('title', existingPreference);
        toggleTheme();
      }
      if (selectValue.length > 0 && existingPreference !== selectValue) {
        localStorage.setItem('title', selectValue);
        toggleTheme();
      }
    };
    load();
    // eslint-disable-next-line
  }, [selectValue]);

  return (
    <BackGroundPage>
      <TextColor>Hello World</TextColor>
      <select
        value={selectValue}
        onChange={e => setSelectValue(e.target.value)}
      >
        <option hidden>Troque de tema</option>
        {list.map((item: ColorProps) => (
          <option key={item.id} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </BackGroundPage>
  );
}

export default App;