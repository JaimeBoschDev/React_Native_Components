import React, {useState} from 'react';
import {HeaderTittle} from '../Components/HeaderTittle';
import {View, ScrollView, RefreshControl} from 'react-native';
import {styles} from '../theme/appTheme';

export const PulltoRefreshScreen = () => {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState('');

  const onRefresh = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
      console.log('Terminamos');
      setData(data + '\n \n Insertando');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={onRefresh}
          progressViewOffset={20} //Espacio para el reload hacias abajo en Android
          progressBackgroundColor="#5856D6" //Android
          colors={['white', 'red', 'orange']} //Android
          style={{backgroundColor: '#5856D6'}} //IOS
          tintColor="white" //IOS
          title="Refresing" //IOS
          titleColor="white" //IOS
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTittle tittle="Pull to Refresh" />

        <HeaderTittle tittle={data} />
      </View>
    </ScrollView>
  );
};
