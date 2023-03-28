import React, {useRef, useState} from "react";
import { useSpring, animated } from '@react-spring/web';
import styles from './accordion.module.scss';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const animation = useSpring({
        height: isOpen ? ref.current.scrollHeight : 0,
        config: { duration: 250 }
    });

    const handleAccordionClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.container}>
            <div className={styles.title} onClick={handleAccordionClick}>
                {title}
                <svg
                    className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`}
                    viewBox="0 0 10 6"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1 0l4 4 4-4" fill="none" />
                </svg>
            </div>
            <animated.div ref={ref} style={animation} className={styles.content}>
                {content}
            </animated.div>
        </div>
    );
};

export default Accordion;
