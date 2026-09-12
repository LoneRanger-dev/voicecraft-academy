export default function TestimonialCard({ quote = "A wonderful learning experience.", name = "Student" }) {
  return (
    <figure className="rounded-lg border border-slate-200 bg-white p-5">
      <blockquote className="text-sm text-slate-700">{quote}</blockquote>
      <figcaption className="mt-3 text-sm font-extrabold text-brand-purple">{name}</figcaption>
    </figure>
  );
}
