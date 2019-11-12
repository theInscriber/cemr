import React, { useState } from 'react'
import SearchField from './search-form';
import Results from './results';
import Info from './info';

const Search = () => {

    return (
        <>  
            <div style={{width: '50%', margin: 'auto'}}>
                <form>
                    <SearchField/>
                </form>
            </div>

            <div style={{width: '50%', margin: 'auto'}}>
                <Info/>
            </div>

            <Results/>
        </>
    )
} 

export default Search