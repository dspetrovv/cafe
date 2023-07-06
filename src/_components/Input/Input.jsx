import withInput from "@/_hocs/Input/withInput";

const Input = (props) => withInput({ Component: 'input', ...props, type: 'text'});

export default Input;