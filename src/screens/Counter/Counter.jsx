import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectCount} from '../../redux/Counter/counterSelector';
import {
  incrementCounter,
  decrementCounter,
  incrementByAmount,
} from '../../redux/Counter/counterSlice';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(incrementCounter())}>
        Increment
      </Button>
      <Button title="Decrement" onPress={() => dispatch(decrementCounter())}>
        Decrement
      </Button>
      <Button
        title="Increment By 12"
        onPress={() => dispatch(incrementByAmount(12))}>
        Increment By 12
      </Button>
    </View>
  );
};
export default Counter;
