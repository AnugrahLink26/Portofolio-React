import Profile from "./Profile_Picture.jpg"

function Details() {
    return (
        <div className="flex-container">
            <div className="box10">
                <img src={Profile} alt="" />
            </div>

            <div className="box2">
                <h1 className="details">Details</h1>
                <div>
                    <p className="head">Name:</p>
                    <p className="answer">Anugrah Yazid Ghani</p>
                </div>
                <div>
                    <p className="head">Date of Birth:</p>
                    <p className="answer">Cimahi, 26 February 1997</p>
                </div>
                <div>
                    <p className="head">Address:</p>
                    <p className="answer">Jl. Terusan No. 317, Cimahi</p>
                </div>
                <div>
                    <p className="head">Email:</p>
                    <p className="answer">anugrah.link@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Details