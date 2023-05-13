import React from 'react';
import img1 from '../../resources/img/ourPhilosopi.webp';
import img2 from '../../resources/img/our2.jpeg';
import img3 from '../../resources/img/lievs.jpeg';
import s from './AboutUsPage.module.scss';
import {animated} from "@react-spring/web";

const AboutUsPage = () => {
    return (
        <>
            <div className='container'>
                <h1 style={{fontSize: '50px', lineHeight: '70px', paddingBottom: '1rem'}}>Наша философия</h1>
                <section className={s.contentSection}>
                    <div className={[s.textContent, s.colDir].join(' ')}>
                        <div>
                            <p style={{paddingBottom: '1rem'}}>
                                Мы о любви к природе и уюте. Растения наши друзья, они молчаливы и прекрасны.
                                Растения живые и помогают нам расти вместе с ними. Мы заботимся о них, они растут.
                                Наша миссия - озеленить ваш дом и принести в него немного уюта и спокойствия.
                            </p>
                            <p>
                                Мы верим, что растения делют людей счастливее, спокойнее и жизнерадостнее.
                                Они уменьшают уровень стресса и тревоги. Растения оказывают лечебное воздействие и могут
                                избавить от болезни быстрее, улучшить ваше внимание и, конечно же, ваше общее
                                самочувствие.
                            </p>
                        </div>
                        <p>
                            Мы здесь, чтобы помочь вам озеленить свой дом и укрепить вашу уверенность в том,
                            что вам это необходимо.
                        </p>
                    </div>
                    <div className={s.imageContent}>
                        <img src={img1} alt=""/>
                    </div>
                </section>

                <section className={s.contentSection}>
                    <div className={s.imageContentLs}>
                        <img src={img2} alt=""/>
                    </div>
                    <div className={s.textContent}>
                        <p>
                            Заботиться о растениях гораздо проще, когда ты понимаешь и чувствуешь суть, потому что
                            все это о любви к Земле, жизни и самому себе. Мы готовы дать вам возможность приобщиться к
                            этому
                            и поможем советом.
                        </p>
                    </div>
                </section>

                <h1 style={{fontSize: '50px', lineHeight: '70px', paddingBottom: '1rem'}}>О Нас</h1>
                <section className={s.contentSection}>
                    <div className={s.textContent}>
                        <p style={{paddingBottom: '20rem'}}>
                            Наша компания была основана в 2018 году. Наши сотрудники высококвалифицированные ботанкии,
                            они очень дружелюбны и всегда готовы помочь вам с любым вашим вопросом.
                        </p>

                        <h3 style={{fontSize: '22px'}}>Присоединись к нам</h3>
                        <div style={{position: 'relative', maxWidth: '220px'}}>
                            <input type="text" placeholder='Введите свой Email'/>
                            <span className={s.inputIcon}>
                                <svg width="20" height="20" viewBox="0 0 20 20">
                                <line x1="2" y1="10" x2="18" y2="10" style={{stroke: "#69f48d"}} strokeWidth="2"
                                      strokeLinecap="round"/>
                                <polyline points="14,6 18,10 14,14" style={{stroke: "#69f48d"}} strokeWidth="2"
                                          fill="none"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className={s.imageContent}>
                        <img src={img3} alt=""/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUsPage;