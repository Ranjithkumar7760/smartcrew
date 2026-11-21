import React, { useEffect, useState } from "react";
import heroImage from "../img3.jpg";
import productRangeImage from "../img5.jpg";

const WHATSAPP_NUMBER = "919010614946";
const DEFAULT_MESSAGE =
  "Hello SmartCrew Services, I’m interested in your industrial heating and cooling solutions. Please share product details and a quotation.";

const CONTACT_NUMBERS = [
  { display: "+91 90526 43886", tel: "+919052643886", label: "CALL" },
  { display: "+91 90106 14946", tel: "+919010614946", label: "CALL" },
];

const whatsappUrl = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const products = [
  {
    number: "01",
    name: "Heating & cooling units",
    series: "SCHC SERIES",
    description:
      "Precise single-fluid temperature control for reactors and demanding process applications.",
    details: ["Heating and cooling in one unit", "Cascade and ramp control"],
  },
  {
    number: "02",
    name: "Air-cooled water chillers",
    series: "SCCW SERIES",
    description:
      "Reliable, efficient process cooling with a compact footprint and continuous operation.",
    details: ["Industrial process cooling", "Compact, robust design"],
  },
  {
    number: "03",
    name: "Flameproof units",
    series: "SCHC-FLP SERIES",
    description:
      "Purpose-built temperature control equipment for hazardous-area requirements.",
    details: ["Flameproof construction", "Designed for hazardous areas"],
  },
];

const services = [
  {
    title: "Installation & commissioning",
    description:
      "Get your temperature-control equipment installed, configured, and ready for operation.",
  },
  {
    title: "Maintenance & repair",
    description:
      "Preventive maintenance and responsive troubleshooting to help keep your plant running.",
  },
  {
    title: "Thermal oil solutions",
    description:
      "Thermal oil supply and hose pipe solutions for a range of industrial processes.",
  },
];

const industries = [
  "Chemical & pharmaceutical",
  "Plastic & rubber processing",
  "Food & beverage",
  "Paint & coatings",
  "Research & laboratories",
  "General manufacturing",
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="button-arrow"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m5 10 3.2 3.2L15.5 6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A11.83 11.83 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.14 1.6 5.95L.12 24l6.32-1.66a11.9 11.9 0 0 0 5.65 1.44h.01c6.54 0 11.87-5.33 11.88-11.88a11.8 11.8 0 0 0-3.46-8.42ZM12.1 21.76a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.98 1-3.65-.24-.37a9.83 9.83 0 0 1-1.52-5.25c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.46 9.92-9.93 9.92Zm5.44-7.43c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.76.96-.94 1.16-.17.2-.34.22-.64.07-.3-.15-1.26-.47-2.4-1.49-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.75-.72 2-1.42.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const revealTargets = document.querySelectorAll("[data-reveal]");
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  function handleEnquiry(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const product = formData.get("product");
    const message = formData.get("message");

    const enquiry = [
      "Hello SmartCrew Services, I’d like to enquire about your industrial solutions.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      product ? `Interested in: ${product}` : "",
      message ? `Requirement: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.assign(whatsappUrl(enquiry));
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-content" data-reveal>
          <a className="brand" href="#home" aria-label="SmartCrew Services home">
            <span className="brand-mark" aria-hidden="true">
              S
            </span>
            <span className="brand-name">
              SmartCrew
              <span>Services</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            className={`navigation${menuOpen ? " navigation-open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            <a href="#solutions" onClick={closeMenu}>
              Solutions
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
            <a
              className="nav-cta"
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
            >
              Talk to our team <ArrowIcon diagonal />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-layout">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">
                <span className="eyebrow-line" />
                INDUSTRIAL TEMPERATURE CONTROL
              </p>
              <h1>
                Precision built
                <br />
                for <span>your process.</span>
              </h1>
              <p className="hero-description">
                Dependable heating and cooling equipment, engineered to keep
                industrial processes running at the right temperature.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#contact">
                  Discuss your requirement <ArrowIcon />
                </a>
                <a className="text-link" href="#solutions">
                  Explore solutions <ArrowIcon />
                </a>
              </div>
              <div className="hero-assurance">
                <span className="assurance-check">
                  <CheckIcon />
                </span>
                Equipment, installation & ongoing support
              </div>
            </div>

            <div
              className="hero-visual"
              data-reveal
              style={{ "--reveal-delay": "140ms" }}
            >
              <div className="hero-image-frame">
                <img
                  src={heroImage}
                  alt="SmartCrew industrial heating and cooling equipment"
                />
              </div>
              <div className="hero-image-caption">
                <span className="caption-dot" />
                Smart temperature. Steady performance.
              </div>
              <div className="hero-index" aria-hidden="true">
                <span>01</span> / 03
              </div>
            </div>
          </div>
          <div className="hero-bottom-line" />
        </section>

        <section className="proof-strip" aria-label="Product capabilities">
          <div className="container proof-grid">
            <div className="proof-item" data-reveal>
              <span className="proof-value">−90° to +350°C</span>
              <span className="proof-label">Temperature range*</span>
            </div>
            <div
              className="proof-item"
              data-reveal
              style={{ "--reveal-delay": "90ms" }}
            >
              <span className="proof-value">±0.5°C</span>
              <span className="proof-label">Precision control*</span>
            </div>
            <div
              className="proof-item"
              data-reveal
              style={{ "--reveal-delay": "180ms" }}
            >
              <span className="proof-value">0.5–55 kW</span>
              <span className="proof-label">Power range*</span>
            </div>
            <p className="proof-note" data-reveal style={{ "--reveal-delay": "240ms" }}>
              *Specifications vary by model and configuration.
            </p>
          </div>
        </section>

        <section className="section solutions-section" id="solutions">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div data-reveal>
                <p className="eyebrow eyebrow-dark">ENGINEERED FOR INDUSTRY</p>
                <h2>
                  The right solution
                  <br />
                  for <span>every process.</span>
                </h2>
              </div>
              <p className="section-intro">
                From accurate heating and cooling to dependable process
                chillers, find equipment designed around your operation.
              </p>
            </div>

            <div className="product-grid">
              {products.map((product, index) => (
                <article
                  className="product-card"
                  data-reveal
                  key={product.number}
                  style={{ "--reveal-delay": `${index * 100}ms` }}
                >
                  <div className="product-card-top">
                    <span className="product-number">{product.number}</span>
                    <span className="product-series">{product.series}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <ul>
                    {product.details.map((detail) => (
                      <li key={detail}>
                        <CheckIcon />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="card-link"
                    href={whatsappUrl(
                      `Hello SmartCrew Services, please share more details about your ${product.name.toLowerCase()}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ask about this solution <ArrowIcon diagonal />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-layout">
            <div className="about-image-wrap" data-reveal>
              <img
                src={productRangeImage}
                alt="SmartCrew brochure showing heating and cooling product ranges, features, and services"
                loading="lazy"
              />
              <div className="image-label">
                <span className="caption-dot" />
                Designed around your process
              </div>
            </div>
            <div
              className="about-copy"
              data-reveal
              style={{ "--reveal-delay": "120ms" }}
            >
              <p className="eyebrow eyebrow-dark">ABOUT SMARTCREW</p>
              <h2>
                Reliable support,
                <br />
                from first install
                <br />
                to <span>every service.</span>
              </h2>
              <p>
                SmartCrew Services brings industrial temperature-control
                equipment and practical field support together. We help you
                choose the right setup, put it into service, and maintain it
                over time.
              </p>
              <div className="about-points">
                <div data-reveal>
                  <span className="point-icon">
                    <CheckIcon />
                  </span>
                  Application-focused equipment guidance
                </div>
                <div data-reveal style={{ "--reveal-delay": "80ms" }}>
                  <span className="point-icon">
                    <CheckIcon />
                  </span>
                  Installation, commissioning & maintenance
                </div>
                <div data-reveal style={{ "--reveal-delay": "160ms" }}>
                  <span className="point-icon">
                    <CheckIcon />
                  </span>
                  Responsive industrial service support
                </div>
              </div>
              <a className="button button-navy" href="#contact">
                Speak with our team <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container">
            <div className="section-heading services-heading" data-reveal>
              <div>
                <p className="eyebrow">SUPPORT THROUGHOUT THE LIFECYCLE</p>
                <h2>
                  More than a machine.
                  <br />
                  <span>A service partner.</span>
                </h2>
              </div>
              <p className="section-intro">
                Practical support to help your equipment perform reliably at
                every stage.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article
                  className="service-card"
                  data-reveal
                  key={service.title}
                  style={{ "--reveal-delay": `${index * 100}ms` }}
                >
                  <span className="service-index">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a
                    href={whatsappUrl(
                      `Hello SmartCrew Services, I’d like to know more about ${service.title.toLowerCase()}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ask about ${service.title}`}
                  >
                    <ArrowIcon diagonal />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="industries-section">
          <div className="container industries-layout">
            <div data-reveal>
              <p className="eyebrow eyebrow-dark">INDUSTRIES WE SERVE</p>
              <h2>
                Temperature control
                <br />
                for <span>real-world demands.</span>
              </h2>
            </div>
            <div className="industry-list">
              {industries.map((industry, index) => (
                <div
                  className="industry-item"
                  data-reveal
                  key={industry}
                  style={{ "--reveal-delay": `${index * 50}ms` }}
                >
                  <CheckIcon />
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="container contact-banner-content" data-reveal>
            <div>
              <p className="eyebrow">LET'S TALK ABOUT YOUR PROCESS</p>
              <h2>Let's find the right temperature solution.</h2>
              <p>
                Tell us what you need. Our team is ready to help with products,
                technical questions, and quotations.
              </p>
            </div>
            <a
              className="button button-gold"
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              Chat with us on WhatsApp
              <ArrowIcon diagonal />
            </a>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy" data-reveal>
              <p className="eyebrow eyebrow-dark">GET IN TOUCH</p>
              <h2>
                Tell us what
                <br />
                you <span>have in mind.</span>
              </h2>
              <p>
                Share a few details and we’ll help you take the next step.
                Submitting the form opens WhatsApp with your enquiry ready to
                send.
              </p>
              {CONTACT_NUMBERS.map((contact, index) => (
                <a
                  className="contact-detail"
                  href={`tel:${contact.tel}`}
                  key={contact.tel}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 80}ms` }}
                >
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 4h4l2 5-2.5 1.5a15 15 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1C10 20 4 14 4 5a1 1 0 0 1 1-1Z" />
                    </svg>
                  </span>
                  <span>
                    <small>{contact.label}</small>
                    {contact.display}
                  </span>
                </a>
              ))}
              <a
                className="contact-detail"
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                data-reveal
              >
                <span
                  className="contact-icon whatsapp-contact-icon"
                  aria-hidden="true"
                >
                  <WhatsAppIcon />
                </span>
                <span>
                  <small>WHATSAPP</small>
                  +91 90106 14946
                </span>
              </a>
              <a
                className="contact-detail"
                href="mailto:yj@smartscrew.in"
                data-reveal
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <span>
                  <small>EMAIL</small>
                  yj@smartscrew.in
                </span>
              </a>
              <div className="contact-detail address-detail" data-reveal>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                    <circle cx="12" cy="10" r="2.3" />
                  </svg>
                </span>
                <span>
                  <small>VISIT</small>
                  Bosthavanivalasa, Vizianagaram,
                  <br />
                  Andhra Pradesh, India
                </span>
              </div>
            </div>

            <form className="enquiry-form" data-reveal onSubmit={handleEnquiry}>
              <div className="form-heading" data-reveal>
                <div>
                  <span className="form-kicker">QUICK ENQUIRY</span>
                  <h3>How can we help?</h3>
                </div>
                <span className="form-step">01 / 01</span>
              </div>
              <div className="form-fields">
                <label data-reveal>
                  Your name <span aria-hidden="true">*</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Alex Kumar"
                    autoComplete="name"
                    required
                  />
                </label>
                <label data-reveal style={{ "--reveal-delay": "60ms" }}>
                  Mobile number <span aria-hidden="true">*</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your contact number"
                    autoComplete="tel"
                    required
                  />
                </label>
                <label data-reveal style={{ "--reveal-delay": "120ms" }}>
                  Email address <span className="optional">(optional)</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </label>
                <label data-reveal style={{ "--reveal-delay": "180ms" }}>
                  I'm interested in
                  <select name="product" defaultValue="">
                    <option value="">Select a solution</option>
                    <option>Heating & cooling machines</option>
                    <option>Air-cooled water chillers</option>
                    <option>Flameproof units</option>
                    <option>Installation or maintenance</option>
                    <option>Thermal oil or hose pipe solutions</option>
                    <option>Other enquiry</option>
                  </select>
                </label>
                <label
                  className="message-field"
                  data-reveal
                  style={{ "--reveal-delay": "240ms" }}
                >
                  Tell us about your requirement
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="A short note about your process or application..."
                  />
                </label>
              </div>
              <button className="button button-navy submit-button" type="submit">
                Continue to WhatsApp <ArrowIcon diagonal />
              </button>
              <p className="form-note">
                Your details are added to a WhatsApp message for our team.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main" data-reveal>
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark" aria-hidden="true">
              S
            </span>
            <span className="brand-name">
              SmartCrew
              <span>Services</span>
            </span>
          </a>
          <p>Reliable service. Lasting performance.</p>
          <a
            className="footer-whatsapp"
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp us
            <ArrowIcon diagonal />
          </a>
        </div>
        <div className="container footer-bottom" data-reveal>
          <span>© {new Date().getFullYear()} SmartCrew Services. All rights reserved.</span>
          <a href="mailto:yj@smartscrew.in">yj@smartscrew.in</a>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with SmartCrew Services on WhatsApp"
      >
        <WhatsAppIcon />
        <span>Chat with us</span>
      </a>
    </>
  );
}

export default App;
