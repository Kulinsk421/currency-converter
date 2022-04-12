export const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#ababab",
    whiteSpace: "nowrap",
    color: "#ababab",
    borderColor: state.isFocused ? "#000000" : "#ababab",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "#000000" : "#ababab",
    },
  }),
  option: (base, state) => ({
    ...base,
    background: state.isFocused ? "#000000" : "#ababab",
    color: state.isFocused ? "#FFFFFF" : "#000000",
    overflow: null,
    fontSize: "6rem",
    "&:hover": {
      color: "#FFFFFF",
      background: "#000000",
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#000000",
    "&:hover": {
      color: "#000000",
      cursor: "pointer",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "#000000",
    fontSize: "10rem",
  }),

  input: (base) => ({
    ...base,
    color: "#000000",
    width: 250,
    display: "inline-block",
    fontSize: "10rem",
  }),
  noOptionsMessage: (base) => ({
    ...base,
    color: "#000000",
    fontSize: "3rem",
    background: "#ababab",
  }),
};
