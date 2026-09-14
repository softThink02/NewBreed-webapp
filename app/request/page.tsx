import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { RequestForm } from "@/components/request-form";

export const metadata: Metadata = {
  title: "Start Your Request",
  description:
    "Request a NEWBREED garment — choose a design or send your own, share your measurements, and we'll take it from there.",
  alternates: { canonical: "/request" },
};

/**
 * Server component: reads ?design= and ?type= from the URL so design cards
 * and "Submit Your Design" CTAs land here with the right context preselected,
 * then hands off to the client form.
 */
export default function RequestPage({
  searchParams,
}: {
  searchParams: { design?: string; type?: string };
}) {
  return (
    <section className="gutter mx-auto max-w-site pb-24 pt-16 sm:pt-24">
      <Reveal>
        <SectionHeading
          eyebrow="Request"
          title="Start your request"
          lede="Five short steps. Skip anything you're unsure about — we'll go over the details together before anything is made."
        />
      </Reveal>
      <div className="mt-12 max-w-2xl">
        <RequestForm
          initialDesign={searchParams.design}
          initialType={searchParams.type}
        />
      </div>
    </section>
  );
}
