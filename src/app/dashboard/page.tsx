import React from "react";
import { auth } from "../../../auth";
import { signOut } from "../../../auth";

const Dashboard = () => {
  const session = auth();
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="hidden md:block bg-slate-900 text-slate-200 rounded-md px-2 py-1">
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
