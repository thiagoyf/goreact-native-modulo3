import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '~/store/actions/login';

import {
  Container, Input, Button, ButtonText, Error,
} from './styles';

class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  };

  state = {
    username: '',
  };

  handleSumit = async () => {
    const { username } = this.state;
    const { loginRequest } = this.props;

    loginRequest(username);
  };

  render() {
    const { username } = this.state;
    const { error, loading } = this.props;

    return (
      <Container>
        {error && <Error>Usuário inexistente</Error>}
        <Input
          value={username}
          onChangeText={text => this.setState({ username: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
        />
        <Button onPress={this.handleSumit}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Entrar</ButtonText>
          )}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
