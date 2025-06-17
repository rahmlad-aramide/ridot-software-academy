import '../App.css'

const DigiSkills = () => {
  
  const tallyEmbedSrc = `https://tally.so/embed/mVBxXv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  return (
    <div>
      <iframe
        src={tallyEmbedSrc}
        loading="lazy"
        width="100%"
        className="h-screen w-full max-w-[700px] mx-auto"
        title="Digital Skills Training for Women"
      ></iframe>
    </div>
  );
};

export default DigiSkills;