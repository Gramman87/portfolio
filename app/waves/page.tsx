import type { Metadata } from "next";
import TsunamiLab from "@/components/TsunamiLab";

export const metadata: Metadata = {
  title: "Tsunami Lab | Graham Anderson",
  description: "Make an undersea earthquake and watch a tsunami cross the ocean.",
  robots: { index: false, follow: false },
};

export default function WavesPage() {
  return <TsunamiLab />;
}
