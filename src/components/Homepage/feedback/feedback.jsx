import './feedback.css'

export default function Feedback() {
    return (
        <section className="content-container content-container__feedback" id="feedback">

            <div className="feedback">

                <h2 className="feedback__title">Отзывы</h2>

                <div className="feedback__content">
                    <div className="review">
                        <div className="review__image review__image_female" />
                        <div className="review__content">
                            <h3 className="review__author">Екатерина Вальнова</h3>
                            <p className="review__text">Доброжелательные подсказки <br/> на всех этапах помогут правильно заполнить <br/> поля и без затруднений купить авиа или ж/д <br/> билет, даже если вы заказываете онлайн билет <br/> впервые.</p>
                        </div>
                    </div>
                    <div className="review">
                        <div className="review__image review__image_male" />
                        <div className="review__content">
                            <h3 className="review__author">Евгений Стрыкало</h3>
                            <p className="review__text">СМС-сопровождение до посадки <br/> Сразу после оплаты ж/д билетов <br/> и за 3 часа до отправления мы пришлем вам <br/> СМС-напоминание о поездке.</p>
                        </div>
                    </div>
                </div>

                <div className="feedback__scroll">
                    <svg width="140" height="19" viewBox="0 0 140 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="9.66851" cy="9.5" rx="9.66851" ry="9.5" fill="#C4C4C4"/>
                            <ellipse cx="39.8343" cy="9.5" rx="9.66851" ry="9.5" fill="#E5E5E5"/>
                            <ellipse cx="70.0001" cy="9.5" rx="9.66851" ry="9.5" fill="#E5E5E5"/>
                            <ellipse cx="100.166" cy="9.5" rx="9.66851" ry="9.5" fill="#E5E5E5"/>
                            <ellipse cx="130.331" cy="9.5" rx="9.66851" ry="9.5" fill="#E5E5E5"/>
                    </svg>
                </div>

            </div>
        </section>
    )
}