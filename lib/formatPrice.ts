export const formatPENPrice = (price: number) => {
  return Intl.NumberFormat("es-PE", {
    style: "currency",
    maximumFractionDigits: 3,
    currency: "PEN",
  }).format(price);
};

export const formatUSDPrice = (price: number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
