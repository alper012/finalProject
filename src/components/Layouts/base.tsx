import React, {ComponentProps} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Section from '../Libs/Section';
import Features from '../Features';
import * as Animatable from 'react-native-animatable';

interface AnimatableProps extends ComponentProps<typeof Animatable.View> {
  name?: Animatable.Animation;
  duration?: number;
  delay?: number;
}

interface LayoutBaseProps {
  children?: React.ReactNode;
  style?: any;
  withScroll?: boolean;

  withHeader?: boolean;
  header?: {
    title?: string;
    subtitle?: string;
    rightItem?: any;
    leftItem?: any;
  };
  animation?: AnimatableProps;
}

const LayoutBase = (props: LayoutBaseProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  return (
    <Section.Base
      animation={props.animation}
      style={{
        container: [styles.container, props.style?.container],
      }}>
      {props?.withHeader && (
        <Features.Headers.TypeOne
          title={props?.header?.title!}
          subtitle={props?.header?.subtitle!}
          rightItem={props?.header?.rightItem!}
          leftItem={props?.header?.leftItem!}
        />
      )}
      {props?.withScroll ? (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          {props.children}
        </ScrollView>
      ) : (
        props.children
      )}
    </Section.Base>
  );
};

export default React.memo(LayoutBase);
