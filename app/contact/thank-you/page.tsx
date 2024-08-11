import Link from "next/link";
import React from "react";

function ThankYouPage() {
  return (
    <div className="flex flex-col items-center gap-6 py-20">
      <h1 className="text-center text-3xl font-semibold text-bc-darkblue md:text-5xl">
        Thank you!
      </h1>
      <h1 className="mx-auto max-w-[400px] text-center md:text-xl">
        We have received your message and will be in touch in a bit.
      </h1>
      <button>
        <Link href="/">Back To Home</Link>
      </button>
    </div>
  );
}

export default ThankYouPage;
