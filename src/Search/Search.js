import React, {useState} from 'react';
import './Search.css'

const Search = ({getResults}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    getResults(searchTerm);
    setSearchTerm('');
  }

  return(
    <form onSubmit={handleSubmit} className='search-form'>
      <input onChange={handleChange} value={searchTerm} className='search-bar' />
      <button type='submit'>Search for Lots</button>
    </form>
  )
}

export default Search;