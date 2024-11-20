"use client";

import { useRouter } from "next/navigation";

function Button({ postsId }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/blog/${postsId}`);
      }}
    >
      View Post
    </button>
  );
}

export default Button;
