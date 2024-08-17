import * as React from 'react';

import Animated, {
  SharedValue,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {StatusBar, StyleProp, TextInput, TextStyle, View} from 'react-native';

import styles from './hackertext.style';

const alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&*()_+-=[]\;',./<>?:"{}|`;

Animated.addWhitelistedNativeProps({
  text: true,
  value: true,
});

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

type ReTextProps = {
  text: SharedValue<string>;
  style: StyleProp<TextStyle>;
};

type WordProps = {
  char: string;
  uppercase?: boolean;
  shouldAnimate?: boolean;
  style: StyleProp<TextStyle>;
};

type SentenceProps = {
  text: string;
  style: StyleProp<TextStyle>;
  uppercase?: boolean;
};

const ReText = ({style, text}: ReTextProps) => {
  const animatedProps = useAnimatedProps(() => {
    return {
      text: String(text.value),
      defaultValue: String(text.value),
    };
  });

  return (
    <AnimatedTextInput
      underlineColorAndroid="transparent"
      editable={false}
      style={style}
      animatedProps={animatedProps}
    />
  );
};

const Word = ({char, shouldAnimate, style, uppercase}: WordProps) => {
  const value = useSharedValue(0);
  const maxTimes = useSharedValue(Math.floor(Math.random() * 20) + 10);

  React.useEffect(() => {
    const random = () => Math.floor(Math.random() * (alphabet.length - 1));
    const randomTimeout = Math.floor(Math.random() * 30) + 20;
    let times = 0;
    let timeoutId: NodeJS.Timeout | null = null;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const animate = () => {
      timeoutId = setTimeout(() => {
        if (times === maxTimes.value) {
          value.value = alphabet.indexOf(
            uppercase ? String(char).toUpperCase() : char,
            // char,
          );
          return;
        }
        value.value = random();
        times += 1;
        animate();
      }, randomTimeout);
    };

    if (shouldAnimate) {
      animate();
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
    // value.value = withTiming(random(), {duration: 1000, delay: 0});
  }, [char]);

  const animatedChar = useDerivedValue(() => {
    // console.log(alphabet[value.value]);
    return alphabet[value.value] as string;
  });

  return <ReText text={animatedChar} style={style} />;
};

export function Sentence({text, style, uppercase}: SentenceProps) {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {text.split(' ').map((word, index) => {
        return (
          <View
            key={`word-${index}`}
            style={{
              flexDirection: 'row',
              marginRight: (style?.['fontSize'] ?? 16) / 2,
              //   marginRight: -10,
            }}>
            {word.split('').map((char, index) => {
              return (
                <Word
                  key={`${char}-${index}`}
                  char={char}
                  style={style}
                  uppercase={uppercase}
                  shouldAnimate={
                    char.indexOf(`!@#$%^&*()_+-=[]\;',./<>?:"{}|`) === -1 ||
                    char === ' '
                  }
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

const sentence = [
  // 'Be yourself; everyone else is already taken.',
  `Hacken met SQL Injection`,
  // `A room without books is like a body without a soul.`,
  //   `Mooney acfgijs Made with love by @mironcatalin`,
  //   `Mooney acfgijs Using Expo and Reanimated`,
];
const subtitles = [
  // 'Be yourself; everyone else is already taken.',
  `Met deze aanval is het de kunst om SQL queries te kunnen manipuleren.`,
  // `A room without books is like a body without a soul.`,
  //   `Mooney acfgijs Follow me on Twitter for more`,
  //   `Mooney acfgijs . . . . . . . . . . . . . . .`,
];

// const sentence = [
//   // 'Be yourself; everyone else is already taken.',
//   `SQL Injection`,
//   //   `Made with love by @mironcatalin`,
//   //   `Using Expo and Reanimated`,
// ];
// const subtitles = [
//   'Test Test',
//   //   'Met deze aanval is het de kunst om SQL queries te kunnen manipuleren.',
//   // 'Be yourself; everyone else is already taken.',
//   //   `Om een website te laten werken met een inlogsysteem, zit er een systeem achter de website genaamd de back-end. In zo'n
//   //   back-end kan de database geraadpleegd worden om data op te halen dat opgeslagen staat, waaronder vaak gebruikergegevens.
//   //   Het raadplegen van deze gegevens wordt gedaan door middel van zogenaamde queries. Dit zijn regels code die tegen de
//   //   computer zeggen om bijvoorbeeld gegevens op te halen of gegevens in de database te zetten. Wanneer je als gebruiker
//   //   probeert in te loggen op een website, dan is er een query dat uitgevoerd wordt om te kijken of je in hun database staat opgeslagen.
//   //   Een bekend voorbeeld van SQL Injection is om door middel van zo'n inlogveld de query zo aan te passen dat jij als 'hacker'
//   //   zelfgemaakte queries kan uitvoeren. Wanneer dit mogelijk is, kan de hacker gegevens ophalen uit de database en relatief
//   //   gemakkelijk toegang krijgen tot het systeem.`,
//   // `A room without books is like a body without a soul.`,
//   //   `Follow me on Twitter for more`,
//   //   `. . . . . . . . . . . . . . .`,
// ];

const HackerText = () => {
  const [index, setIndex] = React.useState(0);
  const timer = React.useRef<NodeJS.Timeout>();

  //   React.useEffect(() => {
  //     const changeSentence = () => {
  //       timer.current = setTimeout(() => {
  //         setIndex(index => {
  //           return (index + 1) % sentence.length;
  //         });
  //         changeSentence();
  //       }, 3000);
  //     };

  //     changeSentence();

  //     return () => {
  //       if (timer.current) {
  //         clearTimeout(timer.current);
  //       }
  //     };
  //   }, []);

  return (
    <View style={styles.container}>
      <Sentence
        text={sentence[index] as string}
        style={styles.title}
        uppercase
      />

      {/* <Sentence
        text={subtitles[index] as string}
        style={{
          marginTop: 10,
          marginRight: -20,
          fontFamily: 'Sansita-Regular',
          fontSize: 14,
          opacity: 0.7,
          color: '#000',
        }}
        // uppercase
      /> */}
    </View>
  );
};

export default HackerText;
