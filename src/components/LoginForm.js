import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Text>Email</Text>
        </CardSection>

        <CardSection>
          <Text>Password</Text>
        </CardSection>

        <CardSection>
          <Button text="Log In" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
