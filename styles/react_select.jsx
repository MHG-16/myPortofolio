import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();
const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'black' : '#EDEDED',
      padding: 10,
      '&:hover': {
        color: "black"
      }
      
    }),
    control:(styles) => ({
        ...styles,
        background: '#171717',
        color: 'white',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.9 : 1;
      const transition = 'opacity 300ms';
      const color = "white";
  
      return { ...provided, opacity, transition, color };
    }
}

const customtheme = (theme) => ({
    ...theme,
    borderRadius:'5%',
      colors: {
        ...theme.colors,
        primary75: 'white',
        primary25: '#DA0037',
        primary: '#444444',
        neutral0: '#171717',
        neutral30: "#1597BB",
        neutral20: '#EEEEEE',
        neutral80: 'transparent',
        neutral60: "#DA0037"
      },
})

export {customStyles, customtheme, animatedComponents }