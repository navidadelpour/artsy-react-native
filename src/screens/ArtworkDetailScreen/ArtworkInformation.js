import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Colors,
  Divider,
  Headline,
  List,
  Paragraph,
  useTheme,
} from 'react-native-paper';

const styles = StyleSheet.create({
  informationWrapper: {
    marginHorizontal: 16,
  },
  priceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  priceValue: {
    fontWeight: 'bold',
  },
  soldLabel: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 1000,
    fontSize: 12,
    fontWeight: 'bold',
  },
  divider: {
    marginTop: 16,
  },
});

export default function ArtworkInformation({artwork}) {
  const {
    category,
    medium,
    metric,
    width,
    height,
    widthCm,
    heightCm,
    conditionDescription,
    certificateOfAuthenticity,
    framed,
    price,
    is_sold,
    title,
  } = artwork;
  const theme = useTheme();

  const color = is_sold ? 'red' : 'green';
  const colorShade = theme.dark ? 100 : 900;
  const backgroundColorShade = theme.dark ? 900 : 100;

  const soldLabelColor = {
    backgroundColor: Colors[color + backgroundColorShade],
    color: Colors[color + colorShade],
  };

  return (
    <>
      <View style={styles.informationWrapper}>
        {title && <Headline>{title}</Headline>}
        {medium ? <Paragraph>{medium}</Paragraph> : null}
        <ArtworkSizeLabel width={widthCm} height={heightCm} metric="cm" />
        <ArtworkSizeLabel width={width} height={height} metric={metric} />
        {category ? <Paragraph>{category}</Paragraph> : null}
        <Divider style={styles.divider} />
        {price ? (
          <>
            <View style={styles.priceWrapper}>
              <Paragraph style={styles.priceValue}>{price}</Paragraph>
              <Paragraph style={[styles.soldLabel, soldLabelColor]}>
                {is_sold ? 'Sold' : 'Not sold'}
              </Paragraph>
            </View>
            <Divider style={styles.divider} />
          </>
        ) : null}
      </View>
      {[conditionDescription, certificateOfAuthenticity, framed]
        .filter(x => Boolean(x))
        .map(({label, details}) => {
          return <List.Item key={label} title={label} description={details} />;
        })}
    </>
  );
}

function ArtworkSizeLabel({width, height, metric}) {
  if (!width || !height) return null;
  return (
    <Paragraph>
      {width} x {height} {metric}
    </Paragraph>
  );
}
