import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth">
      {children}
      <div></div>
    </main>
  );
};

export default Layout;
