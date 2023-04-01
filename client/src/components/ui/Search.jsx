import React, {useState} from 'react';
import style from './Search.module.scss';
import {useSpring, animated} from '@react-spring/web';

const Search = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const searchAnimation = useSpring({

        config: {duration: 200}
    });

    const handleSearchClick = () => {
        setIsOpen(!isOpen);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit} autoComplete="on">
                <input {...props} type='image' src={props.src} alt='search'/>
            </form>
        </>
    );
};

export default Search;