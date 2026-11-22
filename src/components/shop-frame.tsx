import type { ReactNode } from "react";

/** Pages share the root site frame. This stays so older routes do not double-wrap a second header. */
export function ShopFrame({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
