import React from "react";

export type SectionProps = {
  header: string;
  html: string;
};

const Section: React.FC<SectionProps> = (props: SectionProps) => {
  return (
    <div className="flex flex-col mx-auto justify-center w-full max-w-screen-lg text-white">
      <div className="py-20 px-5 max-md:py-0">
        <div className="font-mono text-5xl max-sm:text-3xl py-10 max-sm:py-3 underline">
          {props.header}
        </div>
        <div
          className="font-mono text-xl max-sm:text-lg"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </div>
    </div>
  );
};

export default Section;
