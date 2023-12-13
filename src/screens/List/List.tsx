import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  FlatList,
  Platform,
  Linking,
} from 'react-native';
import Components from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Rating, AirbnbRating} from 'react-native-ratings';

import Share from 'react-native-share';

const Screen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const points_reducer = useSelector((state: any) => state.points_reducer);
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
  });

  const filterNameAndTags = (items: any) => {
    return items.filter((item: any) => {
      const name = item.name.toLowerCase();
      const tags = item.tags.map((tag: any) => tag.toLowerCase()).join(', ');
      const searchLowerCase = search.toLowerCase();
      return name.includes(searchLowerCase) || tags.includes(searchLowerCase);
    });
  };

  const openDirections = (item: any) => {
    const scheme = Platform.select({
      ios: 'maps://0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${item?.location?.latitude},${item?.location?.longitude}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  return (
    <Components.Layouts
      withHeader={true}
      header={{
        title: 'List Screen',
        subtitle: 'Restaurants List Screen',
        rightItem: (
          <Components.Libs.Button.Base
            onPress={() => navigation.navigate('Details')}>
            <Components.Libs.Image.Base
              source={require('../../assets/images/add.png')}
              style={{
                container: {
                  width: 30,
                  height: 100,
                  justifyContent: 'center',
                },
                image: {
                  width: 40,
                  height: 60,
                },
              }}
              resizeMode="contain"
            />
          </Components.Libs.Button.Base>
        ),
      }}
      style={styles.layout}>
      {/* <Components.Libs.Typography.Base>
        {points_reducer?.points?.length} points
        {console.log('points_reducer', points_reducer)}
      </Components.Libs.Typography.Base> */}

      <Components.Libs.TextInput.Primary
        placeholder="Search on name & TAGS"
        value={search}
        onChangeText={(text: string) => setSearch(text)}
        style={{
          container: {
            width: Dimensions.get('window').width - 60,
          },
        }}
      />

      <FlatList
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginHorizontal: 10,
          alignSelf: 'stretch',
          flexGrow: 1,
          paddingTop: 10,
        }}
        data={filterNameAndTags(points_reducer?.points)}
        ItemSeparatorComponent={() => (
          <Components.Libs.Section.Base
            style={{
              container: {
                height: 5,
                backgroundColor: 'transparent',
              },
            }}
          />
        )}
        renderItem={({item}) => (
          <Components.Libs.Section.Base
            style={{
              container: {
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: 'white',
                width: Dimensions.get('window').width - 20,
                borderRadius: 10,
                overflow: 'hidden',
                flexDirection: 'row',
              },
            }}>
            <Components.Libs.Button.Base onPress={() => openDirections(item)}>
              <Components.Libs.Image.Base
                source={require('../../assets/images/direction.png')}
                style={{
                  container: {
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRightWidth: 1,
                  },
                  image: {
                    width: 30,
                    height: 30,
                  },
                }}
                resizeMode="contain"
              />
            </Components.Libs.Button.Base>

            <Components.Libs.Button.Base
              onPress={() => {
                Share.open({
                  title: 'Hey check this out!',
                  message: `Name: ${item?.name}\nTags: ${item?.tags}\nAdress: ${item?.address}`,
                });
              }}>
              <Components.Libs.Image.Base
                source={require('../../assets/images/share.png')}
                style={{
                  container: {
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRightWidth: 1,
                  },
                  image: {
                    width: 30,
                    height: 30,
                  },
                }}
                resizeMode="contain"
              />
            </Components.Libs.Button.Base>

            <Components.Libs.Button.Base
              onPress={() => navigation.navigate('ShowLocation', {item})}>
              <Components.Libs.Image.Base
                source={require('../../assets/images/maps.png')}
                style={{
                  container: {
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  image: {
                    width: 30,
                    height: 30,
                  },
                }}
                resizeMode="contain"
              />
            </Components.Libs.Button.Base>

            <Components.Libs.Button.Base
              onPress={() => navigation.navigate('Details', {item})}
              style={{
                container: {
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  backgroundColor: 'pink',
                  borderRadius: 10,
                },
              }}>
              <Components.Libs.Typography.Base
                style={{
                  container: {
                    paddingTop: 10,
                    paddingLeft: 10,
                  },
                  text: {
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 'bold',
                  },
                }}>
                {item?.name}
              </Components.Libs.Typography.Base>

              <Components.Libs.Typography.Base
                style={{
                  container: {
                    width: Dimensions.get('window').width - 100,
                    paddingLeft: 10,
                    paddingBottom: 10,
                  },
                  text: {
                    fontSize: 12,
                    color: 'red',
                  },
                }}>
                TAGS: {item?.tags?.map((tag: any) => tag).join(', ')}
              </Components.Libs.Typography.Base>

              <Components.Libs.Section.Base
                style={{
                  container: {
                    width: Dimensions.get('window').width - 100,
                    paddingLeft: 10,
                    paddingBottom: 10,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  },
                }}>
                <Rating
                  readonly
                  type="custom"
                  ratingColor="red"
                  ratingBackgroundColor="transparent"
                  ratingCount={5}
                  imageSize={20}
                  startingValue={item?.rate}
                />
              </Components.Libs.Section.Base>
            </Components.Libs.Button.Base>
          </Components.Libs.Section.Base>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </Components.Layouts>
  );
};

export default React.memo(Screen);
