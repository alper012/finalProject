import React, {
  forwardRef,
  useEffect,
  useState,
  useImperativeHandle,
} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Components from '../../../components';
import {showMessage, hideMessage} from 'react-native-flash-message';
import NativeModal2 from 'react-native-modal';
import Maps from 'react-native-maps';

const {width} = Dimensions.get('window');
const LocationGetter = forwardRef((props: any, ref: any) => {
  const [latitude, setLatitude] = useState(
    props?.defaultLocation?.latitude || 0,
  );
  const [longitude, setLongitude] = useState(
    props?.defaultLocation?.longitude || 0,
  );

  const [isVisible, setIsVisible] = useState(false);
  const styles = StyleSheet.create<any>({
    modal: {
      container: {
        justifyContent: 'flex-end',
        margin: 0,
        height: 500,
        borderWidth: 1,
        borderRadius: 30,
      },
    },
  });

  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      props?.onLocationChange({latitude, longitude});
    }
  }, [latitude, longitude]);

  return (
    <Components.Libs.Section.Base
      style={{
        container: {
          width: width - 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          borderWidth: 3,
          borderRadius: 10,
          borderColor: 'red',
        },
      }}>
      <Components.Libs.Button.Base
        onPress={() => {
          setIsVisible(true);
        }}>
        <Components.Libs.Typography.Base
          style={{
            container: {
              width: width - 40,
              textAlign: 'center',
              color: 'white',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            },
            text: {
              fontSize: 20,
              color: 'red',
              fontWeight: 'bold',
            },
          }}>
          {latitude === 0 && longitude === 0
            ? 'Set Location'
            : `Location: ${latitude}, ${longitude}`}
        </Components.Libs.Typography.Base>
      </Components.Libs.Button.Base>

      <NativeModal2
        isVisible={isVisible}
        hasBackdrop={true}
        // backdropOpacity={backdropOpacity}
        // backdropColor={backdropColor}
        onBackdropPress={() => {
          setIsVisible(false);
        }}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={0}
        animationInTiming={1000}
        animationOutTiming={0}
        style={styles?.overlay}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        // coverScreen={false}
        deviceHeight={Dimensions.get('screen').height + 80}
        statusBarTranslucent>
        <Components.Libs.Section.Base style={styles.modal}>
          <Maps
            onPress={e => {
              setLatitude(e.nativeEvent.coordinate.latitude?.toFixed(4));
              setLongitude(e.nativeEvent.coordinate.longitude?.toFixed(4));
              setIsVisible(false);
            }}
            style={{flex: 1}}
            zoomEnabled={true}
            showsUserLocation={true}
            followsUserLocation={true}
          />
        </Components.Libs.Section.Base>
      </NativeModal2>
    </Components.Libs.Section.Base>
  );
});

export default React.memo(LocationGetter);
