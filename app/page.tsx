import Image from "next/image";
import Welcome from "./components/Welcome";
export default function Home() {
  return (
    <main className="flex w-full z-1">
      <Welcome/>
    </main>
  );
}
