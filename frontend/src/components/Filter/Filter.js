import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  resetFilters,
  selectTitleFilter,
} from '../../redux/slices/filterSlice';

import './Filter.css';
export default function Filter() {
  const dispatch = useDispatch();

  // const titleFilter = useSelector((state) => state.filter.title); //* istead this use next..
  const titleFilter = useSelector(selectTitleFilter);
  console.log(titleFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={titleFilter}
            type="text"
            placeholder="Filter by title..."
            onChange={(e) => handleTitleFilterChange(e)}
          />
        </div>
        <button onClick={handleResetFilters}>Reset</button>
      </div>
    </div>
  );
}
