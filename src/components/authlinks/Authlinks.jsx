import Link from 'next/link';
import React from 'react';

const Authlinks = () => {
  const status = 'authentication';  // Match this value with the condition

  return (
    <div className='text-gray-300'>
      {status === 'notauthentication' ? (  // Correct the condition here
        <div>
          <Link href="/login">Login</Link>
        </div>
      ) : (
        <div>
          <Link href="/write">Write</Link>
          <span className='mx-5'>Logout</span>
        </div>
      )}
    </div>
  );
};

export default Authlinks;