import React, {forwardRef, ComponentProps} from 'react';
import {Text} from 'react-native';
import Section from '../Section';
import * as Animatable from 'react-native-animatable';

interface AnimatableProps extends ComponentProps<typeof Animatable.View> {
  name?: Animatable.Animation;
  duration?: number;
  delay?: number;
}

interface TypographyProps extends ComponentProps<typeof Text> {
  children?: React.ReactNode;
  style?: any;
  animation?: AnimatableProps;
}

const TypographyBase = forwardRef((props: TypographyProps, ref: any) => {
  return (
    <Section.Base
      animation={props.animation}
      style={{
        container: [props.style?.container],
      }}>
      <Text ref={ref} {...props} style={props.style?.text}>
        {props.children}
      </Text>
    </Section.Base>
  );
});

export default React.memo(TypographyBase);
