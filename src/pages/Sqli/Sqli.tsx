import {ScrollView, Text, View} from 'react-native';

import Carousel from '../../components/Carousel';
import HackerText from '../../components/HackerText';
import Pages from '../../enum/Pages';
import React from 'react';
import Url from '../../components/Url';
import {images} from '../../themes';
import styles from './sqli.style';

const data = [
  {key: 0, name: 'Candy Shop', icon: images.sweets, page: Pages.CANDY_SHOP},
  {key: 1, name: 'Detective', icon: images.detective, page: Pages.DETECTIVE},
  {key: 2, name: "I'm in", icon: images.hacker_cracked, page: Pages.IM_IN},
];

interface Props {
  navigation: any;
}

const Sqli = ({navigation}: Props) => {
  return (
    <ScrollView style={styles.container}>
      {/* <Url url="https://mooney.com" /> */}
      {/* <HackerText /> */}
      <Text style={styles.title}>Hacken met SQL Injection</Text>
      <Text style={styles.desc}>
        Om een website te laten werken met een inlogsysteem, zit er een systeem
        achter de website genaamd de back-end. In zo'n back-end kan de database
        geraadpleegd worden om data op te halen dat opgeslagen staat, waaronder
        vaak gebruikergegevens, bankgegevens etc. Het raadplegen van deze
        gegevens wordt gedaan door middel van zogenaamde queries. Dit zijn
        regels code die tegen de database zegt wat er moet gebeuren. Dit kan
        zijn bepaalde gegevens ophalen of een gebruiker registreren. Wanneer je
        als gebruiker probeert in te loggen op een website, dan is er een query
        dat uitgevoerd wordt om te kijken of je in hun database staat
        opgeslagen. Een bekend voorbeeld van SQL Injection is om door middel van
        zo'n inlogveld de query zo aan te passen dat jij als 'hacker' kan
        inloggen zonder dat je bijvoorbeeld het wachtwoord weet. Wanneer dit
        mogelijk is, kan de hacker gegevens ophalen uit de database en relatief
        gemakkelijk toegang krijgen tot het systeem.
      </Text>
      <Text style={styles.subTitle}>Een voorbeeld</Text>
      <Text style={styles.desc}>
        Een query kan er op verschillende manieren uitzien afhankelijk van het
        soort opslag (database) dat gebruikt wordt. Wij gaan hier uit van een
        MySQL database. In de query hieronder is het de bedoeling dat de
        gebruikergegevens geverifieerd worden om in te kunnen loggen.
      </Text>
      {/* TODO: make this query holder its own universal component */}
      <View style={styles.queryHolder}>
        <Text style={styles.query}>
          query = "SELECT * FROM Users WHERE username = " + input(username) +
          "AND password = " + input(password);
        </Text>
      </View>
      <Text style={styles.desc}>
        Wanneer je als gebruiker een gebruikersnaam en wachtwoord invult, dan
        komen die gegevens in de input velden van de query hierboven. Zouden we
        als gebruikersnaam TEST OR 1=1 opgeven en als wachtwoord TESTWACHTWOORD
        OR 1=1, dan zal de query er als volgt uitzien:
      </Text>
      <View style={styles.queryHolder}>
        <Text style={styles.query}>
          query = "SELECT * FROM Users WHERE username = TEST OR 1=1 AND password
          = TESTWACHTWOORD OR 1=1;
        </Text>
      </View>
      <Text style={styles.desc}>
        Sinds 1=1 altijd waar is, zullen beide condities waar teruggeven
        waardoor het alle rijen van de Users tabel zal teruggeven. Ga naar de
        eerste oefening hieronder om dit in actie te zien!
      </Text>
      <Text style={[styles.subTitle, {textAlign: 'center'}]}>
        Selecteer een oefening
      </Text>
      <Carousel navigation={navigation} data={data} />
    </ScrollView>
  );
};

export default Sqli;
