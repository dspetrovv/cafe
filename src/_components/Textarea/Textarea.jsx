import withInput from "@/_hocs/Input/withInput";

const Textarea = (props) => withInput({ Component: 'textarea', ...props });

export default Textarea;