export const calcTotalPrice: any = (items: any) =>
  items.reduce((acc: any, game: any) => (acc += game?.price), 0);
