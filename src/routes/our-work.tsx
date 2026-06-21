import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/our-work")({
  beforeLoad: () => {
    throw redirect({ to: "/work", replace: true });
  },
});
