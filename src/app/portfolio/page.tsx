"use client";

import { useEffect } from "react";

export default function PortfolioRedirect() {
  useEffect(() => {
    window.location.replace("/#portfolio");
  }, []);

  return null;
}
