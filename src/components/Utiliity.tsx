export default function Utility({
  name,
  elemento_dos,
  icon,
}: {
  name: string;
  elemento_dos: string;
  icon?: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-32 items-center justify-between p-2">
        <div className="text-lime-400">{name}</div>
        <div className="flex flex-rowi items-center gap-1">
          {elemento_dos}
          {icon}
        </div>
      </div>
    </>
  );
}
