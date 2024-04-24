export default function ProductLineCard({ product }) {

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src="\img\products\f019\f019c.jpg" className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px", height: "65px" }} />
                        <div className="ms-3">
                            <h5>Canon EOS M50</h5>
                            <p className="small mb-0">Onyx Black</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <button className="btn btn-outline-secondary btn-sm me-2" style={{ width: '10%', height: '30px', fontWeight: 'bold' }}>
                            -
                        </button>
                        <input type="text" className="form-control input-field text-center" placeholder="1" style={{ border: '1px solid', width: '20%', height:"30px" }} />
                        <button className="btn btn-outline-secondary btn-sm ms-2" style={{ width: '10%', height: '30px', fontWeight: 'bold' }}>
                            +
                        </button>
                    </div>
                    <div className="d-flex align-items-center">
                        <div style={{ width: "80px" }}>
                            <h5 className="mb-0">$1199</h5>
                        </div>
                        <a href="#!" style={{ color: "#cecece", marginLeft: "10px" }}><i className="fas fa-trash-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}