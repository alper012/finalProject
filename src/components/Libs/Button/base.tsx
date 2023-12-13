import React, {forwardRef, ComponentProps} from 'react';
import {TouchableOpacity} from 'react-native';
import Section from '../Section';
import * as Animatable from 'react-native-animatable';

interface AnimatableProps extends ComponentProps<typeof Animatable.View> {
  name?: Animatable.Animation;
  duration?: number;
  delay?: number;
}

interface TouchableOpacityProps
  extends ComponentProps<typeof TouchableOpacity> {
  children?: React.ReactNode;
  style?: any;
  animation?: AnimatableProps;
}

const TouchableOpacityBase = forwardRef(
  (props: TouchableOpacityProps, ref: any) => {
    return (
      <Section.Base
        animation={props.animation}
        style={{
          container: [props.style?.container],
        }}>
        <TouchableOpacity
          ref={ref}
          {...props}
          style={props.style?.touchableopacity}>
          {props.children}
        </TouchableOpacity>
      </Section.Base>
    );
  },
);

export default React.memo(TouchableOpacityBase);
