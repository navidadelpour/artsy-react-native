import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Divider, Headline, List, Paragraph} from 'react-native-paper';

const styles = StyleSheet.create({
  informationWrapper: {
    marginHorizontal: 16,
  },
  priceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginVertical: 16,
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

  const soldLabelColor = {
    backgroundColor: is_sold ? Colors.red50 : Colors.green50,
    color: is_sold ? Colors.red600 : Colors.green600,
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
                {is_sold ? 'Sold' : 'Not sold yet'}
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
