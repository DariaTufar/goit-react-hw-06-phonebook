import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux';
 

import { FilterTitle, FilterInput } from './Filter.styled';
import { setContactFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = e =>
    dispatch(setContactFilter(e.currentTarget.value));

  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        name="filter"
        onChange={onChangeFilter}
        value={filter}
      ></FilterInput>
    </div>
  )
}