import withInput from "@/_hocs/Input/withInput";

const Input = (props) => {
  return withInput('input')({ type: 'text', ...props });
};

export default Input;