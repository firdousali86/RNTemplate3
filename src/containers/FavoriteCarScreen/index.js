import {} from 'react';
import {View, FlatList} from 'react-native';
import {CommonCarCell} from '../../components';

const FavoriteCarScreen = props => {
  const renderCarCell = ({item, index}) => {
    return <CommonCarCell cellMode={'favorite'} item={item} index={index} />;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={props?.route?.params?.carData}
        renderItem={renderCarCell}
      />
    </View>
  );
};

export default FavoriteCarScreen;
