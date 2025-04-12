import HomepageHeader from './homepage-header/homepage-header';
import AboutUs from './about-us/about-us';
import HowItWorks from './how-it-works/how-it-works';
import Feedback from './feedback/feedback';

export default function Homepage() {
    return (
        <main>
            <HomepageHeader />
            <AboutUs />
            <HowItWorks />
            <Feedback />
        </main>
    )
}