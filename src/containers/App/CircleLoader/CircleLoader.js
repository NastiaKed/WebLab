import "../../App/CircleLoader/CircleLoader.css"

export const CircleLoader = () => {
    return (
        <div className="container">
            <div className="flex">
                <div className="loader"></div>
            </div>
            <div className="load-text">
            Loading...
            </div>
        </div> 
    )
}

export default CircleLoader