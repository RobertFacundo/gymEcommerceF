export interface TranslatedText {
  en: string;
  es: string;
}

export interface CartItem {
  productId: string;
  name: TranslatedText; 
  image: string;        
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}