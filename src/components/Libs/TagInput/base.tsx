import React, {forwardRef, useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import Components from '../../../components';
import {showMessage, hideMessage} from 'react-native-flash-message';

const {width} = Dimensions.get('window');
const TagInputBase = forwardRef((props: any, ref: any) => {
  const [state, setState] = useState({
    tags: props?.tags || [],
    rating: 0,
    text: '',
  });

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

  const addTag = (tag: any) => {
    if (tag === '') {
      showMessage({
        message: 'Tag is empty',
        type: 'danger',
      });
      return;
    }
    setState({
      ...state,
      tags: [...state.tags, tag],
      text: '',
    });
  };

  const removeTag = (index: any) => {
    const tags = state.tags.filter((tag: any, i: any) => i !== index);
    setState({
      ...state,
      tags,
    });
  };

  useEffect(() => {
    if (props?.onChangeTags) {
      props?.onChangeTags(state.tags);
    }
  }, [state.tags]);

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
        value={state.text}
        onChangeText={(text: any) => setState({...state, text})}
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

      <Components.Libs.Button.Base onPress={() => addTag(state.text)}>
        <Components.Libs.Image.Base
          source={require('../../../assets/images/right.png')}
          style={{
            container: {
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: 10,
              top: -50,
            },
            image: {
              width: 30,
              height: 60,
            },
          }}
        />
      </Components.Libs.Button.Base>

      <Components.Libs.Section.Base
        style={{
          container: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingVertical: 10,
          },
        }}>
        {state?.tags.map((tag: any, index: any) => {
          return (
            <Components.Libs.Button.Base
              onPress={() => removeTag(index)}
              style={{
                container: {
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                  elevation: 5,
                  shadowColor: 'red',
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                },
              }}>
              <Components.Libs.Typography.Base>
                {tag}
              </Components.Libs.Typography.Base>
            </Components.Libs.Button.Base>
          );
        })}
      </Components.Libs.Section.Base>
    </Components.Libs.Section.Base>
  );
});

export default React.memo(TagInputBase);
