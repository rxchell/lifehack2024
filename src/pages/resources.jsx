import Header from '../components/header';
import Chatbot from '../components/chatbot';
import resource from '../data/resource.json';
import ResourceCard from '../components/resource_cards';
import website from '../data/website.json';
import WebsiteCard from '../components/website_cards';
import './style/pages.css';
import Footer from '../components/footer';

function ResourcesPage() {
    return (
        <div>
            <Header />
            <Chatbot />
            <h1 className='pages-title'>Resources</h1>
            <div className='quiz-cards'>
                {resource.map((resourceItem) => (
                    <ResourceCard key={resourceItem.url} data={resourceItem} />
                ))}
            </div>

            <br />
            <h1 className='pages-title'>Useful Websites</h1>
            <div className='quiz-cards'>
                {website.map((websiteItem) => (
                    <WebsiteCard key={websiteItem.url} data={websiteItem} />
                ))}
            </div>

            <br />
            <h1 id="helpline" className='pages-title'>Helpline</h1>
            <p className='helpline-description'>Anti-Scam Helpline: 1800-722-6688 (Mon-Fri: 9am to 6pm, excluding Public Holidays)</p>
            <p className='report-description'>Report a scam: https://form.gov.sg/63982e109841390011a5912</p>

            <Chatbot />
            <Footer />
        </div>
    )
}

export default ResourcesPage;
