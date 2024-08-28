import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/profile")({
  component: Profile,
});

function Profile() {
  return (
    <div className="p-2">
      <h3>Profile Page</h3>
    </div>
  );
}
