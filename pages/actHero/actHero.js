import {normativeActs} from "../../constants/normativeActs";
import ActItem from "../../components/actItem";


export default function actHero (){

    return (
        <>
            <div className="actHero">
                <div className="container">
                    <div className="act_container">
                        <div className="act_container_block">
                            <h1>Нормативно-правовые акты</h1>
                        </div>
                        <div className="act_container_box">
                            {normativeActs.map((elem, i) => (
                                <ActItem item={elem} index={i + 1} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}