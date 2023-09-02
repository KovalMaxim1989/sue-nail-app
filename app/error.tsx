"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return <div>Помилочка {error.message}</div>;
}
