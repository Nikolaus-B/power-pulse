export const customStyles = {
        control: provided => ({
      ...provided,
      
    cursor: 'pointer',
      backgroundColor: '#1c1c1c', 
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      
    }),
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,

      backgroundColor: isSelected
        ? 'transparent'
        : isFocused
        ? 'transparent'
        : '#1c1c1c', 
      color: isSelected ? 'var(--orange-color)' : 'var(--white-color)',
      padding: '14px',
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: '#1c1c1c', 
    }),
    singleValue: provided => ({
      ...provided,
      color: 'var(--white-color)',
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none', 
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
    control: (defaultStyles, {isFocused}) => ({
      ...defaultStyles,
      backgroundColor: 'var(--primary-black-color)',
      border: '1px solid var(--text-info-color)',
      borderColor: isFocused ? 'var(--orange-color)' : 'var(--text-info-color)',
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
    control: (defaultStyles, {isFocused}) => ({
      ...defaultStyles,
      backgroundColor: 'var(--primary-black-color)',
        border: '1px solid var(--text-info-color)',
        borderColor: isFocused ? 'var(--orange-color)' : 'var(--text-info-color)',
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