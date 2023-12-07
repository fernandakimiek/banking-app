import {ButtonProps} from 'react-native/types';

interface BtnProps extends ButtonProps {}

const Button = ({...props}: BtnProps) => {
  return <Button {...props} />;
};

export default Button;
