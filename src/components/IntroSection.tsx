const IntroSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="intro-text text-gray-300 leading-relaxed">
          Open is a mindfulness studio. Enter a place to come to your senses — {' '}
          <a href="/breathwork" className="text-white hover:opacity-70 transition-opacity">
            breathwork
          </a>
          , {' '}
          <a href="/meditation" className="text-white hover:opacity-70 transition-opacity">
            meditation
          </a>
          , {' '}
          <a href="/movement" className="text-white hover:opacity-70 transition-opacity">
            movement
          </a>
          , and {' '}
          <a href="/sound" className="text-white hover:opacity-70 transition-opacity">
            sound
          </a>
          {' '} awaken body and mind to bring you to the present moment.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;