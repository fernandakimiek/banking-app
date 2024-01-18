import { TextInputProps } from 'react-native/types';
import { ContainerInput } from './styles';

interface InputProps extends TextInputProps {}

const Input = ({ ...props }: InputProps) => {
  return <ContainerInput {...props} />;
};

export default Input;
