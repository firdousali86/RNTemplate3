// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

class Home extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    isLoading: false,
  };

  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'red'}}>Home Screen</Text>
        <Text style={{color: 'red'}}>{this.props.cake.numberOfCakes}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cake: state.cake,
});

const actions = {
  // request,
};

export default connect(mapStateToProps, actions)(Home);
