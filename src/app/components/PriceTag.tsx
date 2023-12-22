import { formatPrice } from "../lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({
  price,
  className,
}: PriceTagProps): JSX.Element {
  return (
    <div className={""}>
      <span className={`badge ${className}`}>{formatPrice(price)}</span>
    </div>
  );
}
