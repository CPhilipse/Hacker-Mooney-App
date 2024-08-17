import {ScrollView, Text, View} from 'react-native';

import Carousel from '../../components/Carousel';
import HackerText from '../../components/HackerText';
import Pages from '../../enum/Pages';
import React from 'react';
import Url from '../../components/Url';
import {images} from '../../themes';
import styles from './lfi.style';

const data = [
  {key: 0, name: 'Levi', icon: images.boy, page: Pages.LEVI},
  {key: 1, name: 'Detective', icon: images.detective, page: Pages.DETECTIVE},
  {key: 2, name: "I'm in", icon: images.hacker_cracked, page: Pages.IM_IN},
];

interface Props {
  navigation: any;
}

const Lfi = ({navigation}: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hacken met Local File Inclusion (LFI)</Text>
      <Text style={styles.desc}>
        Met deze techniek kan er vanuit de website verschillende bestanden van
        het systeem waar de website op staat ingelezen worden, waaronder
        geheimegegevens.
      </Text>
      <Text style={styles.subTitle}>Een voorbeeld</Text>
      <Text style={styles.desc}>
        Op een computer zitten allemaal folders en bestanden waarin dingen staan
        opgeslagen als afbeeldingen, programma's, gebruikergegevens en misschien
        zelfs bestanden van een website. Als er een website online staat dan is
        er een folder waarin alle bestanden staan met betrekking tot de website
        zoals code en waarschijnlijk ook databasegegevens. Dan kan er vanuit de
        website de andere folders op de computer benaderd worden als er bepaalde
        karakters niet gefilterd worden in de code van de website. Neem de
        volgende link als voorbeeld:
      </Text>
      {/* TODO: make this query holder its own universal component */}
      <View style={styles.queryHolder}>
        <Text style={styles.query}>
          https://mooney.com/blog?image=hacker.jpg
        </Text>
      </View>
      <Text style={styles.desc}>
        In deze URL is te zien dat er een bestand wordt ingeladen. Dit is
        interessant voor een hacker, want die kan hier mogelijk misbruik van
        maken door misschien wel een ander bestand in te laden van de computer.
        Zoals bijvoorbeeld gebruikergegevens, databasegegevens of een ssh
        sleutel waarmee in het systeem ingelogd kan worden. Hier komt Local File
        Inclusion bij kijken, dit kan er als volgt uitzien:
      </Text>
      <View style={styles.queryHolder}>
        <Text style={styles.query}>
          https://mooney.com/blog?image=../../../../../etc/passwd
        </Text>
      </View>
      <Text style={styles.desc}>
        In het bestand 'passwd' staan alle gebruikers opgeslagen op de computer.
        Hiermee zou je met de gebruikersnaam naar de 'home' folder kunnen
        navigeren om vervolgens bijvoorbeeld een ssh sleutel te verkrijgen van
        die gebruiker. Ook kan er de folders en bestanden in folder laten zien
        worden wanneer je het pad eindigt met een folder. Zie de eerste oefening
        om dit in actie te zien!
      </Text>
      <Text style={[styles.subTitle, {textAlign: 'center'}]}>
        Selecteer een oefening
      </Text>
      <Carousel navigation={navigation} data={data} />
    </ScrollView>
  );
};

export default Lfi;
