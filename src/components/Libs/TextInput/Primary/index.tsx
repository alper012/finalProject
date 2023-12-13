import React, {forwardRef} from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import Components from '../../../index';

const {width} = Dimensions.get('window');
const TextInputTypeOne = forwardRef((props: any, ref: any) => {
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
          backgroundColor: 'white',
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

      <Components.Libs.TextInput.Base
        placeholder={props?.placeholder}
        placeholderTextColor={'pink'}
        {...props}
        style={{
          container: {
            ...styles.input.textinput.container,
            ...props?.style?.container,
          },
          textinput: {
            ...styles.input.textinput.textinput,
            ...props?.style?.textinput,
          },
        }}
      />

      {props?.helperText && (
        <Components.Libs.Typography.Base style={styles.input.helper}>
          {props?.helperText}
        </Components.Libs.Typography.Base>
      )}
    </Components.Libs.Section.Base>
  );
});

export default React.memo(TextInputTypeOne);
