import Layout from '../components/layout';

export default function Home() {

    return (
        <Layout title='首页'
                index>
            <>
                <div className="main-container js-quickedit-main-content">
                <section className="container">
                    <section
                        className="home-shortcut-menu clearfix"
                    >
                        <div className="col-xs-4 col-md-2 text-center home-shortcut-menu-item svg-animation">
                            <a
                                href="https://ebank.4001961200.com/pweb/loginfromdoor.do?TranType=InterbankTrsPre"
                                target="_blank"
                                className="link-black"
                            >
                                <div href="#" className="home-shortcut-menu-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={64}
                                        height={64}
                                        viewBox="0 0 64 64"
                                        id="svgTransfer"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <rect width={64} height={64} />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M32,58 C46.3594035,58 58,46.3594035 58,32 C58,17.6405965 46.3594035,6 32,6 C17.6405965,6 6,17.6405965 6,32 C6,46.3594035 17.6405965,58 32,58 Z"
                                            />{" "}
                                            <path
                                                stroke="#FA2814"
                                                strokeWidth={2}
                                                d="M20.8386241,24.5135856 L22.865393,25.6201548 L21.9731048,21.1846473 C19.0250373,25.6201548 18,29.1296087 18,32 C18,39.7319865 24.2680135,46 32,46 C34.2244237,46 36.3276799,45.4812205 38.1953793,44.5580511 M43.3638461,39.7409451 L41.1898276,38.4488854 L41.9788214,42.8252733 C44.6596071,38.8206722 46,35.2122477 46,32 C46,24.2680135 39.7319865,18 32,18 C29.8147505,18 27.7464384,18.5006679 25.9035152,19.3935521"
                                            />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M32,37 C34.7614237,37 37,34.7614237 37,32 C37,29.2385763 34.7614237,27 32,27 C29.2385763,27 27,29.2385763 27,32 C27,34.7614237 29.2385763,37 32,37 Z"
                                            />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeOpacity=".2"
                                                strokeWidth={5}
                                                d="M32,34.5 C33.3807119,34.5 34.5,33.3807119 34.5,32 C34.5,30.6192881 33.3807119,29.5 32,29.5 C30.6192881,29.5 29.5,30.6192881 29.5,32 C29.5,33.3807119 30.6192881,34.5 32,34.5 Z"
                                            />
                                        </g>
                                    </svg>
                                </div>{" "}
                                <span className="home-shortcut-menu-shadow" />{" "}
                                <p className="home-shortcut-menu-title text-center animated fadeInUp">
                                    转账汇款
                                </p>{" "}
                                <p className="home-shortcut-menu-subtitle animated fadeInUp">
                                    到账快，5折手续费
                                </p>
                            </a>
                        </div>{" "}
                        <div className="col-xs-4 col-md-2 text-center home-shortcut-menu-item svg-animation">
                            <a
                                href="https://ebank.4001961200.com/pweb/loginfromdoor.do?TranType=ProfolioProductPre"
                                target="_blank"
                                className="link-black"
                            >
                                <div href="#" className="home-shortcut-menu-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width={64}
                                        height={64}
                                        viewBox="0 0 64 64"
                                        id="svgMerchant"
                                    >
                                        <defs>
                                            <path
                                                id="icon-merchant-feature-copy-a"
                                                d="M22,56 C25.8659932,56 29,52.8659932 29,49 C29,45.1340068 25.8659932,42 22,42 C18.1340068,42 15,45.1340068 15,49 C15,52.8659932 18.1340068,56 22,56 Z"
                                            />{" "}
                                            <path
                                                id="icon-merchant-feature-copy-b"
                                                d="M46,56 C49.8659932,56 53,52.8659932 53,49 C53,45.1340068 49.8659932,42 46,42 C42.1340068,42 39,45.1340068 39,49 C39,52.8659932 42.1340068,56 46,56 Z"
                                            />
                                        </defs>{" "}
                                        <g fill="none" fillRule="evenodd">
                                            <rect width={64} height={64} />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M0,8 L12,8"
                                            />{" "}
                                            <polyline
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                points="13 41 13 46 46 46"
                                            />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M7.2198039,13 L12.7862555,40.8322581 L53.1388699,33.1460458 L56.8017873,13 L7.2198039,13 Z"
                                            />{" "}
                                            <use
                                                fill="#D2DDEE"
                                                xlinkHref="#icon-merchant-feature-copy-a"
                                            />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M22,55 C25.3137085,55 28,52.3137085 28,49 C28,45.6862915 25.3137085,43 22,43 C18.6862915,43 16,45.6862915 16,49 C16,52.3137085 18.6862915,55 22,55 Z"
                                            />{" "}
                                            <path
                                                fill="#FFF"
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M22,51 C23.1045695,51 24,50.1045695 24,49 C24,47.8954305 23.1045695,47 22,47 C20.8954305,47 20,47.8954305 20,49 C20,50.1045695 20.8954305,51 22,51 Z"
                                            />{" "}
                                            <use
                                                fill="#D2DDEE"
                                                xlinkHref="#icon-merchant-feature-copy-b"
                                            />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M46,55 C49.3137085,55 52,52.3137085 52,49 C52,45.6862915 49.3137085,43 46,43 C42.6862915,43 40,45.6862915 40,49 C40,52.3137085 42.6862915,55 46,55 Z"
                                            />{" "}
                                            <path
                                                fill="#FFF"
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M46,51 C47.1045695,51 48,50.1045695 48,49 C48,47.8954305 47.1045695,47 46,47 C44.8954305,47 44,47.8954305 44,49 C44,50.1045695 44.8954305,51 46,51 Z"
                                            />{" "}
                                            <path
                                                stroke="#FA2814"
                                                strokeWidth={2}
                                                d="M20 19L20 30M28 19L28 30M36 19L36 30M44 19L44 30"
                                            />
                                        </g>
                                    </svg>
                                </div>{" "}
                                <span className="home-shortcut-menu-shadow" />{" "}
                                <p className="home-shortcut-menu-title text-center animated fadeInUp">
                                    购买理财
                                </p>{" "}
                                <p className="home-shortcut-menu-subtitle animated fadeInUp">
                                    高收益
                                </p>
                            </a>
                        </div>{" "}
                        <div className="col-xs-4 col-md-2 text-center home-shortcut-menu-item svg-animation">
                            <a
                                href="https://ebank.4001961200.com/pweb/loginfromdoor.do?TranType=NetFinancialLoad"
                                target="_blank"
                                className="link-black"
                            >
                                <div href="#" className="home-shortcut-menu-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={64}
                                        height={64}
                                        viewBox="0 0 64 64"
                                        id="svgItaojin"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <rect width={64} height={64} />{" "}
                                            <path
                                                fill="#2057AC"
                                                fillOpacity=".2"
                                                d="M8.71389309,32 C10.4451626,36.8832934 13.5336723,41.8179435 17.8578644,46.1421356 C22.1820565,50.4663277 27.1167066,53.5548374 32,55.2861069 C36.8832934,53.5548374 41.8179435,50.4663277 46.1421356,46.1421356 C50.4663277,41.8179435 53.5548374,36.8832934 55.2861069,32 C53.5548374,27.1167066 50.4663277,22.1820565 46.1421356,17.8578644 C41.8179435,13.5336723 36.8832934,10.4451626 32,8.71389309 C27.1167066,10.4451626 22.1820565,13.5336723 17.8578644,17.8578644 C13.5336723,22.1820565 10.4451626,27.1167066 8.71389309,32 Z M17.8578644,46.1421356 C6.53265992,34.8169312 3.68341751,19.3043892 11.4939033,11.4939033 C19.3043892,3.68341751 34.8169312,6.53265992 46.1421356,17.8578644 C57.4673401,29.1830688 60.3165825,44.6956108 52.5060967,52.5060967 C44.6956108,60.3165825 29.1830688,57.4673401 17.8578644,46.1421356 Z"
                                            />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M12.3170404,51.6829596 C19.8140048,59.179924 34.7038565,56.4450533 45.5744549,45.5744549 C56.4450533,34.7038565 59.179924,19.8140048 51.6829596,12.3170404 C44.1859952,4.82007597 29.2961435,7.55494668 18.4255451,18.4255451 C7.55494668,29.2961435 4.82007597,44.1859952 12.3170404,51.6829596 Z"
                                            />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M18.4255451,45.5744549 C29.2961435,56.4450533 44.1859952,59.179924 51.6829596,51.6829596 C59.179924,44.1859952 56.4450533,29.2961435 45.5744549,18.4255451 C34.7038565,7.55494668 19.8140048,4.82007597 12.3170404,12.3170404 C4.82007597,19.8140048 7.55494668,34.7038565 18.4255451,45.5744549 Z"
                                            />{" "}
                                            <path
                                                stroke="#FA2814"
                                                strokeWidth={2}
                                                d="M32,42 C37.5228475,42 42,37.5228475 42,32 C42,26.4771525 37.5228475,22 32,22 C26.4771525,22 22,26.4771525 22,32 C22,37.5228475 26.4771525,42 32,42 Z"
                                            />{" "}
                                            <polygon
                                                stroke="#FA2814"
                                                strokeWidth={2}
                                                points="28.993 28.993 34.993 28.993 34.993 34.993 28.993 34.993"
                                                transform="rotate(45 31.993 31.993)"
                                            />
                                        </g>
                                    </svg>
                                </div>{" "}
                                <span className="home-shortcut-menu-shadow" />{" "}
                                <p className="home-shortcut-menu-title text-center animated fadeInUp">
                                    i淘金
                                </p>{" "}
                                <p className="home-shortcut-menu-subtitle animated fadeInUp">
                                    1分起投，不设购买上限
                                </p>
                            </a>
                        </div>{" "}
                        <div className="col-xs-4 col-md-2 text-center home-shortcut-menu-item svg-animation">
                            <a
                                href="https://ebank.4001961200.com/pweb/loginfromdoor.do?TranType=RCBNationWideTrsPre"
                                target="_blank"
                                className="link-black"
                            >
                                <div href="#" className="home-shortcut-menu-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width={64}
                                        height={64}
                                        viewBox="0 0 64 64"
                                        id="svgNongxin"
                                    >
                                        <defs>
                                            <circle
                                                id="icon-nongxin-feature-copy-a"
                                                cx={50}
                                                cy={46}
                                                r={4}
                                            />
                                        </defs>{" "}
                                        <g fill="none" fillRule="evenodd">
                                            <rect width={64} height={64} />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M11,8 L11,56 L51.5857864,56 L53,54.5857864 L53,8 L11,8 Z"
                                            />{" "}
                                            <rect
                                                width={2}
                                                height={12}
                                                x={31}
                                                y={22}
                                                fill="#FA2814"
                                            />{" "}
                                            <path
                                                fill="#D2DDEE"
                                                d="M50,60 C44.4771525,56 40,52.5228475 40,46 C40,40.4771525 44.4771525,36 50,36 C55.5228475,36 60,40.4771525 60,46 C60,52.5228475 55.5228475,56 50,60 Z M50,49 C51.6568542,49 53,47.6568542 53,46 C53,44.3431458 51.6568542,43 50,43 C48.3431458,43 47,44.3431458 47,46 C47,47.6568542 48.3431458,49 50,49 Z"
                                            />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M50,58.7626977 C56.8128281,53.766809 59,50.9897483 59,46 C59,41.0294373 54.9705627,37 50,37 C45.0294373,37 41,41.0294373 41,46 C41,50.9897483 43.1871719,53.766809 50,58.7626977 Z"
                                            />{" "}
                                            <use
                                                fill="#FFF"
                                                xlinkHref="#icon-nongxin-feature-copy-a"
                                            />{" "}
                                            <circle
                                                cx={50}
                                                cy={46}
                                                r={3}
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                            />{" "}
                                            <path
                                                stroke="#FA2814"
                                                strokeWidth={2}
                                                d="M32,22 L32,34"
                                            />{" "}
                                            <polyline
                                                stroke="#FA2814"
                                                strokeWidth={2}
                                                points="40 33 32 41 24.004 33"
                                            />
                                        </g>
                                    </svg>
                                </div>{" "}
                                <span className="home-shortcut-menu-shadow" />{" "}
                                <p className="home-shortcut-menu-title text-center animated fadeInUp">
                                    农信快存
                                </p>{" "}
                                <p className="home-shortcut-menu-subtitle animated fadeInUp">
                                    0手续费，轻松转账
                                </p>
                            </a>
                        </div>{" "}
                        <div className="col-xs-4 col-md-2 text-center home-shortcut-menu-item svg-animation">
                            <a
                                href="https://ebank.4001961200.com/pcc/prelogin.do?LoginType=E&_locale=zh_CN"
                                target="_blank"
                                className="link-black"
                            >
                                <div href="#" className="home-shortcut-menu-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={64}
                                        height={64}
                                        viewBox="0 0 64 64"
                                        id="svgCard"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M0 0h64v64H0z" />{" "}
                                            <path fill="#D2DDEE" d="M5 18h54v10H5z" />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M6 13h52v38H6z"
                                            />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M6 19h52v8H6z"
                                            />{" "}
                                            <path
                                                stroke="#FA2814"
                                                strokeWidth={2}
                                                d="M39.82 37l-1.6 8h11.96l1.6-8H39.82z"
                                            />{" "}
                                            <circle
                                                cx="11.5"
                                                cy="44.5"
                                                r="1.5"
                                                fill="#2057AC"
                                            />{" "}
                                            <circle
                                                cx="16.5"
                                                cy="44.5"
                                                r="1.5"
                                                fill="#2057AC"
                                            />{" "}
                                            <circle cx="21.5" cy="44.5" r="1.5" fill="#2057AC" />
                                        </g>
                                    </svg>
                                </div>{" "}
                                <span className="home-shortcut-menu-shadow" />{" "}
                                <p className="home-shortcut-menu-title text-center animated fadeInUp">
                                    信用卡
                                </p>{" "}
                                <p className="home-shortcut-menu-subtitle animated fadeInUp">
                                    积分计划，优惠不停
                                </p>
                            </a>
                        </div>{" "}
                        <div className="col-xs-4 col-md-2 text-center home-shortcut-menu-item svg-animation">
                            <a
                                href="https://ebank.4001961200.com/pweb/loginfromdoor.do?TranType=NetLoanPre"
                                target="_blank"
                                className="link-black"
                            >
                                <div href="#" className="home-shortcut-menu-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width={64}
                                        height={64}
                                        viewBox="0 0 64 64"
                                        id="svgLoan"
                                    >
                                        <defs>
                                            <polygon
                                                id="icon-loan-feature-copy-a"
                                                points="9 8 17 8 17 52 13 58 9 52"
                                            />
                                        </defs>{" "}
                                        <g fill="none" fillRule="evenodd">
                                            <rect width={64} height={64} />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M22,9 L22,55 L56,55 L56,16.4807211 L46.6460989,9 L22,9 Z"
                                                style={{
                                                    strokeDasharray: "155.143, 155.143",
                                                    strokeDashoffset: 0
                                                }}
                                            />{" "}
                                            <path
                                                stroke="#FA2814"
                                                strokeWidth={2}
                                                d="M45,49 C47.7614237,49 50,46.7614237 50,44 C50,41.2385763 47.7614237,39 45,39 C42.2385763,39 40,41.2385763 40,44 C40,46.7614237 42.2385763,49 45,49 Z"
                                                style={{
                                                    strokeDasharray: "31.4204, 31.4204",
                                                    strokeDashoffset: 0
                                                }}
                                            />{" "}
                                            <polyline
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                points="9 13 7 13 7 26"
                                                style={{
                                                    strokeDasharray: "15, 15",
                                                    strokeDashoffset: 0
                                                }}
                                            />{" "}
                                            <path
                                                stroke="#2057AC"
                                                strokeWidth={2}
                                                d="M29 21L43 21M29 25L47 25"
                                                style={{
                                                    strokeDasharray: "32, 32",
                                                    strokeDashoffset: 0
                                                }}
                                            />{" "}
                                            <g>
                                                <use
                                                    fill="#D2DDEE"
                                                    xlinkHref="#icon-loan-feature-copy-a"
                                                />{" "}
                                                <path
                                                    stroke="#2057AC"
                                                    strokeWidth={2}
                                                    d="M10,9 L10,51.6972244 L13,56.1972244 L16,51.6972244 L16,9 L10,9 Z"
                                                    style={{
                                                        strokeDasharray: "102.211, 102.211",
                                                        strokeDashoffset: 0
                                                    }}
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </div>{" "}
                                <span className="home-shortcut-menu-shadow" />{" "}
                                <p className="home-shortcut-menu-title text-center animated fadeInUp">
                                    小时贷
                                </p>{" "}
                                <p className="home-shortcut-menu-subtitle animated fadeInUp">
                                    线上申请，1小时放款
                                </p>
                            </a>
                        </div>
                    </section>
                </section>
                <section className="container">
                    <a id="main-content" />
                    <div className="region region-content">
                        <div className="views-element-container form-group">
                            <div className="view view-frontpage view-id-frontpage view-display-id-page_1 js-view-dom-id-c96c88534de5cd0d95cadb063ddff85e5aee926ec237240858a55d7e059b718e">
                                <div className="view-content ">
                                    <div className="frontpage-recommned">
                                        <div className="row">
                                            <div className="recommend-item col-md-4">
                                                <section className="bg-board clip-image-container image-scale panel-shadow hover-pointer">
                                                    <div className="field--type-image absolute-fill-full">
                                                        <img
                                                            src="/static/images/test/testad1.jpg"
                                                            width={2000}
                                                            height={1125}
                                                            typeof="foaf:Image"
                                                            className="img-responsive"
                                                        />
                                                    </div>
                                                    <div className="content-link">
                                                        <div className="front-board">
                                                            <div className="top-category">
                                                                <img
                                                                    width={24}
                                                                    height={24}
                                                                    alt="Activity"
                                                                    title="Activity"
                                                                    src="/static/images/svg/activity.svg"
                                                                />
                                                                <span>优惠活动 </span>
                                                                <span className="more pull-right">
                            <a
                                href="/taxonomy/term/12"
                                hrefLang="zh-hans"
                            >
                              更多
                            </a>
                          </span>
                                                            </div>
                                                            <div className="bottom-title">
                                                                <p> 优惠活动集锦！这张信用卡你值得拥有！ </p>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="/node/6791"
                                                            className="absolute-fill-full"
                                                        />
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="recommend-item col-md-4">
                                                <section className="bg-board clip-image-container image-scale panel-shadow hover-pointer">
                                                    <div className="field--type-image absolute-fill-full">
                                                        <img
                                                            src="/static/images/test/testad2.jpg"
                                                            width={600}
                                                            height={337}
                                                            typeof="foaf:Image"
                                                            className="img-responsive"
                                                        />
                                                    </div>
                                                    <div className="content-link">
                                                        <div className="front-board">
                                                            <div className="top-category">
                                                                <img
                                                                    width={24}
                                                                    height={24}
                                                                    alt="Phylogeny"
                                                                    title="Phylogeny"
                                                                    src="/static/images/svg/phylogeny.svg"
                                                                />
                                                                <span>行内风采 </span>
                                                                <span className="more pull-right">
                            <a
                                href="/bank-inter-style"
                                hrefLang="zh-hans"
                            >
                              更多
                            </a>
                          </span>
                                                            </div>
                                                            <div className="bottom-title">
                                                                <p>
                                                                    {" "}
                                                                    我行“社区金融大讲堂”成功举办——以粤港澳大湾区建设为契机 谋求深圳社区长远发展!{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="/node/6873"
                                                            className="absolute-fill-full"
                                                        />
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="recommend-item col-md-4">
                                                <section className="bg-board clip-image-container image-scale panel-shadow hover-pointer">
                                                    <div className="field--type-image absolute-fill-full">
                                                        <img
                                                            src="/static/images/test/testad3.jpg"
                                                            width={600}
                                                            height={449}
                                                            typeof="foaf:Image"
                                                            className="img-responsive"
                                                        />
                                                    </div>
                                                    <div className="content-link">
                                                        <div className="front-board">
                                                            <div className="top-category">
                                                                <img
                                                                    width={24}
                                                                    height={24}
                                                                    alt="Architecture"
                                                                    title="Architecture"
                                                                    src="/static/images/svg/architecture.svg"
                                                                />
                                                                <span>慈善基金 </span>
                                                                <span className="more pull-right">
                            <a
                                href="/taxonomy/term/214"
                                hrefLang="zh-hans"
                            >
                              更多
                            </a>
                          </span>
                                                            </div>
                                                            <div className="bottom-title">
                                                                <p> 深圳市慈善会·深圳农村商业银行慈善基金 </p>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="/charity-fund"
                                                            className="absolute-fill-full"
                                                        />
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section
                            id="block-gerenshouyetuijianchanpin"
                            className="block block-home-products-tab block-home-products-tab-block clearfix"
                        >
                            <section className="home-middle-tabs clearfix">
                                {/* Nav tabs */}
                                <ul
                                    className="nav nav-tabs common-tabs common-tabs-slider  home-products-tabs"
                                    role="tablist"
                                >
                                    <li role="presentation" className="active">
                                        <a
                                            href="#home-finance-products"
                                            aria-controls="home"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            <span className="icon icon-purse-title" />
                                            理财
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#home-fund-products"
                                            aria-controls="home"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            <span className="icon icon-fund-title" />
                                            基金
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a
                                            href="#home-security-products"
                                            aria-controls="home"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            <span className="icon icon-security-title" />
                                            保险
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a
                                            href="#home-loan-products"
                                            aria-controls="home"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            <span className="icon icon-loan-title" />
                                            贷款
                                        </a>
                                    </li>
                                    <li className="common-tabs-slider-line" />
                                </ul>
                                <div className="bg-full-pale-grey home-products-tab-bg" />
                                <div
                                    className="home-cards-container"
                                    id="home-finance-products"
                                >
                                    <div id="top-finance-products">
                                        {/**/}{" "}
                                        <ul className="home-cards row clearfix">
                                            <li className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="card-item text-left financing-card">
                                                    <p className="finacing-card-label home-finacing-card-label">
                      <span>
                        <span className="icon icon-recommend" /> 热门推荐
                      </span>{" "}
                                                        {/**/}
                                                    </p>{" "}
                                                    <p className="finacing-card-title">
                                                        财富专享系列理财产品7（六月盈）
                                                    </p>{" "}
                                                    <p className="finacing-card-id">CZX270007</p>{" "}
                                                    <div className="finacing-card-rate">
                                                        <p className="finacing-card-number">
                                                            4.20%
                                                        </p>{" "}
                                                        <p className="finacing-card-rate-help">
                                                            预期年化收益/净值
                                                        </p>
                                                    </div>{" "}
                                                    <div className="finacing-card-info">
                                                        <p>
                                                            <span>183</span>天
                                                        </p>{" "}
                                                        <p>
                                                            <span>1</span>万元起
                                                        </p>
                                                    </div>{" "}
                                                    <a
                                                        href="/finances/person/CZX270007"
                                                        className="finacing-card-more link-black"
                                                    >
                                                        查看详情
                                                        <img
                                                            src="/themes/szrcb/images/icons/icon-more-link-bule.svg"
                                                            className="icon-svg"
                                                        />
                                                    </a>{" "}
                                                    <a
                                                        href="/finances/person/CZX270007"
                                                        className="common-card-link"
                                                    />
                                                </div>
                                            </li>
                                            <li className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="card-item text-left financing-card">
                                                    <p className="finacing-card-label home-finacing-card-label">
                      <span>
                        <span className="icon icon-recommend" /> 热门推荐
                      </span>{" "}
                                                        {/**/}
                                                    </p>{" "}
                                                    <p className="finacing-card-title">
                                                        季稳盈第三期理财产品7
                                                    </p>{" "}
                                                    <p className="finacing-card-id">JWY120517</p>{" "}
                                                    <div className="finacing-card-rate">
                                                        <p className="finacing-card-number">
                                                            上期4.00%
                                                        </p>{" "}
                                                        <p className="finacing-card-rate-help">
                                                            预期年化收益/净值
                                                        </p>
                                                    </div>{" "}
                                                    <div className="finacing-card-info">
                                                        <p>
                                                            <span>92</span>天
                                                        </p>{" "}
                                                        <p>
                                                            <span>1</span>万元起
                                                        </p>
                                                    </div>{" "}
                                                    <a
                                                        href="/finances/person/JWY120517"
                                                        className="finacing-card-more link-black"
                                                    >
                                                        查看详情
                                                        <img
                                                            src="/themes/szrcb/images/icons/icon-more-link-bule.svg"
                                                            className="icon-svg"
                                                        />
                                                    </a>{" "}
                                                    <a
                                                        href="/finances/person/JWY120517"
                                                        className="common-card-link"
                                                    />
                                                </div>
                                            </li>
                                            <li className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="card-item text-left financing-card">
                                                    <p className="finacing-card-label home-finacing-card-label">
                      <span>
                        <span className="icon icon-recommend" /> 热门推荐
                      </span>{" "}
                                                        {/**/}
                                                    </p>{" "}
                                                    <p className="finacing-card-title">
                                                        货币天添盈第一期理财产品
                                                    </p>{" "}
                                                    <p className="finacing-card-id">TTY120001</p>{" "}
                                                    <div className="finacing-card-rate">
                                                        <p className="finacing-card-number">
                                                            3.50%
                                                        </p>{" "}
                                                        <p className="finacing-card-rate-help">
                                                            预期年化收益/净值
                                                        </p>
                                                    </div>{" "}
                                                    <div className="finacing-card-info">
                                                        <p>
                                                            <span>1</span>天
                                                        </p>{" "}
                                                        <p>
                                                            <span>1</span>万元起
                                                        </p>
                                                    </div>{" "}
                                                    <a
                                                        href="https://ebank.4001961200.com/pweb/loginfromdoor.do?TranType=ProfolioProductPre"
                                                        className="finacing-card-more link-black"
                                                    >
                                                        立即抢购
                                                        <img
                                                            src="/themes/szrcb/images/icons/icon-more-link-bule.svg"
                                                            className="icon-svg"
                                                        />
                                                    </a>{" "}
                                                    <a
                                                        href="/finances/person/TTY120001"
                                                        className="common-card-link"
                                                    />
                                                </div>
                                            </li>
                                            <li className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="card-item text-left financing-card">
                                                    <p className="finacing-card-label home-finacing-card-label">
                      <span>
                        <span className="icon icon-recommend" /> 热门推荐
                      </span>{" "}
                                                        {/**/}
                                                    </p>{" "}
                                                    <p className="finacing-card-title">
                                                        财富专享系列理财产品8（六月盈）
                                                    </p>{" "}
                                                    <p className="finacing-card-id">CZX270008</p>{" "}
                                                    <div className="finacing-card-rate">
                                                        <p className="finacing-card-number">
                                                            4.25%
                                                        </p>{" "}
                                                        <p className="finacing-card-rate-help">
                                                            预期年化收益/净值
                                                        </p>
                                                    </div>{" "}
                                                    <div className="finacing-card-info">
                                                        <p>
                                                            <span>183</span>天
                                                        </p>{" "}
                                                        <p>
                                                            <span>100</span>万元起
                                                        </p>
                                                    </div>{" "}
                                                    <a
                                                        href="/finances/person/CZX270008"
                                                        className="finacing-card-more link-black"
                                                    >
                                                        查看详情
                                                        <img
                                                            src="/themes/szrcb/images/icons/icon-more-link-bule.svg"
                                                            className="icon-svg"
                                                        />
                                                    </a>{" "}
                                                    <a
                                                        href="/finances/person/CZX270008"
                                                        className="common-card-link"
                                                    />
                                                </div>
                                            </li>
                                        </ul>{" "}
                                        <p className="home-section-link-more">
                                            <a
                                                href="/finance-products-list/P"
                                                className="link-blue link-hover-right"
                                            >
                                                查看全部理财产品
                                                <span className="icon-svg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                    >
                      <path
                          fill="#2057AC"
                          d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                      />
                    </svg>
                  </span>
                                            </a>
                                        </p>{" "}
                                        <input
                                            type="text"
                                            id="finance-product-type"
                                            defaultValue="个人"
                                            hidden="hidden"
                                        />
                                    </div>
                                </div>
                                <div
                                    id="home-fund-products"
                                    className="home-cards-container"
                                >
                                    {/**/}{" "}
                                    <ul className="home-cards row clearfix">
                                        <li className="col-xs-12 col-sm-6 col-md-3">
                                            <a
                                                href="/funds/003474"
                                                className="card-item text-left clip-image-container"
                                            >
                                                <p className="fund-card-label">
                    <span>
                      <span className="icon icon-recommend" />
                      热门推荐
                    </span>{" "}
                                                    <span className="fund-card-symbol">003474</span>
                                                </p>{" "}
                                                <div className="fund-card-title">
                                                    <p className="fund-card-name">南方天天利B</p>
                                                </div>{" "}
                                                <div className="fund-card-details">
                                                    <div className="fund-card-rate">
                                                        <p className="fund-card-number">2.94%</p>{" "}
                                                        <p className="fund-card-rate-help">七日年化回报率</p>
                                                    </div>{" "}
                                                    <div className="fund-card-info">
                                                        <p>
                                                            <span>1.000</span>净值
                                                        </p>{" "}
                                                        <p className="fund-card-risk">暂无</p> <p />
                                                    </div>
                                                </div>{" "}
                                                <div className="fund-card-stars">
                                                    {" "}
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" /> {/**/}
                                                </div>{" "}
                                                <span className="fund-card-more link-black">
                    查看详情
                    <span className="icon-svg icon icon-more-link-bule" />
                  </span>
                                            </a>
                                        </li>
                                        <li className="col-xs-12 col-sm-6 col-md-3">
                                            <a
                                                href="/funds/000917"
                                                className="card-item text-left clip-image-container"
                                            >
                                                <p className="fund-card-label">
                    <span>
                      <span className="icon icon-recommend" />
                      热门推荐
                    </span>{" "}
                                                    <span className="fund-card-symbol">000917</span>
                                                </p>{" "}
                                                <div className="fund-card-title">
                                                    <p className="fund-card-name">嘉实机构快线货币A</p>
                                                </div>{" "}
                                                <div className="fund-card-details">
                                                    <div className="fund-card-rate">
                                                        <p className="fund-card-number">2.78%</p>{" "}
                                                        <p className="fund-card-rate-help">七日年化回报率</p>
                                                    </div>{" "}
                                                    <div className="fund-card-info">
                                                        <p>
                                                            <span>1.000</span>净值
                                                        </p>{" "}
                                                        <p className="fund-card-risk">暂无</p> <p />
                                                    </div>
                                                </div>{" "}
                                                <div className="fund-card-stars">
                                                    {" "}
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" /> {/**/}
                                                </div>{" "}
                                                <span className="fund-card-more link-black">
                    查看详情
                    <span className="icon-svg icon icon-more-link-bule" />
                  </span>
                                            </a>
                                        </li>
                                        <li className="col-xs-12 col-sm-6 col-md-3">
                                            <a
                                                href="/funds/202303"
                                                className="card-item text-left clip-image-container"
                                            >
                                                <p className="fund-card-label">
                    <span>
                      <span className="icon icon-recommend" />
                      热门推荐
                    </span>{" "}
                                                    <span className="fund-card-symbol">202303</span>
                                                </p>{" "}
                                                <div className="fund-card-title">
                                                    <p className="fund-card-name">南方理财14天A</p>
                                                </div>{" "}
                                                <div className="fund-card-details">
                                                    <div className="fund-card-rate">
                                                        <p className="fund-card-number">3.48%</p>{" "}
                                                        <p className="fund-card-rate-help">近一年回报率</p>
                                                    </div>{" "}
                                                    <div className="fund-card-info">
                                                        <p>
                                                            <span>1.000</span>净值
                                                        </p>{" "}
                                                        <p className="fund-card-risk">暂无</p> <p />
                                                    </div>
                                                </div>{" "}
                                                <div className="fund-card-stars">
                                                    <div className="star-five-alight" />
                                                    <div className="star-five-alight" />
                                                    <div className="star-five-alight" />{" "}
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" /> {/**/}
                                                </div>{" "}
                                                <span className="fund-card-more link-black">
                    查看详情
                    <span className="icon-svg icon icon-more-link-bule" />
                  </span>
                                            </a>
                                        </li>
                                        <li className="col-xs-12 col-sm-6 col-md-3">
                                            <a
                                                href="/funds/001878"
                                                className="card-item text-left clip-image-container"
                                            >
                                                <p className="fund-card-label">
                    <span>
                      <span className="icon icon-recommend" />
                      热门推荐
                    </span>{" "}
                                                    <span className="fund-card-symbol">001878</span>
                                                </p>{" "}
                                                <div className="fund-card-title">
                                                    <p className="fund-card-name">嘉实沪港深精选股票</p>
                                                </div>{" "}
                                                <div className="fund-card-details">
                                                    <div className="fund-card-rate">
                                                        <p className="fund-card-number">-2.16%</p>{" "}
                                                        <p className="fund-card-rate-help">近一年回报率</p>
                                                    </div>{" "}
                                                    <div className="fund-card-info">
                                                        <p>
                                                            <span>1.504</span>净值
                                                        </p>{" "}
                                                        <p className="fund-card-risk">暂无</p> <p />
                                                    </div>
                                                </div>{" "}
                                                <div className="fund-card-stars">
                                                    {" "}
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" />
                                                    <div className="star-five-extinct" /> {/**/}
                                                </div>{" "}
                                                <span className="fund-card-more link-black">
                    查看详情
                    <span className="icon-svg icon icon-more-link-bule" />
                  </span>
                                            </a>
                                        </li>
                                    </ul>{" "}
                                    <p className="home-section-link-more">
                                        <a
                                            href="/fund-products-list"
                                            className="link-blue link-hover-right"
                                        >
                                            查看全部基金产品
                                            <span className="icon-svg">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                  >
                    <path
                        fill="#2057AC"
                        d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                    />
                  </svg>
                </span>
                                        </a>
                                    </p>
                                </div>
                            </section>
                        </section>
                        <section
                            className="views-element-container block block-views block-views-blockhome-products-list-block-2 clearfix"
                            id="block-views-block-home-products-list-block-2"
                        >
                            <div className="form-group">
                                <div className="view view-home-products-list view-id-home_products_list view-display-id-block_2 js-view-dom-id-72069027088b9a136757d559cf9678c69e59e8134f3da1b73005606723b90557">
                                    <div className="view-content ">
                                        <div
                                            className="home-cards-container home-security"
                                            id="home-security-products"
                                        >
                                            <ul className="home-cards row clearfix">
                                                <li className="col-xs-12 col-sm-6 col-md-3">
                                                    <div className="card-item text-left clip-image-container">
                                                        <a
                                                            href="/node/376"
                                                            className="cover-card-link"
                                                        />
                                                        <div className="views-field views-field-field-image">
                                                            <div className="field-content">
                                                                {" "}
                                                                <img
                                                                    src="/sites/default/files/2018-12/%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%901.jpg"
                                                                    width={1920}
                                                                    height={1080}
                                                                    typeof="foaf:Image"
                                                                    className="img-responsive"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="views-field views-field-title">
                        <span className="field-content">
                          中意年年优悦两全保险
                        </span>
                                                        </div>
                                                        <div className="views-field views-field-body">
                                                            <div className="field-content">
                                                                保险公司：中意人寿保险有限公司 产品简介
                                                                中意年年优悦两全保险是中意人寿推出的财富稳健增值计划，既保证客户资金安全稳健增值，又兼顾多重高额意外保障的保险理财计划，可满足家庭规划不同阶段的需求…
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="/node/376"
                                                            className="security-card-more link-black"
                                                        >
                                                            查看详情<span className="icon icon-svg icon-more-link-bule" />
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-3">
                                                    <div className="card-item text-left clip-image-container">
                                                        <a
                                                            href="/node/447"
                                                            className="cover-card-link"
                                                        />
                                                        <div className="views-field views-field-field-image">
                                                            <div className="field-content">
                                                                {" "}
                                                                <img
                                                                    src="/sites/default/files/2018-12/%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%902%20%284%29.jpg"
                                                                    width={1920}
                                                                    height={1080}
                                                                    typeof="foaf:Image"
                                                                    className="img-responsive"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="views-field views-field-title">
                        <span className="field-content">
                          中意悦享安康重大疾病保险
                        </span>
                                                        </div>
                                                        <div className="views-field views-field-body">
                                                            <div className="field-content">
                                                                保险公司：中意人寿保险有限公司 产品简介
                                                                中意悦享安康重大疾病保险是一款终身重大疾病保险产品，多种缴费方式可灵活选择，50种重疾+10种轻症疾病，重疾轻症可二次赔付且不分组类，双重豁免人性关爱，…
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="/node/447"
                                                            className="security-card-more link-black"
                                                        >
                                                            查看详情<span className="icon icon-svg icon-more-link-bule" />
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-3">
                                                    <div className="card-item text-left clip-image-container">
                                                        <a
                                                            href="/node/395"
                                                            className="cover-card-link"
                                                        />
                                                        <div className="views-field views-field-field-image">
                                                            <div className="field-content">
                                                                {" "}
                                                                <img
                                                                    src="/sites/default/files/2018-12/%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%903.jpg"
                                                                    width={1920}
                                                                    height={1080}
                                                                    typeof="foaf:Image"
                                                                    className="img-responsive"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="views-field views-field-title">
                        <span className="field-content">
                          信泰保险千万传承终身寿险B款
                        </span>
                                                        </div>
                                                        <div className="views-field views-field-body">
                                                            <div className="field-content">
                                                                保险公司：信泰人寿保险股份有限公司 &nbsp; 适用人群：
                                                                为自己和家人做长期财务规划的客户； 需要实现资产保全、传承功能的客户；
                                                                需要为子女准备教育金的客户； 为自己准备养老金的客户…
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="/node/395"
                                                            className="security-card-more link-black"
                                                        >
                                                            查看详情<span className="icon icon-svg icon-more-link-bule" />
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <p className="home-section-link-more">
                                                <a
                                                    href="/taxonomy/term/237"
                                                    className="link-blue link-hover-right"
                                                >
                                                    查看全部保险产品
                                                    <span className="icon-svg">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                      >
                        <path
                            fill="#2057AC"
                            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                        />
                      </svg>
                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            className="views-element-container block block-views block-views-blockhome-products-list-block-1 clearfix"
                            id="block-views-block-home-products-list-block-1"
                        >
                            <div className="form-group">
                                <div className="view view-home-products-list view-id-home_products_list view-display-id-block_1 js-view-dom-id-b469e18372b20e8019b000a832b9acd25ec1eb56ce1d0697579bf5f2db4ed3d2">
                                    <div className="view-content ">
                                        <div
                                            className="home-cards-container home-loan"
                                            id="home-loan-products"
                                        >
                                            <ul className="home-cards row clearfix">
                                                <li className="col-xs-12 col-sm-6 col-md-3">
                                                    <div className="card-item text-left clip-image-container">
                                                        <a
                                                            href="/node/356"
                                                            className="cover-card-link"
                                                        />
                                                        <div className="views-field views-field-title">
                        <span className="field-content">
                          个人综合授信额度
                        </span>
                                                        </div>
                                                        <div className="views-field views-field-body">
                                                            <div className="field-content">
                                                                个人综合授信额度是指借款合同一次签订，在合同规定的有效期内，允许借款人随时提取、随时归还、无限次循环使用额度的贷款业务。
                                                                &nbsp; 服务特色 一、授信额度高 最高可达人民币2000万元。 二、
                                                            </div>
                                                        </div>
                                                        <div className="views-field views-field-field-image">
                                                            <div className="field-content">
                                                                {" "}
                                                                <img
                                                                    src="/sites/default/files/2018-01/%E5%85%AC%E7%A7%AF%E8%B4%B7%E9%A6%96%E5%9B%BE283x160px.jpg"
                                                                    width={283}
                                                                    height={160}
                                                                    typeof="foaf:Image"
                                                                    className="img-responsive"
                                                                />
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="/node/356"
                                                            className="loan-card-more link-black"
                                                        >
                                                            查看详情<span className="icon icon-svg icon-more-link-bule" />
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-3">
                                                    <div className="card-item text-left clip-image-container">
                                                        <a
                                                            href="/node/286"
                                                            className="cover-card-link"
                                                        />
                                                        <div className="views-field views-field-title">
                        <span className="field-content">
                          商业用房按揭贷款
                        </span>
                                                        </div>
                                                        <div className="views-field views-field-body">
                                                            <div className="field-content">
                                                                个人商业用房按揭贷款是指自然人申请的以购置商业用房（如商铺，写字楼）为目的，并以所购房产作抵押，采用分期付款方式归还的贷款。
                                                                &nbsp; 服务特色 一、成数高 若所购商业用房为一手，
                                                            </div>
                                                        </div>
                                                        <div className="views-field views-field-field-image">
                                                            <div className="field-content">
                                                                {" "}
                                                                <img
                                                                    src="/sites/default/files/2018-01/%E9%94%99%E8%83%BD%E6%94%B9_0.jpg"
                                                                    width={400}
                                                                    height={225}
                                                                    typeof="foaf:Image"
                                                                    className="img-responsive"
                                                                />
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="/node/286"
                                                            className="loan-card-more link-black"
                                                        >
                                                            查看详情<span className="icon icon-svg icon-more-link-bule" />
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-3">
                                                    <div className="card-item text-left clip-image-container">
                                                        <a
                                                            href="/node/290"
                                                            className="cover-card-link"
                                                        />
                                                        <div className="views-field views-field-title">
                                                            <span className="field-content">个人消费贷款</span>
                                                        </div>
                                                        <div className="views-field views-field-body">
                                                            <div className="field-content">
                                                                个人消费贷款是指自然人申请的用于个人消费用途的贷款。 &nbsp; 服务特色
                                                                一、用途广泛 购车、旅游、装修、消费、婚庆…各种用途任您选择。 二、金额高
                                                                最高可达人民币500万元。 三
                                                            </div>
                                                        </div>
                                                        <div className="views-field views-field-field-image">
                                                            <div className="field-content">
                                                                {" "}
                                                                <img
                                                                    src="/sites/default/files/2017-12/%E6%B6%88%E8%B4%B9%E8%B4%B7.jpg"
                                                                    width={550}
                                                                    height={411}
                                                                    typeof="foaf:Image"
                                                                    className="img-responsive"
                                                                />
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="/node/290"
                                                            className="loan-card-more link-black"
                                                        >
                                                            查看详情<span className="icon icon-svg icon-more-link-bule" />
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-3">
                                                    <div className="card-item text-left clip-image-container">
                                                        <a
                                                            href="/node/429"
                                                            className="cover-card-link"
                                                        />
                                                        <div className="views-field views-field-title">
                                                            <span className="field-content">个人经营贷款</span>
                                                        </div>
                                                        <div className="views-field views-field-body">
                                                            <div className="field-content">
                                                                个人经营贷款是指自然人申请的用于解决经营过程中资金周转需求的贷款。 &nbsp;
                                                                服务特色 一、金额高 最高可达人民币2000万元。 二、担保灵活
                                                                支持多种担保方式，包括抵押、质押、保证
                                                            </div>
                                                        </div>
                                                        <div className="views-field views-field-field-image">
                                                            <div className="field-content">
                                                                {" "}
                                                                <img
                                                                    src="/sites/default/files/2018-01/4_0.jpg"
                                                                    width={2500}
                                                                    height={1406}
                                                                    typeof="foaf:Image"
                                                                    className="img-responsive"
                                                                />
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="/node/429"
                                                            className="loan-card-more link-black"
                                                        >
                                                            查看详情<span className="icon icon-svg icon-more-link-bule" />
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <p className="home-section-link-more">
                                                <a
                                                    href="/loan-products"
                                                    className="link-blue link-hover-right"
                                                >
                                                    查看全部贷款产品
                                                    <span className="icon-svg">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                      >
                        <path
                            fill="#2057AC"
                            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                        />
                      </svg>
                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div
                            className="search-block-form"
                            data-drupal-selector="search-block-form"
                            id="block-sousuobiaodan"
                            role="search"
                        >
                            <form
                                action="/search/node"
                                method="get"
                                id="search-block-form"
                                acceptCharset="UTF-8"
                            >
                                <div className="form-type-search">
                                    <div className="container">
                                        <div className="input-group-common">
                                            <input
                                                data-drupal-selector="edit-keys"
                                                className="form-search"
                                                required="required"
                                                autoComplete="off"
                                                placeholder="输入关键字对全站进行搜索"
                                                type="search"
                                                id="edit-keys"
                                                name="keys"
                                            />
                                            <a className="form-search-clear">
                                                <span className="icon icon-close-gray" />
                                            </a>
                                            <input
                                                className="form-search-button"
                                                type="submit"
                                                defaultValue="搜索"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="overlay" />
                        </div>
                        <section className="home-section row clearfix">
                            <div className="bg-full-pale-grey home-notifications-bg" />
                            <div
                                className="views-element-container block block-views block-views-blockhome-recommend-news-block-2 clearfix col-md-6 home-recommand-news"
                                id="block-views-block-home-recommend-news-block-2"
                            >
                                <h5 className="block-title panel-title-with-icon">
                                    <span className="icon panel-title-icon icon-logo" />
                                    通知公告
                                </h5>
                                <div className="form-group">
                                    <div className="view view-home-recommend-news view-id-home_recommend_news view-display-id-block_2 js-view-dom-id-8738a747154bd24e99215e5fb87efb4490331a250c509c93c60edfac6a29f55c">
                                        <div className="view-content ">
                                            <div className="item-list">
                                                <ul>
                                                    <li>
                                                        <div className="views-field views-field-created">
                        <span className="field-content">
                          2019-04-19
                        </span>
                                                        </div>
                                                        <div className="views-field views-field-title">
                        <span className="field-content">
                          <a href="/node/7230" hrefLang="zh-hans">
                            深圳农村商业银行单位大额存单 2019年第8期发行公告
                          </a>
                        </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="views-field views-field-created">
                        <span className="field-content">
                          2019-04-17
                        </span>
                                                        </div>
                                                        <div className="views-field views-field-title">
                        <span className="field-content">
                          <a href="/node/7213" hrefLang="zh-hans">
                            关于部分业务系统升级维护的通知
                          </a>
                        </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="views-field views-field-created">
                        <span className="field-content">
                          2019-04-12
                        </span>
                                                        </div>
                                                        <div className="views-field views-field-title">
                        <span className="field-content">
                          <a href="/node/7111" hrefLang="zh-hans">
                            深圳农村商业银行个人大额存单 2019年第3期发行公告
                          </a>
                        </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="views-field views-field-created">
                        <span className="field-content">
                          2019-04-10
                        </span>
                                                        </div>
                                                        <div className="views-field views-field-title">
                        <span className="field-content">
                          <a href="/node/6999" hrefLang="zh-hans">
                            关于部分业务系统升级维护的通知
                          </a>
                        </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="views-field views-field-created">
                        <span className="field-content">
                          2019-04-10
                        </span>
                                                        </div>
                                                        <div className="views-field views-field-title">
                        <span className="field-content">
                          <a href="/node/6997" hrefLang="zh-hans">
                            "新春开卡，消费有礼"营销活动3月份获奖名单公告
                          </a>
                        </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="home-section-link-more">
                                    <a
                                        href="/notifications"
                                        className="link-blue link-hover-right"
                                    >
                                        查看全部通知公告
                                        <span className="icon-svg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                >
                  <path
                      fill="#2057AC"
                      d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  />
                </svg>
              </span>
                                    </a>
                                </p>
                            </div>
                            <div className="bg-full-pale-grey home-notifications-bg" />
                            <div className="col-md-6">
                                <h5 className="panel-title-with-icon">
                                    <span className="icon panel-title-icon icon-calculator-title" />
                                    金融小助手
                                </h5>
                                <div className="home-financial-assistant common-financial-assistant">
                                    <div className="row">
                                        <div className="col-xs-4 text-center financial-item">
                                            <a className="icon-circle" href="/finance-calculator">
                                                <span className="icon icon-calculator-tools" />
                                            </a>
                                            <p>
                                                <a
                                                    href="/finance-calculator"
                                                    className="link link-black text-center"
                                                >
                                                    理财计算器
                                                </a>
                                            </p>
                                        </div>
                                        <div className="col-xs-4 text-center financial-item">
                                            <a className="icon-circle" href="/loan-interest-rate">
                                                <span className="icon icon-loan-tools" />
                                            </a>
                                            <p>
                                                <a
                                                    href="/loan-interest-rate"
                                                    className="link link-black text-center"
                                                >
                                                    贷款利率
                                                </a>
                                            </p>
                                        </div>
                                        <div className="col-xs-4 text-center financial-item">
                                            <a
                                                className="icon-circle"
                                                href="/deposit-interest-rate"
                                            >
                                                <span className="icon icon-save-tools" />
                                            </a>
                                            <p>
                                                <a
                                                    href="/deposit-interest-rate"
                                                    className="link link-black text-center"
                                                >
                                                    存款利率
                                                </a>
                                            </p>
                                        </div>
                                        <div className="col-xs-4 text-center financial-item">
                                            <a className="icon-circle" href="/exchange-rate">
                                                <span className="icon icon-price-tools" />
                                            </a>
                                            <p>
                                                <a
                                                    href="/exchange-rate"
                                                    className="link link-black text-center"
                                                >
                                                    外汇牌价
                                                </a>
                                            </p>
                                        </div>
                                        <div className="col-xs-4 text-center financial-item">
                                            <a
                                                className="icon-circle"
                                                href="/finance-products-list/P"
                                            >
                                                <span className="icon icon-finance-tools" />
                                            </a>
                                            <p>
                                                <a
                                                    href="/finance-products-list/P"
                                                    className="link link-black text-center"
                                                >
                                                    理财产品
                                                </a>
                                            </p>
                                        </div>
                                        <div className="col-xs-4 text-center financial-item">
                                            <a className="icon-circle" href="/fund-products-list">
                                                <span className="icon icon-fund-tools" />
                                            </a>
                                            <p>
                                                <a
                                                    href="/fund-products-list"
                                                    className="link link-black text-center"
                                                >
                                                    基金净值
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>

            </>
        </Layout>
    )
}

