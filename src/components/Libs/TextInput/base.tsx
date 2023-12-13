import React, {forwardRef, ComponentProps} from 'react';
import {TextInput} from 'react-native';
import Section from '../Section';
import * as Animatable from 'react-native-animatable';

interface AnimatableProps extends ComponentProps<typeof Animatable.View> {
  name?: Animatable.Animation;
  duration?: number;
  delay?: number;
}

interface TextInputProps extends ComponentProps<typeof TextInput> {
  children?: React.ReactNode;
  style?: any;
  animation?: AnimatableProps;
}

const TextInputBase = forwardRef((props: TextInputProps, ref: any) => {
  return (
    <Section.Base
      animation={props.animation}
      style={{
        container: [props.style?.container],
      }}>
      <TextInput ref={ref} {...props} style={[props.style?.textinput]} />
    </Section.Base>
  );
});

export default React.memo(TextInputBase);
