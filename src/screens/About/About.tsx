import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, Keyboard, Platform} from 'react-native';
import Components from '../../components';

const Screen = () => {
  const [state, setState] = useState({});
  const styles = StyleSheet.create<any>({
    layout: {
      container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    },
    body: {
      container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '2%',
      },
    },

    teamItem: {
      container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '2%',
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
  });

  return (
    <Components.Layouts
      withHeader={true}
      header={{
        title: 'About Screen',
        subtitle: 'Restaurants About Screen',
      }}
      style={styles.layout}>
      <Components.Libs.Typography.Base style={styles.teamItem}>
        Alper Ekici - 101212904
      </Components.Libs.Typography.Base>
      <Components.Libs.Typography.Base style={styles.teamItem}>
        Atakan Arikan - 101307095
      </Components.Libs.Typography.Base>
    </Components.Layouts>
  );
};

export default React.memo(Screen);
