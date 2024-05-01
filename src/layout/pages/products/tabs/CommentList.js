import "../../../../css/layout/pages/products/tabs/Comment.css";
export default function CommentList() {
    return (
        <div class="comment d-flex flex-column">
            <div className="comment-input-box">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Leave your comment" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Post</button>
                </div>
            </div>
            <div className="comment-list">
                <div className="d-flex" style={{  borderRadius: "8px", marginTop: "1%" }}>
                    <div className="d-flex justify-content-center align-items-center" style={{ border: "1px solid", borderRadius: "50%", width: "50px", height: "50px" , margin: "1%"}}>
                        T
                    </div>
                    <div  className="d-flex flex-column justify-content-center">
                        <div style={{ color: "#e8c284" }}>Truong:</div>
                        <div>This product is so good, I bought 1 and have never regret</div>
                    </div>
                </div>

                <div className="d-flex" style={{  borderRadius: "8px", marginTop: "1%" }}>
                    <div className="d-flex justify-content-center align-items-center" style={{ border: "1px solid", borderRadius: "50%", width: "50px", height: "50px" , margin: "1%"}}>
                        L
                    </div>
                    <div  className="d-flex flex-column justify-content-center">
                        <div style={{ color: "#e8c284" }}>Lan:</div>
                        <div>This product is so good, I bought 1 and have never regret</div>
                    </div>
                </div>

                <div className="d-flex" style={{  borderRadius: "8px", marginTop: "1%" }}>
                    <div className="d-flex justify-content-center align-items-center" style={{ border: "1px solid", borderRadius: "50%", width: "50px", height: "50px" , margin: "1%"}}>
                        H
                    </div>
                    <div  className="d-flex flex-column justify-content-center">
                        <div style={{ color: "#e8c284" }}>Hieu:</div>
                        <div>This product is so good, I bought 1 and have never regret</div>
                    </div>
                </div>
            </div>
        </div >
    )
}