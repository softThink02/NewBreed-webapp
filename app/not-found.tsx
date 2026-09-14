import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="gutter mx-auto flex max-w-site flex-col items-center py-32 text-center sm:py-44">
      <span className="eyebrow">404</span>
      <h1 className="mt-6 font-serif text-h1">This page doesn&apos;t exist.</h1>
      <p className="mt-4 max-w-measure text-muted">
        The piece you&apos;re looking for isn&apos;t here — but the collection is.
      </p>
      <div className="mt-10">
        <ButtonLink href="/designs" variant="primary">
          Explore Designs
        </ButtonLink>
      </div>
    </section>
  );
}
