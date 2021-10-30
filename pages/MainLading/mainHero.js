import {useState} from "react";
import {useIntl} from "react-intl";


export default function mainHero() {
    const {formatMessage} = useIntl();
    // const [isFull, setFull] = useState(false);
    //
    // const textPerson1 = `${formatMessage({id:"PersonDesc1"})}`
    // const textPerson2 = `${formatMessage({id:"PersonDesc2"})}`
    // const textPerson3 = `${formatMessage({id:"PersonDesc1"})}`
    // const textPerson4 = `${formatMessage({id:"PersonDesc1"})}`

    // const outLimitedText = () => {
    //     return textPerson1.substr(0, 300);
    // }
    // const [isFull2, setFull2] = useState(false);
    // const outLimitedText2 = () => {
    //     return textPerson2.substr(0, 300);
    // }
    //
    // const [isFull3, setFull3] = useState(false);
    // const outLimitedText3 = () => {
    //     return textPerson3.substr(0, 300);
    // }
    //
    // const [isFull4, setFull4] = useState(false);
    // const outLimitedText4 = () => {
    //     return textPerson4.substr(0, 300);
    // }

    return (
        <>
            <div className="mainHero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mainHero__block">
                                <img src="" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h1 className="mainHero__name">{formatMessage({id : "PersonName2"})}</h1>
                            <div className="mainHero__box2">
                                <p className="mainHero__box2__title">{formatMessage({id : "PersonDesc2"})}</p>
                                <a href="tel:+996 555 330 868"><span>{formatMessage({id : "num"})} : </span>+996 552 431 612</a>
                                <a href="mailto:maliksm@mail.ru"><span>E-mail : </span>maliksm@mail.ru</a>
                                {/*<p className="mainHero__box2__title">{isFull2 ? (<>*/}
                                {/*    {textPerson2}*/}
                                {/*    <span className="mainHero__box2__x" onClick={() => setFull2(!isFull2)}>x</span>*/}
                                {/*</>) : outLimitedText2() }*/}
                                {/*    {!isFull2 && (<button className='mainHero__box2__btn' onClick={() => setFull2(!isFull2)}>Read more...</button>)}*/}
                                {/*</p>*/}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mainHero__block">
                                <img src="" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h1 className="mainHero__name">{formatMessage({id : "PersonName3"})}</h1>
                            <div className="mainHero__box2">
                                <p className="mainHero__box2__title">{formatMessage({id : "PersonDesc3"})}</p>
                                <a href="tel:+996 555 330 868"><span>{formatMessage({id : "num"})} : </span>+996 556 130260</a>
                                <a href="mailto:holpon_01@yahoo.com"><span>E-mail : </span>cholpon_01@yahoo.com</a>
                                {/*<p className="mainHero__box2__title">{isFull3 ? (<>*/}
                                {/*    {textPerson3}*/}
                                {/*    <span className="mainHero__box2__x" onClick={() => setFull3(!isFull3)}>x</span>*/}
                                {/*</>) : outLimitedText3() }*/}
                                {/*    {!isFull3 && (<button className='mainHero__box2__btn' onClick={() => setFull3(!isFull3)}>Read more...</button>)}*/}
                                {/*</p>*/}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mainHero__block">
                                <img src={require('../images/IMAGE 2021-10-25 14_19_10.jpg').default.src} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h1 className="mainHero__name">{formatMessage({id : "PersonName1"})}</h1>
                            <div className="mainHero__box2">
                                <p className="mainHero__box2__title">{formatMessage({id : "PersonDesc1"})}</p>
                                <a href="tel:+996 555 330 868"><span>{formatMessage({id : "num"})} : </span>+996 555 330 868</a>
                                <a href="mailto:pozvonok@gmail.com"><span>E-mail : </span>pozvonok@gmail.com</a>
                                {/*<p className="mainHero__box2__title">{isFull ? (<>*/}
                                {/*        {formatMessage({id : "PersonDesc1"})}*/}
                                {/*        <span className="mainHero__box2__x" onClick={() => setFull(!isFull)}>x</span>*/}
                                {/*    </>) : outLimitedText() }*/}
                                {/*    {!isFull && (<button className='mainHero__box2__btn' onClick={() => setFull(!isFull)}>Read more1...</button>)}*/}
                                {/*</p>*/}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mainHero__block">
                                <img src={require("../images/IMAGE 2021-10-25 14_32_27.jpg").default.src} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h1 className="mainHero__name">{formatMessage({id : "PersonName4"})}</h1>
                            <div className="mainHero__box2">
                                <p className="mainHero__box2__title">{formatMessage({id : "PersonDesc4"})}</p>
                                <a href="tel:+996 555 330 868"><span>{formatMessage({id : "num"})} : </span>+996999010040</a>
                                <a href="mailto:asanbaiuulumirbek@gmail.com"><span>E-mail : </span>asanbaiuulumirbek@gmail.com</a>
                                {/*<p className="mainHero__box2__title">{isFull4 ? (<>*/}
                                {/*    {textPerson4}*/}
                                {/*    <span className="mainHero__box2__x" onClick={() => setFull4(!isFull4)}>x</span>*/}
                                {/*</>) : outLimitedText4() }*/}
                                {/*    {!isFull3 && (<button className='mainHero__box2__btn' onClick={() => setFull4(!isFull4)}>Read more...</button>)}*/}
                                {/*</p>*/}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
