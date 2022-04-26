import React from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {t} from 'react-i18nify';

import styles from './SuperFlatList.styles';

import LoadingIndicator from '../../others/LoadingIndicator/LoadingIndicator';

export default props => {
  const renderBottomLoader = () => {
    if (!props.hasMoreData) {
      return null;
    }

    if (props.renderBottomLoader) {
      return props.renderBottomLoader();
    }

    return (
      <View
        style={
          props.horizontal
            ? styles.rightLoaderContainer
            : styles.bottomLoaderContainer
        }>
        <ActivityIndicator size="small" color="#85b89c" />
      </View>
    );
  };

  const renderRefreshControl = () => {
    return <View />;
  };

  if (!props.data) {
    return <LoadingIndicator full />;
  }

  if (props.data.length === 0) {
    if (props.renderEmpty) {
      return props.renderEmpty();
    }

    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{t('super_flat_list.empty')}</Text>
      </View>
    );
  }

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      onEndReachedThreshold={1}
      scrollEventThrottle={16}
      ListFooterComponent={renderBottomLoader}
      refreshControl={!!props.onRefresh && renderRefreshControl()}
      refreshing={props.isRefreshing}
      {...props}
      onEndReached={() =>
        props.hasMoreData && props.onEndReached && props.onEndReached()
      }
      ref={props.listRef}
    />
  );
};
