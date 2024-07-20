import Link from "next/link";
import React from "react";

function ThankYouPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center">
      <h1 className="mx-auto max-w-[500px] text-center text-2xl">
        Thank you! <br />
        We have received your message and will be in touch in a bit.
      </h1>
      <button>
        <Link href="/contact">Back To Contact</Link>
      </button>
    </div>
  );
}

export default ThankYouPage;
