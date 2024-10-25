export default function ProductDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div>Product Detail Layout</div>
      <br />
      {children}
    </div>
  );
}