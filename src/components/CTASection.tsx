import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <button className="cta-button text-white flex items-center gap-2 mb-8">
          Start Free Trial
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default CTASection;