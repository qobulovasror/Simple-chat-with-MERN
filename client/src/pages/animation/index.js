import './style.css';

const Animation = ({speed}) => {
    let animSpeet = { animationDuration: speed }
    return (
            <div className="loading">
                    <h1>Please wait !!!</h1>
                    <div className="animat">
                        <div className="item3" style={animSpeet}></div>
                        <div className="item3" style={animSpeet}></div>
                        <div className="item3" style={animSpeet}></div>
                    </div>
            </div>
    )
}

export default Animation;