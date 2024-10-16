export default function ReviewDetail({ params }: {
  params: {
    productId: string,
    reviewId: string
  }
}) {
  return (
    <div>
      Review Detail: {params.reviewId} of Product: {params.productId}
    </div>
  );
}
