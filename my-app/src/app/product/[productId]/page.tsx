import { notFound } from "next/navigation";

export default function ProductDetail({ params }: {
  params: {
    productId: string
  }
}) {
  if (+params.productId > 10) {
    notFound()
  }
  return (
    <div>
      Product Detail: {params.productId}
    </div>
  );
}
