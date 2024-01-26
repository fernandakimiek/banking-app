import React from 'react';
import { Modal as ModalReact, ModalProps as ModalPropsReact, Alert, Pressable } from 'react-native';
import { ContainerModal, IconCloseModal } from './styles';
import Text from '../Text';
import { textTypes } from '../Text/textTypes';
import Button from '../Button';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onCloseModal();
      }}
      {...props}
    >
      <ContainerModal>
        <Text type={textTypes.TITLE}>{title}</Text>
        <Text>{text}</Text>
        <Button style={{ marginTop: 20 }} title="Confirmar" onPress={onCloseModal} />
        <IconCloseModal name="close" size={24} color="black" onPress={onCloseModal} />
      </ContainerModal>
    </ModalReact>
  );
};
export default Modal;
