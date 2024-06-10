import React from "react";

export type SectionProps = {
  header: string;
  html: string;
};

const Section: React.FC<SectionProps> = (props: SectionProps) => {
  return (
    <div className="w-full text-white">
      <div className="flex flex-row">
        <div className="basis-1/4 max-lg:hidden" />
        <div className="basis-1/2 max-lg:basis-full pt-20 pb-20 pl-5 pr-5">
          <div className="font-mono text-5xl pb-10 pt-10 underline">
            {props.header}
          </div>
          <div
            className="font-mono text-xl"
            dangerouslySetInnerHTML={{ __html: props.html }}
          />
        </div>
        <div className="basis-1/4 max-lg:hidden" />
      </div>
    </div>
  );
};

export default Section;
