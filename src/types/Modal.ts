export interface PyeongModalProps {
  pyeong: number;
  houseHold: number;
  officialArea: number;
  personalArea: number;
  priceDefault: number;
  discountDefault: number;
  extendOption: number;
  minusOption: number;
}

export interface AddressModalProps<T = Record<string, unknown>> {
  address: T;
}

export interface RecoilProps {
  [key: string]: string;
}
