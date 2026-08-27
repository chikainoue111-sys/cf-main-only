import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMONGTHEOH",
  description: "Top page",
};

export default function Page() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>AMONGTHEOH</h1>
      <p>トップページ移行中です。</p>
    </main>
  );
}