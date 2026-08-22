"use client";

import { useEffect } from "react";

export default function FlashRedirect() {
  useEffect(() => {
    window.location.replace("/#flash");
  }, []);

  return null;
}
