import '../App.css'
import { Layout } from '../components';

const DigiSkills = () => {
  
  const tallyEmbedSrc = `https://tally.so/embed/mVBxXv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  return (
    <Layout>
        <div>
        <iframe
            src={tallyEmbedSrc}
            loading="lazy"
            width="100%"
            className="h-screen w-full max-w-[700px] mx-auto"
            title="Digital Skills Training for Women"
        ></iframe>
        </div>
    </Layout>
  );
};

export default DigiSkills;