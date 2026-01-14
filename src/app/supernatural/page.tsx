'use client';

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Supernatural = () => {
  const [supernatural, setSupernatural] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setSupernatural(true)
    if (supernatural) {
      Swal.fire({
        title: "Success!",
        text: "The Supernatural page has loaded.",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/");
        }
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Error",
        icon: "error",
      });
    }
  }, [supernatural, router]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Supernatural Page</h1>
      <p>This page triggers a SweetAlert success message on mount.</p>
    </div>
  );
};

export default Supernatural;
