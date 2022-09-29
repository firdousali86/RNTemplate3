// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './styles';

import {areEqual} from '../../util/commonUtils';

const EmptyM = React.memo(props => {
  return <View style={[styles.container]}></View>;
}, areEqual);

EmptyM.propTypes = {};

EmptyM.defaultProps = {};
export default EmptyM;
