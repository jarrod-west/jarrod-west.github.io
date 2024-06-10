import React from "react";

export type SectionProps = {
  header: string;
  body: string;
};

const Section: React.FC<SectionProps> = (props: SectionProps) => {
  return (
    <div className="w-full p-20 text-white">
      <div className="font-mono text-5xl pb-10 pt-10 underline">
        {props.header}
      </div>
      <div className="font-mono text-xl">
        {props.body}
      </div>
    </div>
  );
};

export default Section;