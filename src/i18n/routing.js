import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
    locales: ['en', 'de'],
    defaultLocale: 'en',
});

const [Link, redirect, usePathname, useRouter] = createNavigation(routing);

export default { Link, redirect, usePathname, useRouter };
