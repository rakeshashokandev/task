import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const CommonFlatList = ({ data, renderItem, keyExtractor, ListHeaderComponent, ListFooterComponent ,numberOFcl, containerStyle}) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor || ((item, index) => item.id || index.toString())}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      contentContainerStyle={[styles.container,containerStyle]}
      numColumns={numberOFcl}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});

export default CommonFlatList;
