interface Props {
  title: string;
  description: string;
  imagePath: string;
}
const EmptyState = ({ title, description, imagePath }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-3">
      <img src={imagePath} className="w-40 h-40" />
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="w-1/2 text-center">{description}</p>
    </div>
  );
};

export default EmptyState;
