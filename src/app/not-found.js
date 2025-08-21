import Link from "next/link";
export default function NotFound() {
  return (
    <section className="bg-[#272121] mt-[116px]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#E16428]">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-[#F1F1F1]">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-[#A0A3B1]">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.
          </p>
          <Link
            href="/"
            className="inline-flex bg-[#E16428] hover:bg-[#c6501d] text-white focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
