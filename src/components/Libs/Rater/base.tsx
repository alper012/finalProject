import React, {
  forwardRef,
  useEffect,
  useState,
  useImperativeHandle,
} from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import Components from '../../../components';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {Rating, AirbnbRating} from 'react-native-ratings';

const {width} = Dimensions.get('window');
const RaterBase = forwardRef((props: any, ref: any) => {
  const styles = StyleSheet.create<any>({
    input: {
      label: {
        container: {
          padding: 5,
          width: '100%',
        },
        text: {
          fontSize: 15,
          fontWeight: 'bold',
          color: 'red',
        },
      },
      helper: {
        container: {
          padding: 5,
          width: '100%',
        },
        text: {
          fontSize: 15,
          fontWeight: 'light',
          color: 'pink',
          textAlign: 'left ',
        },
      },
      textinput: {
        container: {
          width: '100%',
          height: 50,
          borderBottomWidth: 3,
          borderColor: 'pink',
          borderRadius: 5,
          paddingHorizontal: 10,
          elevation: 5,
          backgroundColor: 'white',
        },
        textinput: {
          fontSize: 16,
          color: 'red',
          marginRight: 60,
        },
      },
    },
  });

  return (
    <Components.Libs.Section.Base>
      {props?.label ? (
        <Components.Libs.Typography.Base style={styles.input.label}>
          {props?.label}
        </Components.Libs.Typography.Base>
      ) : (
        <Components.Libs.Section.Base style={{container: {height: 10}}} />
      )}

      <AirbnbRating
        onFinishRating={(rating: any) => {
          props?.onFinishRating && props?.onFinishRating(rating);
        }}
        count={5}
        reviews={['Terrible', 'Meh', 'Hmm...', 'Amazing', 'Jesus']}
        defaultRating={props?.defaultRating || 0}
        size={30}
        reviewColor="pink"
        selectedColor="red"
      />
    </Components.Libs.Section.Base>
  );
});

export default React.memo(RaterBase);
