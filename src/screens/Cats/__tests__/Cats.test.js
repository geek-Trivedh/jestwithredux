import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Cats from '../Cats';
import counterSlice from '../../../redux/Counter/counterSlice';
import CatsSlice from '../../../redux/Cats/catsSlice';
import {Provider} from 'react-redux';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {configureAppStore, store} from '../../../redux/store';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  rest.get('https://api.thecatapi.com/v1/breeds', (req, res, ctx) => {
    return res(ctx.json('Fetched'), ctx.delay(150));
  }),
];
const server = setupServer(...handlers);

// const renderWithRedux = renderedComponent => {
//   return render(
//     <Provider store={store}>{renderedComponent}</Provider>,
//     {},
//     {},
//     store,
//   );
// };

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
const maybeThisWorks = jest.fn();
describe('Cats', () => {
  it('fetch cats', async () => {
    const {getByText, findByText, debug} = render(
      <Provider store={store}>
        <Cats />
      </Provider>,
      {},
      {},
      store,
    );
    fireEvent.press(getByText(/fetch cats/i));
    expect(await findByText(/Fetched/i)).toBeTruthy();
  });
});
