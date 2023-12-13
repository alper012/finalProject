import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, Keyboard, Platform} from 'react-native';
import Components from '../../components';
import {useNavigation} from '@react-navigation/native';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {useNavigationState} from '@react-navigation/native';

const initial: any = {
  id: '',
  name: '',
  address: '',
  description: '',
  phone: '',
  location: {
    latitude: 0,
    longitude: 0,
  },

  tags: [],
  rate: 0,
};
const Screen = () => {
  const navigation = useNavigation();

  const naviState = useNavigationState(state => state).routes.filter(
    obj => obj?.name === 'Details',
  )[0]?.params;

  const [state, setState] = useState(
    naviState?.item?.id ? naviState?.item : initial,
  );
  const styles = StyleSheet.create<any>({
    layout: {
      container: {
        flex: 1,
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

  const submit = async () => {
    if (state?.name === '') {
      showMessage({
        message: 'Please enter the name',
        type: 'danger',
      });
      return;
    }

    if (state?.address === '') {
      showMessage({
        message: 'Please enter the address',
        type: 'danger',
      });
      return;
    }

    if (state?.location?.latitude == 0 || state?.location?.longitude == 0) {
      showMessage({
        message: 'Please set the location on the map.',
        type: 'danger',
      });
      return;
    }

    if (state?.id === '') {
      // create
    } else {
      // update
    }

    console.log('state', state);

    navigation.goBack();
    setState(initial);
  };

  return (
    <Components.Layouts
      withScroll
      withHeader={true}
      header={{
        title: 'Details Screen',
        subtitle: 'Restaurants Details Screen',
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
      <Components.Libs.Section.Base
        style={{
          container: {
            flex: 1,
            alignSelf: 'stretch',
            paddingHorizontal: '5%',
            paddingVertical: '5%',
          },
        }}>
        <Components.Libs.TextInput.Primary
          value={state?.name}
          onChangeText={(name: any) => setState({...state, name})}
          label="Name of the restaurant"
        />

        <Components.Libs.TextInput.Primary
          value={state?.address}
          onChangeText={(address: any) => setState({...state, address})}
          label="Address of the restaurant"
        />

        <Components.Libs.TextInput.Primary
          value={state?.phone}
          onChangeText={(phone: any) => setState({...state, phone})}
          label="Phone of the restaurant "
        />

        <Components.Libs.LocationGetter.Base
          defaultLocation={state?.location}
          onLocationChange={(location: any) => {
            setState({
              ...state,
              location: {
                latitude: location?.latitude,
                longitude: location?.longitude,
              },
            });
          }}
        />

        <Components.Libs.TextInput.Primary
          value={state?.description}
          onChangeText={(description: any) => setState({...state, description})}
          multiline={true}
          numberOfLines={5}
          style={{
            container: {
              height: 100,
            },
          }}
          label="Description"
        />

        <Components.Libs.TagInput.Base
          tags={state?.tags}
          onChangeTags={(tags: any) => setState({...state, tags})}
          label="Please add Tags for the restaurant"
        />

        <Components.Libs.Rater.Base
          defaultRating={state?.rate}
          onFinishRating={(rating: any) => setState({...state, rate: rating})}
          label="Please rate the restaurant"
        />

        <Components.Libs.Button.Base onPress={submit}>
          <Components.Libs.Typography.Base
            style={{
              container: {
                width: '80%',
                marginHorizontal: '10%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
                marginTop: 10,
                borderRadius: 10,
              },
              text: {
                fontSize: 20,
                color: 'white',
              },
            }}>
            {state?.id === '' ? 'Create' : 'Update'}
          </Components.Libs.Typography.Base>
        </Components.Libs.Button.Base>
      </Components.Libs.Section.Base>
    </Components.Layouts>
  );
};

export default React.memo(Screen);
