import useSplitText from "../hooks/useSplitText";

/**
 * Cinematic word-stagger heading.
 * Uses SplitType to animate words in sequence on first scroll-into-view.
 *
 * depKey  — stable string that triggers re-split when i18n text changes.
 *           Pass the concatenated translated strings, e.g.
 *           depKey={t("ns.titleKey") + t("ns.italicKey")}
 */
export default function SplitHeading({ as: Tag = "h2", children, className = "", depKey = "" }) {
  const ref = useSplitText({ deps: [depKey] });
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}