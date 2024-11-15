'use client'
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';

const AuthChecker = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const token = Cookies.get('accessToken');

  useEffect(() => {
    if (!token && pathname !== '/login') {
      router.push('/login');
    }
  }, [pathname,token, router]);

  if (!token && pathname === '/login') {
    <Link to="/login" ><button>go to login</button></Link>
  }

  return (
    <>     
      {children}
    </>
  );
};

export default AuthChecker;
