// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {cakeActions} from '../../features/cake/cakeSlice';
import {icecreamActions} from '../../features/icecream/icecreamSlice';
import {store} from '../../store';

class Home extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    isLoading: false,
  };

  componentDidMount() {
    console.log('=============');
    console.log(this.props.cake);
    console.log('=============');
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'red'}}>Home Screen</Text>
        <Text style={{color: 'red'}}>{this.props.cake.numberOfCakes}</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            store.dispatch(cakeActions.ordered());
            store.dispatch(icecreamActions.ordered());

            this.props.navigation.navigate('Details');
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cake: state.cake,
});

const actions = {};

export default connect(mapStateToProps, actions)(Home);
