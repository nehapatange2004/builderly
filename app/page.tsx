import Image from "next/image";
import Welcome from "./components/Welcome";
export default function Home() {
  return (
    <main className="flex w-screen z-1">
      <Welcome/>
    </main>
  );
}
