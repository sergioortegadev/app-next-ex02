# API documentation

## API developed in Next.js with TypeScript. Frontend and Backend complete and working ok.

### Endpoint currently working

- [/api/products](#endpoint-products)

### Upcoming endpoints

- [/api/products/:id](#endpoint-product-id)
- [/api/users](#endpoint-users)
- [/api/users/:id](#endpoint-user-id)

### Endpoint details GET: /api/products

Description: Returns a list of products.

Method: GET

Response:

```json
[
  {
    "id": 1,
    "title": "Product 1",
    "price": 10.99
  },
  {
    "id": 2,
    "title": "Product 2",
    "price": 19.99
  }
]
```

### Endpoint details POST: /api/products

Description: Create a new product.

Method: POST

Parámetros:

- `title` (required): Product name.
- `description` (required): Product description.
- `price` (required): Product price.
- `category`: Product category.
- `images` (required): ["url into array"]

Respuesta:

```json
{
  "id": 3,
  "title": "Nuevo producto",
  "description": "Descripción del nuevo producto",
  "price": 29.99,
  "category": "Categoria del nuevo producto",
  "images": ["https://example.com/images/123456.jpg"]
}
```
