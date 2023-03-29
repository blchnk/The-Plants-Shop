import React, {useRef, useState} from "react";
import {useSpring, animated} from '@react-spring/web';
import styles from './accordion.module.scss';

const Accordion = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const animation = useSpring({
        height: isOpen ? ref.current.scrollHeight : 0,
        opacity: isOpen ? 1 : 0,
        config: {duration: 200}
    });

    const transform = useSpring({
        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
    });

    const handleAccordionClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={isOpen ? [styles.item, styles.pb, styles.active].join(' ') : styles.item}>
            <div className={styles.title} onClick={handleAccordionClick}>
                {title}
                <animated.svg style={transform} width="20" height="20" viewBox="0 0 20 20">
                    <line x1="2" y1="10" x2="18" y2="10" style={isOpen ? {stroke:"#69f48d"} : {stroke:"#000"}} strokeWidth="1.5" strokeLinecap="round" />
                    <polyline points="14,6 18,10 14,14" style={isOpen ? {stroke:"#69f48d"} : {stroke:"#000"}} strokeWidth="1.5" fill="none" />
                </animated.svg>
            </div>

            <animated.div ref={ref} style={animation} className={styles.content}>
                {content}
            </animated.div>
        </div>
    );
};

export default Accordion;
