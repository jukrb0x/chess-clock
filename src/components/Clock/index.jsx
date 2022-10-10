import './index.scss'
import { useState } from "react";


function Divider() {
    return (
        <div className="divider">
        </div>
    )
}


export default function Clock() {
    let [leftTimeWhite, setLeftTimeWhite] = useState();
    let [leftTimeBlack, setLeftTimeBlack] = useState();
    leftTimeWhite = '10:00';
    leftTimeBlack = '10:00';


    return (
        <>
            <div className="zone">
                <div className="white-zone">
                    { leftTimeWhite }
                </div>
                <Divider/>
                <div className="black-zone">
                    { leftTimeBlack }
                </div>
            </div>
        </>
    )
}
