import Header from '../components/header';
import Chatbot from '../components/chatbot';
import resource from '../data/resource.json';
import ResourceCard from '../components/resource_cards';
import './style/pages.css';

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
        </div>
    )
}

export default ResourcesPage;
