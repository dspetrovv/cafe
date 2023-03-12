import InputHoc from "./InputHoc";

const Input = (props) => InputHoc({ Component: 'input', ...props, type: 'text'});

export default Input;