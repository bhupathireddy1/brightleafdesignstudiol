import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
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
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="text-lg mb-6">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              1. Services
            </h2>
            <p className="mb-4">
              Brightleaf Design Studio provides interior design services including but not limited
              to residential design, commercial interiors, consultation, and project management.
              All services are subject to the terms outlined in individual project agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              2. Project Agreements
            </h2>
            <p className="mb-4">
              Each project will have a separate agreement outlining scope, timeline, deliverables,
              and payment terms. Both parties must agree to these terms before project commencement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              3. Payment Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>An advance payment is required before project initiation</li>
              <li>Payment schedules will be outlined in individual project agreements</li>
              <li>All payments are to be made as per the agreed schedule</li>
              <li>Late payments may result in project delays</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              4. Client Responsibilities
            </h2>
            <p className="mb-4">Clients are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Providing accurate information about the project space</li>
              <li>Timely decision-making and approvals</li>
              <li>Ensuring site access for our team</li>
              <li>Communicating any changes or concerns promptly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              5. Intellectual Property
            </h2>
            <p className="mb-4">
              All design concepts, drawings, and documents created by Brightleaf Design Studio
              remain our intellectual property until full payment is received. Upon full payment,
              the client receives a license to use the designs for the agreed project only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              6. Cancellation Policy
            </h2>
            <p className="mb-4">
              Cancellation terms are outlined in individual project agreements. Generally,
              deposits may be non-refundable, and cancellation fees may apply based on work
              completed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              7. Contact Us
            </h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us:
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

export default TermsOfService;
