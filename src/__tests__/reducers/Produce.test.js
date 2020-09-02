import MonthlyProduceReducer from '../../reducers/MonthlyProduceReducer';

describe('MonthlyProduceReducer', () => {
  let action;
  const produceList = {
    month: 'January',
    selection: "Apples,Hazelnuts,Pears,Galric,Mushrooms,Onions,Potatoes,Turnips"
  };

  test('Should return homepage if if no action type is passed into the reducer', () => {
    expect(MonthlyProduceReducer({}, { type: null })).toEqual({});
  });

  test('Should return an object containing the produce for the month', () => {
    const { month, selection } = produceList;
    action = {
      type: 'DISPLAY_MONTH',
      month: month,
      selection: selection
    };
  });
  expect(MonthlyProduceReducer({}, action)).toEqual({
    January: {
      month: month,
      selection: selection}
});
  });



