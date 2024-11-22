'use client'
import React, { ReactNode, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';

interface AuthCheckerProps {
  children: ReactNode
}

const AuthChecker: React.FC<AuthCheckerProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const token = Cookies.get('accessToken');

  useEffect(() => {
    if (!token && pathname !== '/login') {
      router.push('/login');
    }
  }, [pathname, token, router]);

  if (!token && pathname === '/login') {
    return (
      <div>
        <Link href="/login" >
          <button>go to login</button>
        </Link>
      </div>
    )
  }

  return <>{children}</>
};

export default AuthChecker;
