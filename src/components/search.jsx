import React from 'react';

const Search = (props) => {

    return (
        <div className='px-10 pt-4'>
            <input value={props.value} 
                onChange={e=>props.setValue(e.target.value)} 
                className='border-2 border-black rounded-md py-2 px-6 w-full'
                placeholder='Начните поиск фильма'
            />
        </div>
    )
}

export default Search;