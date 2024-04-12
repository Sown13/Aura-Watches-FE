import "../../css/layout/pages/Home.css";

export default function Home() {
    return (
        <div className="home">
            <div id="home-carousel" className="carousel slide carousel slide">
                <div className="carousel-inner text-light">
                    <div className="container carousel-item active">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-4">
                                <img className="d-block w-100" src="/img/home_carousel_1.svg" alt="..." />
                            </div>
                            <div className="home-carousel-content col-6 d-flex justify-content-center flex-column">
                                <h6>CLASSIC SERIES-45MM</h6>
                                <h1>BLACK/WHITE</h1>
                                <h1>$100.000</h1>
                                <h6>AURA watch for men, this watch is part of the
                                    Classic collection. The dial of this watch
                                    measures 45mm of diameter. The movement of this
                                    watch works with a quartz battery. This watch is water
                                    resistant up to 30 meters.
                                </h6>
                                <div class="button-container ">
                                    <button type="button" class="btn btn-dark home-carousel-button-1">DETAIL</button>
                                    <button type="button" class="btn btn-warning home-carousel-button-2">SHOP NOW</button>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                    <div className="container carousel-item">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-4">
                                <img className="d-block w-100" src="/img/home_carousel_2.svg" alt="..." />
                            </div>
                            <div className="home-carousel-content col-6 d-flex justify-content-center flex-column">
                                <h6>CLASSIC SERIES-30MM</h6>
                                <h1>BLACK/BROWN</h1>
                                <h1>$100.000</h1>
                                <h6>AURA watch for men, this watch is part of the
                                    Classic collection. The dial of this watch
                                    measures 30mm of diameter.
                                </h6>
                                <div class="button-container ">
                                    <button type="button" class="btn home-carousel-button-1 text-light">DETAIL</button>
                                    <button type="button" class="btn home-carousel-button-2 text-light">SHOP NOW</button>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}