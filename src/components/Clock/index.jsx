import './index.scss'

function Divider(){
    return (
        <div className="divider">
        </div>
    )
}


export default function Clock() {

    return (
        <>
            <div className="zone">
                <div className="white-zone">
                    10:00
                </div>
                <Divider />
                <div className="black-zone">
                    10:00
                </div>
            </div>
        </>
    )
}
