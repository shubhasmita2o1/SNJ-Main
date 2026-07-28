
import React from "react";
import Container from "./Container";
import Reveal from "./Reveal";
import useSplitText from "../hooks/useSplitText";

export const PageHeader = ({ eyebrow, title, italic, subtitle, testId }) => {
  const headingRef = useSplitText({ deps: [title, italic] });

  return (
    <section className="pt-40 md:pt-48 pb-16 md:pb-24" data-testid={testId || "page-header"}>
      <Container>
        <Reveal>
          <div className="text-[12px] uppercase tracking-[0.22em] text-[#6F6F6F]">{eyebrow}</div>
        </Reveal>
        <h1
          ref={headingRef}
          className="mt-6 font-serif text-[56px] sm:text-[80px] md:text-[110px] leading-[0.95] tracking-[-0.025em] text-black max-w-[1100px]"
        >
          {title} {italic && <i className="text-[#6F6F6F]">{italic}</i>}
        </h1>
        {subtitle && (
          <Reveal delay={2}>
            <p className="mt-8 max-w-[680px] text-[16px] md:text-[17px] leading-relaxed text-[#6F6F6F]">
              {subtitle}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
};

export default PageHeader;