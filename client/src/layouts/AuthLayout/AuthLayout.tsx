import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="h-screen min-h-screen">
      <Outlet />
    </div>
  );
}
