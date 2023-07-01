import React from 'react';
import Intro from "../../components/intro/Intro";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import AccordionPromo from "../../components/accordionPromo/AccordionPromo";
import OtherPromo from "../../components/otherPromo/OtherPromo";
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
            description: 'Вы можете сделать ваши растения немного счастливее. ' +
                'Мы предоставляем широкий спектр горшков на любой вкус и цвет. ' +
                'Еще у нас есть несколько экземпляров ручной работы.',
            src: potPromo,
            alt: 'pots'
        },
        {
            title: 'БЕЗОПАСНО ДЛЯ ЖИВОТНЫХ',
            description: 'Выберите эти растения, если хотите, чтобы ваши пушистые друзья точно были в безопасности. ' +
                'Если ваш питомец любит грызть домашние растения, убедитесь, что они не пострадают.',
            src: safeForAnimalsPromo,
            alt: 'safe for animals plants'
        },
        {
            title: 'ЛЕГКИЕ В УХОДЕ',
            description: 'Вы уверены, что вы готовы ухаживать за домашним растением? ' +
                'У нас огромный выбор уличных расений!',
            src: easyCarePromo,
            alt: 'easy-care plants'
        },
        {
            title: 'МЫ РАБОТАЕМ ТОЛЬКО ДЛЯ ВАС',
            description: 'Мы работаем только для вас и стараемся учитывать все ваши пожелания.',
            src: weWorkForYouPromo,
            alt: 'plant'
        },
    ];

    const accordionCategoriesPromoData = [
        {
            title: 'Домашние растения',
            content: 'Домашние растения требуют большего ухода, чем уличные, но, поверьте, оно того стоит'
        },
        {
            title: 'Уличные растения',
            content: 'Уличные растения неприхотливы в уходе и невелик риск того, что ваш питомец его съест.'
        },
        {
            title: 'Все растения',
            content: 'В нашем магазиине огромный выбор товаров на любой вкус.'
        },
    ];

    const accordionContactUsPromoData = [
        {
            title: 'Наш адрес',
            content: 'Мы находимся по адресу г. Донецк, ул. Артема 20A. Приходите, будем рады в любой день!'
        },
        {
            title: 'Почта',
            content: 'theplantsshop@yandex.com'
        },
        {
            title: 'Телефон',
            content: '+7-949-487-14-15'
        },
        {
            title: 'Время работы',
            content: 'Мы работаем Понедельник-Пятница 9:00-18:00'
        },

    ];

    const accordionFAQPromoData = [
        {
            title: 'Оплата и доставка',
            content: 'Мы принимаем любые карты и доставим ваш товар в любую точку города.'
        },
        {
            title: 'Что делать, если товар был поврежден?',
            content: 'Если оказалось, что ваш товар поврежден, ' +
                'вы можете позвонить нам или написать на почту, мы обязательно поможем.'
        },
        {
            title: 'Мое растение не такое, как на фото',
            content: 'Как правило, наши товары строго соответствуют всем стандартам, ' +
                'но вы всегда можете вернуть товар в течении двух дней.'
        },
        {
            title: 'Какой метод упаковки вы используете?',
            content: 'Мы используем исключительно экологичные материалы для упаковки ваших товаров.'
        },
        {
            title: 'Какое растение лучше купить в подарок?',
            content: 'Напишите нашему боту-садоводу и он обязательно поможет вам определиться с выбором.'
        },
        {
            title: 'У вас есть редкие домашние или уличные растения?',
            content: 'Вы можете приобрести у нас даже самые редкие растения, привезенные из Африки, Австралии и Южной Америки.'
        },
    ];

    return (
        <div className='container'>
            <Intro/>
            <NewArrivals title={'НОВЫЕ ПОСТУПЛЕНИЯ'}/>
            <AccordionPromo props={accordionCategoriesPromoData}
                            src={categoriesPromo}
                            promoName='КАТЕГОРИИ РАСТЕНИЙ'
                            imgPosition='left'
                            title='Научно доказано, что растения делают вашу жизнь лучше и
                            имеют большое множество плюсов.
                            Они очищают воздух, помогают бороться со стрессом и
                            повышают вашу продуктивность.'
            />
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