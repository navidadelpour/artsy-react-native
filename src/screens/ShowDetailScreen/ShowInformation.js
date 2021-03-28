import React, {Fragment} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Caption, Colors, Paragraph, Text, Title, useTheme} from 'react-native-paper';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
  wrapper: {
    padding: 16,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  statusLabel: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 1000,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  description: {
    marginTop: 16,
  },
  subtitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  captionWrapper: {
    flexDirection: 'row',
  },
  paragraph: {marginTop: 16},
  button: {marginTop: 16},
});

export default function ShowInformation({show}) {
  const navigation = useNavigation();

  const {name, city, exhibition_period, status, kind, counts, description, href} = show;
  const {artists: artistsCount, artworks: artworksCount} = counts;
  const link = `https://www.artsy.net${href}`;

  function onPress() {
    navigation.navigate('Webview', {link});
  }

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <View style={styles.wrapper}>
        <View>
          {name ? <Title>{name}</Title> : null}
          <View style={styles.subtitleWrapper}>
            <Text>
              {city}
              {city && exhibition_period && ', '}
              {exhibition_period}
            </Text>
            <ShowStatus status={status} />
          </View>
          <ShowCaption artistsCount={artistsCount} artworksCount={artworksCount} kind={kind} />
          {description ? <Paragraph style={styles.paragraph}>{description}</Paragraph> : null}
        </View>
        {href ? (
          <View>
            <Button mode="contained" style={styles.button} onPress={onPress}>
              Read More
            </Button>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}

function ShowStatus({status}) {
  const theme = useTheme();
  if (!status) return null;

  const backgroundColor = theme.dark ? Colors.grey800 : Colors.grey300;
  const color = theme.dark ? Colors.grey300 : Colors.grey700;

  return <Text style={[{backgroundColor}, {color}, styles.statusLabel]}>{status}</Text>;
}

function ShowCaption({artistsCount, artworksCount, kind}) {
  const values = [
    artistsCount > 0 && `${artistsCount} Artists`,
    artworksCount > 0 && `${artworksCount} Artworks`,
    kind,
  ].filter(x => Boolean(x));

  return (
    <View style={styles.captionWrapper}>
      {values.map((item, index, total) => {
        const isLastItem = index === total.length - 1;
        const isFirstItem = index === 0;

        return (
          <Fragment key={item}>
            <Caption style={[!isLastItem && {marginRight: 8}, !isFirstItem && {marginLeft: 8}]}>
              {item}
            </Caption>
            {!isLastItem ? <Caption>-</Caption> : null}
          </Fragment>
        );
      })}
    </View>
  );
}
