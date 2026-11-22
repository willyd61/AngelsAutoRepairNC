export function Lockup({
  stacked = false,
  tone = "ink",
  className = "",
}: {
  stacked?: boolean;
  tone?: "reverse" | "ink" | "navy" | "white";
  className?: string;
}) {
  const src = tone === "white" || tone === "reverse" ? "/brand/angels-header-reverse.svg" : "/brand/angels-header.svg";
  return (
    <img
      src={src}
      alt="Angels Auto Repair, Carolina Beach, NC"
      className={stacked ? `c-logo c-logo--stack ${className}` : `c-logo ${className}`}
    />
  );
}
