import React from 'react';
import {StyleSheet} from 'react-native';
import Components from '../../../index';

interface TypeOneProps {
  title: string;
  subtitle?: string;
  rightItem?: any;
  leftItem?: any;
}

const TypeOne = ({...props}: TypeOneProps) => {
  const styles = StyleSheet.create<any>({
    layout: {
      container: {
        width: '100%',
        justifyContent: 'center',
        height: 100,
        paddingHorizontal: '10%',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 10,
        shadowColor: 'red',
        flexDirection: 'row',
        zIndex: 999,
      },
      left: {
        container: {
          flex: 1,
          justifyContent: 'center',
        },
      },
    },
    title: {
      container: {
        fontSize: 30,
        fontWeight: 'bold',
      },
      text: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    },
    subTitle: {
      container: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      text: {
        color: 'pink',
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center',
      },
    },
  });
  return (
    <Components.Libs.Section.Base style={styles.layout}>
      {props?.leftItem}
      <Components.Libs.Section.Base style={styles.layout?.left}>
        <Components.Libs.Typography.Base style={styles.title}>
          {props?.title}
        </Components.Libs.Typography.Base>
        <Components.Libs.Typography.Base style={styles.subTitle}>
          {props?.subtitle}
        </Components.Libs.Typography.Base>
      </Components.Libs.Section.Base>
      {props?.rightItem}
    </Components.Libs.Section.Base>
  );
};

export default React.memo(TypeOne);
