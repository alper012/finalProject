import React, {forwardRef, ComponentProps} from 'react';
import {Image} from 'react-native';
import Section from '../Section';
import * as Animatable from 'react-native-animatable';

interface AnimatableProps extends ComponentProps<typeof Animatable.View> {
  name?: Animatable.Animation;
  duration?: number;
  delay?: number;
}

interface ImageProps extends ComponentProps<typeof Image> {
  children?: React.ReactNode;
  style?: any;
  animation?: AnimatableProps;
}

const ImageBase = forwardRef((props: ImageProps, ref: any) => {
  return (
    <Section.Base
      animation={props.animation}
      style={{
        container: [props.style?.container],
      }}>
      <Image ref={ref} {...props} style={props.style?.image} />
    </Section.Base>
  );
});

export default React.memo(ImageBase);
