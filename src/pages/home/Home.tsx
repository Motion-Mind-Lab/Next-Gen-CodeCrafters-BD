import './home.css';
import { Header } from '../../components/header/header';
import { Hero } from './components/hero/hero';
import { WhyJoin } from './components/whyjoin/whyjoin';
import { HowItWorks } from './components/howitwork/HowItWorks';
import { Perks } from './components/perks/perks';
import { CTASection } from './components/cta/CTASection';
import { Footer } from '../../components/footer/Footer';

export function Home() {
    return (
        <div class="home">
            <Header />
            <Hero />
            <WhyJoin />
            <HowItWorks />
            <Perks />
            <CTASection />
            <Footer />
        </div>
    )
}