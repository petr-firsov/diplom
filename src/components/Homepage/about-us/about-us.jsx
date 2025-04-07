import './about-us.css';

export default function AboutUs() {
    return (
        <section className="content-container about-us">
            <div className="about-us__content">
                <h2 className="about-us__title">О НАС</h2>
                <div className="about-us__text">
                    <p>Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем <br /> все больше людей заказывают жд билеты через интернет. </p>
                    <p>Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? <br/> Мы расскажем о преимуществах заказа через интернет. </p>
                    <p className="about-us__text_highlighted">Покупать жд билеты дешево можно за 90 суток до отправления поезда. <br/> Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
                </div>
            </div>
        </section>
    )
}