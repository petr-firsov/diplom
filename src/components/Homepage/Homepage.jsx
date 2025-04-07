import WelcomeBlock from './welcome-block/welcome-block';
import AboutUs from './about-us/about-us';
import HowItWorks from './how-it-works/how-it-works';
import Feedback from './feedback/feedback';

export default function Homepage() {
    return (
        <main>
            <WelcomeBlock />
            <AboutUs />
            <HowItWorks />
            <Feedback />
        </main>
    )
}