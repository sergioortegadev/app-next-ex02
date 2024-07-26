import Card from "@/components/Card";
import Image from "next/image";

export default function Analytics() {
  return (
    <Card>
      <h2 className="text-2xl text-center">Analytics KPI</h2>
      <Image className="mx-auto m-8" src="/speed-icon.png" alt="analytics" width={50} height={50} />
    </Card>
  );
}
