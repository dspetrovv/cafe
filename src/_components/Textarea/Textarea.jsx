import withInput from '@/_hocs/Input/withInput';

const Textarea = (props) => {
  return withInput('textarea')({ type: 'text', ...props });
};

export default Textarea;
