export interface IProduct {
  id: number
  title: string
  price: number
  image: string
}

export interface IState {
  products: IProduct[]
  loading: boolean
  error: null | string
}

export type TAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: IProduct[] }
  | { type: 'FETCH_ERROR'; payload: string }
