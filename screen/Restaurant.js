import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated
} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from '../constants';

const Restaurant = (route) => {
  // state
  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    let {item, currentLocation} = route.params;
    setRestaurant(item);
    setCurrentLocation(currentLocation);
  });

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}><Image source={icons.back} resizeMode='contain' style={{width: 30, height: 30}} /></TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={style.container}>
      <Text>{renderHeader}</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});

export default Restaurant;
