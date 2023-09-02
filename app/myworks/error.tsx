"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <div>Помилочка {error.message}</div>;
}
