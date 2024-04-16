import { useEffect } from "react";
import "../../../css/layout/pages/misc/AboutUs.css";

export default function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-us text-light">
            <h1>ABOUT US</h1>
            <hr/>
            <div class="content">
                <img src="https://www.watchstation.com/on/demandware.static/-/Library-Sites-WatchStationSharedLibrary/default/dw59a8da87/2020/standup/about_us/Image1.jpg" alt="HTML5" class="left" />
                <h2>WHO WE ARE</h2>
                <p>
                    The idea for Aura Watches came about because people were often asking us for advice about which watch they should buy. The more this happened — and it happened a lot — the more we realized that searching for a watch online is a minefield of information. Leveraging our 20 years of experience working in the watch industry, we understood the intricacies and nuances that come with selecting the perfect watch.

                    The individual brand websites are great, but there are hundreds of watch brands in Switzerland alone, so checking out each page individually would take you weeks, and that’s if you know the names of all the brands.

                    Recognizing the need for a comprehensive platform, we created a solution. The Watch Pages is not just a website but a pioneering resource where you can effortlessly search for new watches worldwide, compare models, check prices, and discover new brands all in one place.
                </p>
            </div>
            <div class="content">
                <img src="https://www.watchstation.com/on/demandware.static/-/Library-Sites-WatchStationSharedLibrary/default/dw61a93af8/2020/standup/about_us/Image2.jpg" alt="HTML5" class="right" />
                <h2>TIME WELL SPENT</h2>
                <p>
                    Today, Aura Watches is the world’s largest watch database and features over 150 watch brands and over 20,000 individual watches (and it is growing every week). If you are a newbie to our industry, searching for a watch is as simple as finding a vacation home on Airbnb – you just choose your preferences in our filters and let our search find you the perfect watch. And if you are a bit of an expert, you can have a lot of fun with our advanced filters and search watch functions and complications to your heart’s content.</p>
            </div>
        </div>
    )
}