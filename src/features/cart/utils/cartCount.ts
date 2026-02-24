export const getCartCount = (items: any[]) =>
  items.reduce((acc, item) => acc + item.quantity, 0);