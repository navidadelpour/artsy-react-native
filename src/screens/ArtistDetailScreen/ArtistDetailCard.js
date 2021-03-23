import React from 'react';
import {StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 16,
    marginLeft: 16,
  },
  evenCard: {
    marginRight: 16,
  },
  firstTwoCard: {
    marginTop: 16,
  },
  cardContent: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});

export default function ArtistDetailCard({children, image, index, ...props}) {
  const isEven = (index + 1) % 2 === 0;
  const isFirstTwoCards = index < 2;

  return (
    <Card
      style={[styles.card, isEven && styles.evenCard, isFirstTwoCards && styles.firstTwoCard]}
      {...props}>
      <Card.Cover source={{uri: image}} />
      <Card.Content style={styles.cardContent}>{children}</Card.Content>
    </Card>
  );
}
