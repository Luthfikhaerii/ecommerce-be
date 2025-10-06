export type CreateProductRequest = {
  status               :string
  name_product         :string
  price                :number
  stock                :number
  sizes                :string[]
  image                :string
  content              :string[]
  product_description  :string
  delivery_description  : string
}

export type UpdateProductRequest = {
  status?               :string
  name_product?         :string
  price?                :number
  stock?                :number
  sizes?                :string[]
  image?                :string
  content?              :string[]
  product_description?  :string
  delivery_description?  : string
}