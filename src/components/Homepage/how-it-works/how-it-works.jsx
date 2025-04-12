import './how-it-works.css'

export default function HowItWorks() {
    return (
        <section className="content-container content-container_how-it-works" id="how-it-works">
            
            <div className="how-it-works">

                <div className="how-it-works__header">
                    <h2 className="how-it-works__title">Как это работает</h2>
                    <button type="button" className="how-it-works__learn-more-button homepage-interactive-button">Узнать больше</button>
                </div>

                <div className="how-it-works__main">
                    <div className="how-it-works__feature">
                        <div className="how-it-works__icon">
                            <svg width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="81" cy="81" r="81" fill="#E5E5E5" fill-opacity="0.2"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M81 149.097C118.213 149.097 148.381 118.93 148.381 81.7168C148.381 44.5035 118.213 14.3363 81 14.3363C43.7868 14.3363 13.6195 44.5035 13.6195 81.7168C13.6195 118.93 43.7868 149.097 81 149.097ZM87.8829 109.11V102.337H90.3625H110.883C115.97 102.294 118.621 99.6359 118.621 94.4916V55.3099C118.621 50.1658 115.97 47.4651 110.883 47.4651H51.0744C46.1153 47.4651 43.3793 50.1658 43.3793 55.1385V94.7488C43.3793 99.55 46.1153 102.294 50.9034 102.379H71.8514H74.0316V109.281H67.4908V115.969H94.5521V109.11H87.8829ZM50.3904 54.4526H111.738V95.3062H50.3904V54.4526Z" fill="white"/>
                            </svg>
                        </div>
                        <span className="how-it-works__text">Удобный заказ <br /> на сайте</span>
                    </div>
                    <div className="how-it-works__feature">
                        <div className="how-it-works__icon">
                            <svg width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="81" cy="81" r="81" fill="#E5E5E5" fill-opacity="0.2"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M81.7168 149.097C118.93 149.097 149.097 118.93 149.097 81.7168C149.097 44.5035 118.93 14.3363 81.7168 14.3363C44.5036 14.3363 14.3363 44.5035 14.3363 81.7168C14.3363 118.93 44.5036 149.097 81.7168 149.097ZM48.0266 51.3956V111.701H115.126V64.7032H81.4922V51.3956H48.0266ZM108.332 71.6659V105.075C99.4042 105.075 90.7009 105.075 81.8291 105.132V98.5059H88.1741V91.824H81.773V85.0298H88.118V78.2356H81.7168V71.6659H108.332ZM54.8207 64.5348V58.1337H61.2219V64.5348H54.8207ZM74.698 64.5348H68.1846V58.1898H74.698V64.5348ZM61.1657 78.0671H54.7646V71.6659H61.1657V78.0671ZM74.698 77.9548H68.1846V71.6097H74.698V77.9548ZM54.7646 85.1421H61.278V91.4871H54.7646V85.1421ZM68.2968 91.5432V85.0298H74.6418V91.5432H68.2968ZM61.2219 104.907H54.7085V98.6182H61.2219V104.907ZM74.6418 98.6182V105.132H68.2968V98.6182H74.6418ZM101.65 78.3479V84.749H95.1929V78.3479H101.65ZM101.706 98.2251V91.9363H95.1929V98.2251H101.706Z" fill="white"/>
                            </svg>
                        </div>
                        <span className="how-it-works__text">Нет необходимости <br /> ехать в офис</span>
                    </div>
                    <div className="how-it-works__feature">
                        <div className="how-it-works__icon">
                            <svg width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="81" cy="81" r="81" fill="#E5E5E5" fill-opacity="0.2"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M81.0001 149.097C118.213 149.097 148.381 118.93 148.381 81.7168C148.381 44.5035 118.213 14.3363 81.0001 14.3363C43.7868 14.3363 13.6195 44.5035 13.6195 81.7168C13.6195 118.93 43.7868 149.097 81.0001 149.097ZM85.512 45.7806H76.5336C75.9578 45.9211 75.389 46.0616 74.8203 46.2021C74.2527 46.3423 73.6851 46.4824 73.1106 46.6226C66.5171 48.0819 60.8214 51.1689 55.9955 55.8837C50.7769 60.9352 47.3538 66.969 45.8948 74.0692C44.2956 81.7869 44.9689 89.2799 48.2236 96.4924C51.7308 104.238 57.3143 110.019 64.8336 113.864C69.9401 116.474 75.4113 117.681 81.1631 117.653C89.2437 117.625 96.5105 115.211 102.88 110.3C110.203 104.659 114.776 97.2782 116.431 88.1293C116.506 87.6804 116.631 87.2565 116.755 86.8325C116.818 86.6204 116.88 86.4082 116.936 86.1929V77.2124C116.656 76.0618 116.375 74.9392 116.123 73.7886C114.664 67.1935 111.549 61.5245 106.864 56.6696C101.729 51.3934 95.5846 47.9977 88.4019 46.4542C87.4199 46.2577 86.4659 46.0051 85.512 45.7806ZM64.2164 65.4255C63.1502 70.1122 62.3926 74.9392 62.3365 80.0469H48.1395C48.5042 73.1992 50.7488 67.1935 54.733 61.8052C57.8754 63.012 60.9617 64.1907 64.2164 65.4255ZM107.285 61.8333C111.297 67.1094 113.513 73.1711 113.934 80.0469H99.7371C99.5968 75.0795 98.9796 70.1964 97.8011 65.4816C100.972 64.2749 104.03 63.0962 107.285 61.8333ZM54.761 101.572C50.7488 96.324 48.5042 90.2622 48.1114 83.3303H62.2804C62.4487 88.3258 63.0099 93.2089 64.2444 97.9237C61.074 99.1305 58.0157 100.309 54.761 101.572ZM107.313 101.572C104.114 100.337 101.028 99.1584 97.9134 97.9799C98.054 97.146 98.209 96.3013 98.3655 95.4484C98.6462 93.9188 98.9318 92.3629 99.1479 90.7954C99.3793 88.9646 99.5319 87.1337 99.6884 85.2554C99.7406 84.6289 99.7932 83.9972 99.8494 83.3584H113.906C113.569 90.2061 111.297 96.2399 107.313 101.572ZM79.2832 67.5583C79.5358 68.5406 79.5919 78.5314 79.2832 80.0469C74.7098 80.0469 70.1085 80.0469 65.3387 80.075C65.4789 75.3041 66.0401 70.6454 67.2466 66.1832C69.6459 66.4462 71.9972 66.7189 74.3342 66.9899C75.987 67.1815 77.6327 67.3723 79.2832 67.5583ZM88.6833 96.5222C86.6652 96.2902 84.6472 96.058 82.6221 95.8188V83.5549C83.6041 83.2181 94.4623 83.1058 96.5667 83.3865C97.0156 85.6316 95.7249 95.0612 94.7148 97.222C92.6996 96.9841 90.6915 96.7532 88.6833 96.5222ZM94.799 66.2113C96.0335 70.5892 96.5667 75.2479 96.735 80.075C91.9933 80.075 87.3918 80.075 82.6782 80.103V67.5864C84.0201 67.4341 85.3686 67.2817 86.7267 67.1284C89.3724 66.8296 92.0551 66.5265 94.799 66.2113ZM67.2466 97.194C66.0121 92.816 65.507 88.1573 65.3106 83.3303H79.3674V95.8469C75.4113 96.2679 71.4271 96.7169 67.2466 97.194ZM82.8185 64.303C82.5098 63.1243 82.4818 50.5234 82.7904 49.0081C84.2775 49.3447 85.4559 50.0745 86.522 50.9725C88.0372 52.1792 89.2156 53.6947 90.2537 55.2943C91.8249 57.6798 92.9753 60.2617 93.8731 63.0962C90.1695 63.8258 86.522 64.303 82.8185 64.303ZM79.2271 99.0743C79.5358 100.309 79.5638 112.938 79.2552 114.397C77.7681 114.061 76.5897 113.331 75.4955 112.461C73.9803 111.254 72.8581 109.711 71.7639 108.139C70.7538 106.652 68.6775 102.47 68.2286 100.309C71.876 99.5514 75.5236 99.1305 79.2271 99.0743ZM79.171 48.98C79.5358 50.0464 79.6479 61.8894 79.3394 64.303C75.5516 64.2749 71.9322 63.8539 68.2847 63.0681C68.3408 62.7313 68.3127 62.5068 68.3969 62.2823C69.6876 58.6901 71.371 55.3224 73.8962 52.4598C75.0185 51.197 76.3091 50.1306 77.8804 49.457C78.2496 49.2848 78.6403 49.1555 79.0149 49.0317L79.171 48.98ZM82.8746 114.425C82.5098 113.359 82.3696 101.544 82.7062 99.1024C86.494 99.1305 90.1134 99.5514 93.7328 100.309C93.6767 100.702 93.6767 100.983 93.5925 101.235C92.33 104.687 90.7307 107.943 88.3177 110.721C87.1674 112.068 85.8206 113.219 84.1652 113.948C83.7444 114.145 83.2955 114.285 82.8746 114.425ZM56.9214 59.2234C61.0739 54.9015 65.7876 51.8705 71.4552 50.3551C68.5092 53.9473 66.6573 58.0447 65.1142 62.3385C62.2804 61.5526 59.6149 60.6826 56.9214 59.2234ZM90.4501 50.4393C93.8731 50.4954 101.898 55.3224 105.04 59.2794C102.431 60.6826 99.7932 61.6368 96.9314 62.3665C95.3882 58.0447 93.5364 53.9192 90.4501 50.4393ZM71.5113 113.05C65.7876 111.563 61.1301 108.476 56.8934 104.182C59.6149 102.723 62.2524 101.797 65.1423 101.039C66.6854 105.361 68.5372 109.486 71.5113 113.05ZM96.9033 101.095C99.7371 101.768 102.375 102.751 105.18 104.154C100.944 108.504 96.258 111.563 90.5623 113.078C93.4803 109.514 95.3882 105.445 96.9033 101.095Z" fill="white"/>
                            </svg>
                        </div>
                        <span className="how-it-works__text">Огромный выбор <br /> направлений</span>
                    </div>
                </div>

            </div> 
            
        </section>
    )
}