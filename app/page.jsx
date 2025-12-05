"use client";

const resume = {
  name: "Alejandro De La Mora",
  title: "AI Solutions Architect | Salesforce Developer",
  location: "Canada",
  contact: [
    { label: "Phone", value: "+1 437 243 3693" },
    { label: "Email", value: "chuck_dll@outlook.com", href: "mailto:chuck_dll@outlook.com" },
    { label: "LinkedIn", value: "linkedin.com/in/amorac", href: "https://www.linkedin.com/in/amorac/" },
    { label: "Website", value: "eloruga.com", href: "https://www.eloruga.com/about/index.html" },
    { label: "GitHub", value: "github.com/Oruga420", href: "https://github.com/Oruga420" },
  ],
  summary:
    "AI & Automation Technical Lead with extensive experience designing workflows that bridge human process and artificial intelligence. Expert in constructing scalable integration architectures across Salesforce, GCP, AWS, and Vercel. Proven ability to deliver ROI, having recently saved a company over $1 million and 20,000 man-hours through Agentic Workflows and GenAI automations. Deeply committed to knowledge sharing, mentoring technical teams, and driving organizational AI adoption from pilot to enterprise scale.",
  expertise: [
    "Generative AI",
    "Agentic Workflows",
    "Salesforce Architecture",
    "RAG",
    "Custom MCP Servers",
    "GCP",
    "AWS",
    "Vercel",
    "Next.js",
    "QA Engineering",
    "Project Management",
    "Mentorship & Enablement",
    "Automation Strategy",
    "Apex & Flow",
    "Zapier & Webhooks",
  ],
  experience: [
    {
      role: "AI Solutions Architect",
      company: "Assent",
      location: "Canada",
      dates: "Feb 2025 - Present",
      bullets: [
        "Engineered GenAI automations and agentic workflows resulting in over $1 million in savings and replacing 20,000+ man-hours within one year.",
        "Increased internal AI tool proficiency and adoption from 47% to 97% through user-first tool design and mentoring.",
        "Architected secure integration layers using GCP, AWS, and Vercel to power live RAG connections between compliance data and LLMs.",
        "Developed custom MCP tools that let admins and non-technical staff execute complex data tasks autonomously.",
      ],
    },
    {
      role: "AI Solutions Architect",
      company: "Sesh | Ai Solutions",
      location: "Toronto, Ontario",
      dates: "Nov 2021 - Present",
      bullets: [
        "Designed and shipped over 120 GenAI applications and 90+ chatbots for more than 30 clients.",
        "Led a 100+ member community with webinars and workshops for groups like Latinas in Tech and Somos Latinos in Tech Ottawa.",
        "Built and deployed AI-ready websites with Next.js and automation backends for immediate data processing and engagement.",
      ],
    },
    {
      role: "Salesforce Consultant",
      company: "Online Business Systems",
      location: "Toronto, Ontario",
      dates: "Jun 2024 - Nov 2024",
      bullets: [
        "Led configuration of Salesforce Agentforce AI assistants with prompts and actions tailored to sales and service use cases.",
        "Architected end-to-end setups in Marketing Cloud Account Engagement, integrating forms, scoring models, and email automation with CRM data.",
      ],
    },
    {
      role: "Salesforce Manager",
      company: "Globalization Partners",
      location: "Ontario, Canada",
      dates: "Nov 2018 - Nov 2023",
      bullets: [
        "Managed a complex Salesforce environment with 1,000+ users while overseeing automation integrations and data security.",
        "Built and deployed GIA, an internal chatbot, and pioneered GenAI workflows for Jira ticket management and developer support.",
        "Transitioned manual processes to automated workflows with data models built for rapid global expansion.",
      ],
    },
  ],
  education: [
    {
      degree: "Ingenieria en Sistemas (Systems Engineering)",
      school: "Universidad Marista de MAcrida",
      years: "2004 - 2007",
    },
  ],
};

export default function Page() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="page">
      <div className="top-row">
        <div className="intro">
          <p className="role-tag">Role</p>
          <div className="name-block">
            <h1>{resume.name}</h1>
            <p className="title">{resume.title}</p>
            <p className="location">{resume.location}</p>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-header">Contact</div>
          <ul>
            {resume.contact.map((item) => (
              <li key={item.label}>
                <span className="dot" aria-hidden />
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <span className="label">{item.label}:</span> {item.value}
                  </a>
                ) : (
                  <>
                    <span className="label">{item.label}:</span> {item.value}
                  </>
                )}
              </li>
            ))}
          </ul>
          <button className="pdf-btn no-print" onClick={handlePrint}>
            Download PDF
          </button>
        </div>
      </div>

      <section className="section summary">
        <div className="section-title">
          <span className="sticker">Professional Summary</span>
        </div>
        <p>{resume.summary}</p>
      </section>

      <section className="section expertise">
        <div className="section-title">
          <span className="sticker">Areas of Expertise</span>
        </div>
        <div className="pill-row">
          {resume.expertise.map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section experience">
        <div className="section-title">
          <span className="sticker">Work Experience</span>
        </div>
        <div className="experience-list">
          {resume.experience.map((job) => (
            <article key={`${job.company}-${job.role}`} className="card job-card">
              <header>
                <div>
                  <h3>{job.role}</h3>
                  <p className="org">
                    {job.company} · {job.location}
                  </p>
                </div>
                <div className="dates">{job.dates}</div>
              </header>
              <ul>
                {job.bullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section education">
        <div className="section-title">
          <span className="sticker">Education</span>
        </div>
        <div className="card edu-card">
          {resume.education.map((edu) => (
            <div key={edu.school} className="edu-row">
              <div>
                <h3>{edu.degree}</h3>
                <p className="org">{edu.school}</p>
              </div>
              <div className="dates">{edu.years}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
