import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, Keyboard, Platform} from 'react-native';
import Components from '../../components';
import {useNavigation} from '@react-navigation/native';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {useNavigationState} from '@react-navigation/native';

import MapView, {Marker} from 'react-native-maps';

const Screen = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({});
  const naviState = useNavigationState(state => state).routes.filter(
    obj => obj?.name === 'ShowLocation',
  )[0]?.params;

  console.log(
    'naviState',
    naviState?.item?.location?.latitude,
    naviState?.item?.location?.longitude,
  );
  const styles = StyleSheet.create<any>({
    layout: {
      container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    },
    body: {
      container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '2%',
      },
    },
  });

  return (
    <Components.Layouts
      withHeader={true}
      header={{
        title: 'Map Screen',
        subtitle: 'Restaurants Map Screen',
        leftItem: (
          <Components.Libs.Button.Base onPress={() => navigation.goBack()}>
            <Components.Libs.Image.Base
              source={require('../../assets/images/left.png')}
              style={{
                container: {
                  width: 30,
                  height: 100,
                  justifyContent: 'center',
                },
                image: {
                  width: 30,
                  height: 60,
                },
              }}
              resizeMode="contain"
              tintColor={'pink'}
            />
          </Components.Libs.Button.Base>
        ),
      }}
      style={styles.layout}>
      {naviState?.item?.location?.latitude &&
        naviState?.item?.location?.longitude && (
          <MapView
            // customMapStyle={MapStyleConfig}
            style={{
              flex: 1,
              zIndex: -2,
              width: '100%',
              minHeight: 'auto',
            }}
            initialRegion={{
              latitude:
                parseFloat(naviState?.item?.location?.latitude) || 38.54,
              longitude:
                parseFloat(naviState?.item?.location?.longitude) || 27.03,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {/* {"latitude": "-8.3193", "longitude": "30.0790"} */}
            {/* <Marker
            coordinate={{
              latitude: naviState?.item?.location?.latitude || 38.54,
              longitude: naviState?.item?.location?.longitude || 27.03,
            }}>
            <Constants.Svgs.LocationMarker
              height={Helpers.Size.wp(9)}
              width={Helpers.Size.wp(9)}
            />
          </Marker> */}
          </MapView>
        )}
    </Components.Layouts>
  );
};

export default React.memo(Screen);
