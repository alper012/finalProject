import React, {forwardRef, ComponentProps} from 'react';
import {Switch} from 'react-native';
import Section from '../Section';
import * as Animatable from 'react-native-animatable';

interface AnimatableProps extends ComponentProps<typeof Animatable.View> {
  name?: Animatable.Animation;
  duration?: number;
  delay?: number;
}

interface SwitchProps extends ComponentProps<typeof Switch> {
  style?: any;
  animation?: AnimatableProps;
}

const SwitchBase = forwardRef((props: SwitchProps, ref: any) => {
  return (
    <Section.Base
      animation={props.animation}
      style={{
        container: [props.style?.container],
      }}>
      <Switch ref={ref} {...props} style={props.style?.switch} />
    </Section.Base>
  );
});

export default React.memo(SwitchBase);
