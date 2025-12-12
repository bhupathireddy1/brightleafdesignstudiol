import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="text-lg mb-6">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              At Brightleaf Design Studio, we collect information you provide directly to us, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Project details and preferences</li>
              <li>Communication history with our team</li>
              <li>Photos and documents related to your project</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide and improve our interior design services</li>
              <li>Communicate with you about your projects</li>
              <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              3. Information Sharing
            </h2>
            <p className="mb-4">
              We do not sell or rent your personal information to third parties. We may share your
              information with trusted partners and contractors who assist us in providing our
              services, subject to confidentiality agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              4. Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              5. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-2">
              <strong>Email:</strong> Satish@brightleafdesignstudio.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> 098853 01292
            </p>
            <p>
              <strong>Address:</strong> 5th Floor, Plot No 60, opposite ICICI Bank, Camelot Layout, Kondapur, Hyderabad, Telangana 500084
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
