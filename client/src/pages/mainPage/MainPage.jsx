import React from 'react';
import Intro from "../../components/intro/Intro";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import AccordionPromo from "../../components/accordionPromo/AccordionPromo";
import OtherPromo from "../../components/otherPromo/OtherPromo";
import {loremIpsum} from "lorem-ipsum";
import potPromo from '../../resources/img/potPromo.png';
import safeForAnimalsPromo from '../../resources/img/safeForAnimalsPromo.png';
import easyCarePromo from '../../resources/img/easyCarePromo.png';
import weWorkForYouPromo from '../../resources/img/weWorkForYouPromo.png';
import contactUsPromo from '../../resources/img/contactUsPromo.png';
import categoriesPromo from '../../resources/img/categoriesPromo.png';
import faqPromo from '../../resources/img/FAQpromo.png';


const MainPage = () => {
    const otherPromoData = [
        {
            title: 'ВЫБЕРИ ДИЗАЙНЕРСКИЙ ГОРШОК',
            description: loremIpsum(),
            src: potPromo,
            alt: 'pots'
        },
        {
            title: 'БЕЗОПАСНО ДЛЯ ЖИВОТНЫХ',
            description: loremIpsum(),
            src: safeForAnimalsPromo,
            alt: 'safe for animals plants'
        },
        {
            title: 'ЛЕГКИЕ В УХОДЕ',
            description: loremIpsum(),
            src: easyCarePromo,
            alt: 'easy-care plants'
        },
        {
            title: 'МЫ РАБОТАЕМ ТОЛЬКО ДЛЯ ВАС',
            description: loremIpsum(),
            src: weWorkForYouPromo,
            alt: 'plant'
        },
    ];

    const accordionCategoriesPromoData = [
        {
            title: 'Домашние растения',
            content: loremIpsum()
        },
        {
            title: 'Уличные растения',
            content: loremIpsum()
        },
        {
            title: 'Все растения',
            content: loremIpsum()
        },
    ];

    const accordionContactUsPromoData = [
        {
            title: 'Наш адрес',
            content: loremIpsum()
        },
        {
            title: 'Почта',
            content: loremIpsum()
        },
        {
            title: 'Телефон',
            content: loremIpsum()
        },
        {
            title: 'Время работы',
            content: loremIpsum()
        },

    ];

    const accordionFAQPromoData = [
        {
            title: 'Оплата и доставка',
            content: loremIpsum()
        },
        {
            title: 'Что делать, если товар был поврежден?',
            content: loremIpsum()
        },
        {
            title: 'Мое растение не такое, как на фото',
            content: loremIpsum()
        },
        {
            title: 'Какой метод упаковки вы используете?',
            content: loremIpsum()
        },
        {
            title: 'Какое растение лучше купить в подарок?',
            content: loremIpsum()
        },
        {
            title: 'У вас есть редкие домашние или уличные растения?',
            content: loremIpsum()
        },

    ];

    return (
        <div className='container'>
            <Intro/>
            <NewArrivals/>
            <AccordionPromo props={accordionCategoriesPromoData}
                            src={categoriesPromo}
                            promoName='КАТЕГОРИИ РАСТЕНИЙ'
                            imgPosition='left'/>
            {
                otherPromoData.map((item, number) =>
                    <OtherPromo title={item.title} description={item.description} src={item.src} key={number}/>
                )
            }
            <AccordionPromo props={accordionContactUsPromoData}
                            src={contactUsPromo}
                            promoName='СВЯЗАТЬСЯ С НАМИ'
                            imgPosition='left'/>
            <AccordionPromo props={accordionFAQPromoData}
                            src={faqPromo}
                            promoName='FAQ'
                            imgPosition='right'/>

        </div>
    );
};

export default MainPage;