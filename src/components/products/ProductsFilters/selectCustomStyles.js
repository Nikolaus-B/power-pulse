export const customStyles = {
        control: provided => ({
      ...provided,
      
    cursor: 'pointer',
      backgroundColor: '#1c1c1c', // Стилизация фона окна
      appearance: 'none', // Removing default appearance
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      
    }),
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,

      backgroundColor: isSelected
        ? 'transparent'
        : isFocused
        ? 'transparent'
        : '#1c1c1c', // Стилизация фона активной опции и ховера
      color: isSelected ? 'var(--orange-color)' : 'var(--white-color)', // Стилизация цвета текста активной опции в списке
      padding: '14px',
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: '#1c1c1c', //  фон для списка
    }),
    singleValue: provided => ({
      ...provided,
      color: 'var(--white-color)', // Цвет текста активного селектора в окне
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none', // Цвет разделителя
    }),
    dropdownIndicator: provided => ({
      ...provided,
      color: 'var(--white-color)',
    }),
    container: provided => ({
      ...provided,
      borderRadius: '12px',
      outline: 'none',
    }),
    menuList: base => ({
      ...base,
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(239, 237, 232, 0.1)',
        borderRadius: '12px',
      },
    }),
    '&:focus': {
        border: '1px solid var(--orange-color)',
      },
  };
  
  export const firstSelectStyles = {
    ...customStyles,
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'var(--primary-black-color)',
      border: '1px solid var(--text-info-color)',
      '&:hover': {
        border: "1px solid var(--orange-color)",
      },
  
      '@media screen and (min-width: 375px)': {
        width: '146px',
        height: '46px',
        fontSize: '14px',
        lineHeight: '1.28',
      },
  
      '@media screen and (min-width: 768px)': {
        width: '192px',
        height: '52px',
        fontSize: '16px',
        lineHeight: '1.5',
      },
    }),
  };
  
  export const secondSelectStyles = {
    ...customStyles,
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'var(--primary-black-color)',
        border: '1px solid var(--text-info-color)',
        '&:hover': {
            border: "1px solid var(--orange-color)",
          },

  
      '@media screen and (min-width: 375px)': {
        width: '173px',
        height: '46px',
        fontSize: '14px',
        lineHeight: '1.28',
      },
  
      '@media screen and (min-width: 768px)': {
        width: '204px',
        height: '52px',
        fontSize: '16px',
        lineHeight: '1.5',
      },
    }),
  };