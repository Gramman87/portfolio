import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Google SWE III) | Graham Anderson",
};

export default function GoogleCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Google Hiring Team,"
      paragraphs={[
        "I'm applying for the Software Engineer III, Full Stack role on Google Cloud. I'm a full-stack engineer who builds and operates production services in the cloud, Java and REST APIs on the backend and TypeScript and React on the front end, and building cloud products that developers and enterprises depend on at scale is exactly the work I want. I'm based in the Denver area and available on-site in the Bay Area Tuesday through Thursday for the hybrid schedule.",
        "My core is full-stack delivery with real ownership. At Accenture Federal Services I modernized a legacy enterprise application end to end: implementing Java/Spring Boot microservices, building and consuming REST APIs across the architecture, and migrating it onto Kubernetes and OpenShift, then owning those services in production through deployment, incident response, and reliability work. I re-architected our CI/CD pipelines to cut deployment time 40%, and I care about code quality and clean design: testing, code review, and API governance across versioning, backward compatibility, and security on public-facing surfaces.",
        "On the side I build LLM and agent applications, and I architect them model-agnostically: an isolated model seam, an OpenAI-compatible endpoint, tool-calling, RAG, and evaluation harnesses, so they port across providers. That fits a cloud platform that serves many models rather than betting on one. It also reflects how I pick up new domains independently and hold them to production standards. Behind all of it are 13+ years of professional delivery, including $80M+ program leadership, so I bring the cross-functional judgment and accountability that shipping at Google's scale requires.",
        "I'd welcome the chance to talk about building full-stack products on Google Cloud. Thank you for your consideration.",
      ]}
    />
  );
}
