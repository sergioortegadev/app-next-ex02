import Card from "@/components/Card";
import Image from "next/image";

export default function Delivery() {
  return (
    <Card>
      <h2 className="text-2xl text-center">Products Delivery</h2>
      <Image className="mx-auto m-8" src="/delivery-truck-icon.png" alt="camion" width={50} height={50} />
    </Card>
  );
}
