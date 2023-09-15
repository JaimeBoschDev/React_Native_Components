import React from 'react';
import {View, SectionList, Text} from 'react-native';
import {HeaderTittle} from '../Components/HeaderTittle';
import {styles} from '../theme/appTheme';
import {ItemSeparator} from '../Components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        ListHeaderComponent={() => <HeaderTittle tittle="Section List" />}
        ListFooterComponent={() => (
          <HeaderTittle tittle={'Total de Casas: ' + casas.length} />
        )}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled //Esta propiedad es para que el header de la seccion se quede hasta termnarla
        renderItem={({item}) => <Text style={{color: 'gray'}}> {item} </Text>}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTittle tittle={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTittle tittle={'total ' + section.data.length} />
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        SectionSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
