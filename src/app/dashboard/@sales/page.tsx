import Card from "@/components/Card";
import Image from "next/image";

export default function Sales() {
  return (
    <Card>
      <h2 className="text-2xl text-center">Sales indicators</h2>
      <Image className="mx-auto m-8" src="/sales-chart-icon.png" alt="ventas" width={50} height={50} />
    </Card>
  );
}
