import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Amazon SDE II) | Graham Anderson",
};

export default function AmazonCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Amazon Hiring Team,"
      paragraphs={[
        "I'm applying for the Software Development Engineer II role on the DC Bridge team within AWS Infrastructure Services. I'm a backend engineer who builds and operates production JVM services in the cloud, I'm based in the Denver metro and local to the role, and architecting scalable systems that model and track physical data-center infrastructure is exactly the kind of ownership-heavy, high-scale work I want to do.",
        "My core is Java on the backend and operating what I build. At Accenture Federal Services I modernized a legacy enterprise application end to end: containerizing it, implementing Java/Spring Boot microservices, migrating it onto OpenShift and Kubernetes, and building and consuming REST APIs across the architecture. Critically, I own those services in production through deployment, incident response, and ongoing reliability work, and I hold the line on API governance: versioning, backward compatibility, and security on public-facing surfaces. I also re-architected our CI/CD pipelines with parallelization and caching to cut deployment time 40%, which meant digging past the symptoms to the real bottlenecks.",
        "The responsibilities in this posting map to how I already work. Owning features end to end and improving data quality is the arc I run daily. Mentoring junior engineers and partnering cross-functionally is something I've done for years, sharpened by 13+ years leading $80M+ programs where the job was aligning many stakeholders and delivering measurable results. I translate ambiguous requirements into well-scoped, tested engineering work, and I take real accountability for what I ship.",
        "On the AWS-native surface (Lambda, DynamoDB, CloudFormation), I've worked on AWS and in cloud-native operations, and the deeper serverless and infrastructure-as-code specifics are areas I'm eager to go deeper on quickly, with the Java and distributed-systems fundamentals already in place. I also build agentic AI applications on my own time, which reflects how I pick up new domains independently and hold them to production standards. I'd welcome the chance to talk about contributing to AWS data-center availability and Amazon's sustainability goals. Thank you for your consideration.",
      ]}
    />
  );
}
