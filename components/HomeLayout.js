import Link from "next/link";
import {useIntl} from "react-intl";
import {languages} from "../constants/languages";
import {LOCALES} from "../intl/locales";
import {useDispatch} from "react-redux";
import {setLocale} from "../redux/reducers/main";
import { bubble as Menu } from 'react-burger-menu'



export default function HomeLayout({children}) {
    const dispatch = useDispatch();
    const {formatMessage, locale} = useIntl();
    // noinspection JSUnresolvedFunction
    return (
        <>
            <div className='header1'>
                <div className="select">
                    <div className="select_block">
                        <select name="main" value={locale} onChange={(e) => dispatch(setLocale(e.target.value))}>
                            {languages.map((elem, i) => (
                                <option key={LOCALES[elem.key]} value={LOCALES[elem.key]}>{elem.flag}{elem.text}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="container">
                    <div className="header">
                        <div className="header__logo col-lg-3 col-md-3">
                           <img src={require('../pages/images/Logo MED.png').default.src} alt=""/>
                        </div>
                        <nav className='header__navbar col-lg-9 col-md-8 '>
                            <Link href={"/"}><a href={"/"} className="header__navbar_a">{formatMessage({id: 'header1'})}</a></Link>
                            <Link href={"/Main"}><a className="header__navbar_a" href={"/Main"}>{formatMessage({id: 'header2'})}</a></Link>
                            <Link href={"/About"}><a className="header__navbar_a" href={"/About"}>{formatMessage({id: 'header3'})}</a></Link>
                            <Link href={"/students"}><a className="header__navbar_a" href={"/students"}>{formatMessage({id: 'header4'})}</a></Link>
                            <Link href={"/Act"}><a className="header__navbar_a" href={"/Act"}>{formatMessage({id: 'header5'})}</a></Link>
                            <Link href={"/contact"}><a className="header__navbar_a" href={"/contact"}>{formatMessage({id: 'header6'})}</a></Link>
                        </nav>
                        <Menu right className='burger col-lg-8 col-md-8 ' >
                            <Link href={"/"}><a href={"/"} className="header__navbar_a">{formatMessage({id: 'header1'})}</a></Link>
                            <Link href={"/Main"}><a className="header__navbar_a" href={"/Main"}>{formatMessage({id: 'header2'})}</a></Link>
                            <Link href={"/About"}><a className="header__navbar_a" href={"/About"}>{formatMessage({id: 'header3'})}</a></Link>
                            <Link href={"/students"}><a className="header__navbar_a" href={"/students"}>{formatMessage({id: 'header4'})}</a></Link>
                            <Link href={"/Act"}><a className="header__navbar_a" href={"/Act"}>{formatMessage({id: 'header5'})}</a></Link>
                            <Link href={"/contact"}><a className="header__navbar_a" href={"/contact"}>{formatMessage({id: 'header6'})}</a></Link>
                        </Menu>
                    </div>
                </div>

            </div>
            <main>
                {children}
            </main>
            <div className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4  col-md-4  footer__logo">
                            <Link  href={"/"}><a href={"/"} className="footer__logo_a">{formatMessage({id: 'header1'})}</a></Link>
                            <Link href={"/Main"}><a className="footer__logo_a" href={"/Main"}>{formatMessage({id: 'header2'})}</a></Link>
                            <Link href={"/About"}><a className="footer__logo_a" href={"/About"}>{formatMessage({id: 'header3'})}</a></Link>
                            <Link href={"/students"}><a className="footer__logo_a" href={"/students"}>{formatMessage({id: 'header4'})}</a></Link>
                            <Link href={"/Act"}><a className="footer__logo_a" href={"/Act"}>{formatMessage({id: 'header5'})}</a></Link>
                            <Link href={"/contact"}><a className="footer__logo_a" href={"/contact"}>{formatMessage({id: 'header6'})}</a></Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="footer_adress">
                                <span>{formatMessage({id: 'addresFooter'})}</span>
                                <h1>{formatMessage({id: 'addres'})}</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="footer_adress">
                                <span>{formatMessage({id : "contact"})}</span>
                                <h1>{formatMessage({id : "email"})} :<a href="mailto:iusm.kg@gmail.com">iusm.kg@gmail.com</a></h1>
                                <h1>{formatMessage({id:"num"})}: (+919335011912
                                    )</h1>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="footer_line">
                                <h1>© ОАО "MUMN university". Все права защищены. Лицензия НБКР №030</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer__logo__block'>
                    <a href="https://instagram.com"><img
                        src={require('../pages/images/img_2.png').default.src} alt=""/></a>
                    <a href="https://www.facebook.com/International-University-of-Science-Medicine-355373318327909"><img
                        src={require('../pages/images/img_3.png').default.src} alt=""/></a>
                    <a href="https://https://web.telegram.org/z/"><img
                        src={require('../pages/images/img_4.png').default.src} alt=""/></a>
                    <a href="https://api.whatsapp.com/send?phone=0700123404"><img
                        src={require('../pages/images/img_5.png').default.src} alt=""/></a>
                </div>
            </div>
        </>
    )
}
