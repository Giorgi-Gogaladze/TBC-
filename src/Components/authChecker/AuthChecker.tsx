import { useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ReactNode } from "react";

export default function AuthChecker({ children }: { children: ReactNode }) {
    const session = useSession();  // Get the full session object
    const router = useRouter();

    useEffect(() => {
        if (session?.error) {  // Check if error exists in session
            console.log('Error fetching session', session.error);
        }

        if (!session?.data) {  // Check if session data exists
            router.push('/login');
        }
    }, [session, router]);

    if (!session?.data) {
        return null;
    }

    return <> {children} </>;
}
