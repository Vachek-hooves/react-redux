import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  setAuthorFilter,
  setFavoriteFilter,
  resetFilters,
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoriteFilter,
} from '../../redux/slices/filterSlice';

import './Filter.css';
export default function Filter() {
  const dispatch = useDispatch();

  // const titleFilter = useSelector((state) => state.filter.title); //* istead this use next..
  const titleFilter = useSelector(selectTitleFilter);
  // console.log(titleFilter);

  // return author input state from store
  const authorFilter = useSelector(selectAuthorFilter);
  // console.log(useSelector(selectAuthorFilter));

  const favoriteFilter= useSelector(selectFavoriteFilter)
  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };
  const handleFavoriteFilterChange = (e) => {
    dispatch(setFavoriteFilter(e.target.checked));
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
      </div>
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={authorFilter}
            type="text"
            placeholder="Filter by author..."
            onChange={(e) => handleAuthorFilterChange(e)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              id="favorite"
              name="favorite"
              checked={favoriteFilter}
              onChange={(e) => handleFavoriteFilterChange(e)}
            />
            Only Favorite
          </label>
          <button onClick={handleResetFilters}>Reset</button>
        </div>
      </div>
    </div>
  );
}
