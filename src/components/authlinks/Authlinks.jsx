import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Authlinks = () => {
  const {status} = useSession();  // Match this value with the condition

  return (
    <div className='text-gray-300'>
      {status === 'unauthenticated' ? (  // Correct the condition here
        <div>
          <Link href="/login">Login</Link>
        </div>
      ) : (
        <div>
          <Link href="/write">Write</Link>
          <span onClick={signOut} className='mx-5 bg-black hover:bg-slate-400 hover:text-black py-2 px-3 rounded-lg'>Logout</span>
        </div>
      )}
    </div>
  );
};

export default Authlinks;