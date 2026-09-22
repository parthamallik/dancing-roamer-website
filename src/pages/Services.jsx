import ServiceCard from "../components/ServiceCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { services, site } from "../data/content.js";
import "./Services.css";

export default function Services() {
  return (
    <>
      <section className="section services-hero">
        <div className="container">
          <span className="eyebrow">What We Offer</span>
          <h1>Choreography &amp; films for luxury weddings</h1>
          <p>
            Every engagement starts the same way — a conversation with {site.founderName} about your
            families, your songs and how much dance experience you&rsquo;re starting with. Everything below is
            built from there.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          {services.map((service, i) => (
            <div id={service.slug} key={service.slug} className="services-anchor">
              <ServiceCard service={service} reverse={i % 2 === 1} />
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Good to Know"
            title="How an engagement usually works"
            description="Every wedding is different, but most engagements follow this shape."
          />
          <ol className="process-list">
            <li>
              <span className="process-list__num">01</span>
              <div>
                <h3>Conversation &amp; song selection</h3>
                <p>We talk through your date, venue, families and the songs you&rsquo;re drawn to.</p>
              </div>
            </li>
            <li>
              <span className="process-list__num">02</span>
              <div>
                <h3>Choreography &amp; rehearsals</h3>
                <p>Online or in-studio sessions, with recorded lessons so you can practise anytime.</p>
              </div>
            </li>
            <li>
              <span className="process-list__num">03</span>
              <div>
                <h3>On-site training</h3>
                <p>A final run-through at the venue, so everyone&rsquo;s comfortable with the space and stage.</p>
              </div>
            </li>
            <li>
              <span className="process-list__num">04</span>
              <div>
                <h3>Performance day</h3>
                <p>Smitarani and team on-site to cue the performance — and, if booked, film the BTS story.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <CtaBand
        title="Ready to talk choreography?"
        body="Share your wedding date and city — we'll get back with next steps within a day."
      />
    </>
  );
}
