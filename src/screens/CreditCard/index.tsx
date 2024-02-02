import React from 'react';
import { View } from 'react-native';

import { PaymentIcon } from 'react-native-payment-icons';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../styles/theme';
import { Container, Content, ContentAccount } from './styles';
import { useAuth } from '../../contexts/Auth';
import Text from '../../components/Text';

export default function CreditCard() {
  const { authData } = useAuth();
  return (
    <Container>
      <Content>
        <ContentAccount>
          <Text
            style={{
              color: theme.BACKGROUNDDEFAULT,
              fontSize: 15,
              marginTop: 15,
            }}
          >
            CREDIT CARD ACCOUNT
          </Text>

          <Text
            style={{
              color: theme.RED,
              fontSize: 15,
              marginTop: 10,
            }}
          >
            Credit limit
          </Text>

          <Text
            style={{
              color: theme.WHITE,
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            $ {authData?.creditLimit}
          </Text>

          <Text
            style={{
              color: theme.WHITE,
              fontSize: 15,
              marginTop: 15,
            }}
          >
            {authData?.name.toUpperCase()}
          </Text>
          <View
            style={{
              alignSelf: 'flex-end',
              marginRight: 25,
              marginBottom: 10,
            }}
          >
            <PaymentIcon style={{ margin: 10 }} type="master" width={50} />
          </View>
        </ContentAccount>
      </Content>
    </Container>
  );
}
