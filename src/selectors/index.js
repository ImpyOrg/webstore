import { createSelectorCreator, defaultMemoize } from 'reselect';
import i from 'immutable';

export default createSelectorCreator(
  defaultMemoize,
  i.is
);
