import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectCats} from '../../redux/Cats/catsSelector';
import {getCatsFetch} from '../../redux/Cats/catsSlice';

const Cats = () => {
  const cats = useSelector(selectCats);
  const dispatch = useDispatch();
  return (
    <>
      {cats.length > 0 ? (
        <View>
          <ScrollView>
            <Text>Fetched Cats</Text>
          </ScrollView>
        </View>
      ) : (
        <Button onPress={() => dispatch(getCatsFetch())} title="Fetch cats" />
      )}
    </>
  );
};
export default Cats;
