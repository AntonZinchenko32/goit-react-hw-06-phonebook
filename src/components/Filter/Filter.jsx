import { useDispatch } from 'react-redux';
import { setFilterQuery } from 'redux/actions';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './Filter.module.css';

const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor={filterInputId} className={css.label}>
        Find contacts by name
      </label>
      <input
        id={filterInputId}
        className={css.input}
        onChange={evt => dispatch(setFilterQuery(evt.target.value))}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  searchContactFunc: PropTypes.func.isRequired,
};
