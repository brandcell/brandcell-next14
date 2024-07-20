import React from "react";

function FormLayout({ children }) {
  return (
    <div className="py-6 md:py-10">
      <header className="py-6 md:py-10">
        <h1 className="mb-2 text-center text-3xl font-semibold md:mb-8 md:text-5xl">
          Let Us Know Your <span className="text-bc-darkblue">Needs</span>
        </h1>
        <h2 className="text-center text-sm md:text-xl">
          We will get back to you within 24 hours
        </h2>
      </header>
      {children}
    </div>
  );
}

export default FormLayout;
