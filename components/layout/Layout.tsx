import React, { ReactNode } from "react";
import MainHeader from "./MainHeader";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <MainHeader />

      <main>{children}</main>
    </>
  );
}
