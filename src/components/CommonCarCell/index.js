import {} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CommonCarCell = props => {
  const {item, onCarCellPress, cellMode} = props;

  let containerStyle;

  const renderFavoriteButton = () => {
    if (cellMode === 'favorite') {
      return (
        <TouchableOpacity>
          <Text>Favorite</Text>
        </TouchableOpacity>
      );
    }
  };

  if (cellMode === 'home') {
    containerStyle = styles.homeContainerStyle;
  } else {
    containerStyle = styles.favoriteContainerStyle;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.textContainer}>
        <Text>{item.brand}</Text>
        <Text>{item.name}</Text>
        <Text>{item.model}</Text>
      </View>
      {renderFavoriteButton()}
      <TouchableOpacity
        onPress={() => {
          if (onCarCellPress) {
            onCarCellPress();
          }
        }}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

CommonCarCell.propTypes = {
  cellMode: PropTypes.oneOf(['home', 'favorite']),
  item: PropTypes.object,
  index: PropTypes.number,
  onCarCellPress: PropTypes.func,
};

CommonCarCell.defaultProps = {
  cellMode: 'home',
  item: undefined,
  index: -1,
  onCarCellPress: () => {},
};

export default CommonCarCell;
