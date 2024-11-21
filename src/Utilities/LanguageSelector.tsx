"use client";

import { useRouter, usePathname } from "next/navigation";

const LanguageSelector: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: string) => {
    if (pathname.includes("about-us")) {
      router.push(`/${locale}/about-us`);
    } else {
      router.push(`/${locale}${pathname}`);
    }
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>En</button>
      <button onClick={() => handleLanguageChange("gr")}>Ge</button>
    </div>
  );
};

export default LanguageSelector;
