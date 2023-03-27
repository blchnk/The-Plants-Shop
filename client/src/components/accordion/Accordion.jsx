import React, {useState} from 'react';
import style from './Accordion.module.scss';


const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className={style.accordion}>
                <div className={style.accordionItem}>
                    <div className={style.accordionTitle} onClick={() => setIsActive(!isActive)}>
                        <div>{title}</div>
                        <div>{isActive ? '-' : '+'}</div>
                    </div>
                    {isActive && <div className={style.accordionContent}>{content}</div>}
                </div>
            </div>
        </>
    );
};

export default Accordion;