import * as React from "react";
import { useEffect } from "react";

const StructuredData: React.FC = () => {
  useEffect(() => {
    // Person Schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jothivasan",
      jobTitle: "Frontend Developer",
      url: "https://jothivasan.dev",
      sameAs: [
        "https://linkedin.com/in/jothivasan",
        "https://github.com/jothivasan",
        "https://leetcode.com/u/Jothivasan28/",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Jothivasan Portfolio",
      },
      description:
        "Result-driven Frontend Developer specializing in high-performance web applications, sophisticated design systems, and scalable cloud architectures.",
      knowsAbout: [
        "React",
        "TypeScript",
        "JavaScript",
        "Frontend Development",
        "Web Design",
        "UI/UX Design",
        "Design Systems",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Your University/College",
      },
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Jothivasan Portfolio",
      url: "https://jothivasan.dev",
      description:
        "Portfolio website of Jothivasan, a Frontend Developer specializing in modern web applications and design systems.",
      author: {
        "@type": "Person",
        name: "Jothivasan",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://jothivasan.dev/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };

    // Professional Service Schema
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Jothivasan - Frontend Development Services",
      description:
        "Professional frontend development services including React development, TypeScript, and modern web applications.",
      provider: {
        "@type": "Person",
        name: "Jothivasan",
      },
      areaServed: "Worldwide",
      availableLanguage: "English",
    };

    // Add schemas to head
    const addSchema = (schema: object, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(personSchema, "person-schema");
    addSchema(websiteSchema, "website-schema");
    addSchema(professionalServiceSchema, "service-schema");

    // Cleanup
    return () => {
      ["person-schema", "website-schema", "service-schema"].forEach((id) => {
        const script = document.getElementById(id);
        if (script) script.remove();
      });
    };
  }, []);

  return null;
};

export default StructuredData;
