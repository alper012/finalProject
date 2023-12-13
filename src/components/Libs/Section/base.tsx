import React, {ReactNode, ComponentProps} from 'react';
import * as Animatable from 'react-native-animatable';
import {View, StyleSheet} from 'react-native';

interface AnimatableProps extends ComponentProps<typeof Animatable.View> {
  name?: Animatable.Animation;
  duration?: number;
  delay?: number;
}

interface ViewProps extends ComponentProps<typeof View> {
  children?: ReactNode;
  style?: any;
  animation?: AnimatableProps;
}

const ViewBase = (props: ViewProps) => {
  const styles = StyleSheet.create({
    container: {
      ...props.style?.container,
    },
  });
  return (
    <Animatable.View
      animation={props.animation?.name}
      duration={props.animation?.duration}
      delay={props.animation?.delay}
      style={[styles?.container, props.style?.container]}>
      {props.children}
    </Animatable.View>
  );
};

export default React.memo(ViewBase);
