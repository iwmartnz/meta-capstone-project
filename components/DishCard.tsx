type Props = {
  dish: {
    id: number;
    name: string;
    description: string;
    price: string;
    imgSrc: string;
  };
};

export default function DishCard({ dish }: Props) {
  const { imgSrc, name, price, description } = dish;

  return (
    <div className="w-64 min-w-[16rem] overflow-hidden rounded-2xl bg-[#edefee]">
      <img src={imgSrc} alt={name} className="h-60 w-full object-cover" />
      <div className="flex h-72 flex-col justify-between p-4">
        <div className="flex justify-between py-4">
          <h1 className="text-lg font-semibold">{name}</h1>
          <h3 className="text-[#ee9972]">{`$ ${price}`}</h3>
        </div>
        <p className="h-40 text-neutral-500">{description}</p>
        <a href="" className="flex items-center gap-2 hover:underline">
          <h4>Order a delivery</h4>
          <img src="/icons/delivery.svg" alt="" className=" h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
