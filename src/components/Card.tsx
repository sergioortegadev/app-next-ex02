import AleatoryNumber from "@/components/AleatoryNumber";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8 m-2 rounded-xl border-4 border-transparent hover:border-slate-600 bg-slate-400">
      {children}
      <AleatoryNumber />
    </div>
  );
};

export default Card;
