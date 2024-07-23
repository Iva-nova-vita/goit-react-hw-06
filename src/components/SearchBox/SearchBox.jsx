import css from './SearchBox.module.css';

export default function SearchBox({ updateFilter }) {
  return (
    <div className={css.search}>
      <label htmlFor='search'>Find contacts by name</label>
      <input onInput={updateFilter} id='search'></input>
    </div>
  );
}
