# API Documentation

## REST API Endpoints

### 1. Get All Items
- **Endpoint:** `GET /api/items`
- **Description:** Retrieves a list of all items.
- **Example Request:** 
  ```curl
  curl -X GET https://api.example.com/api/items
  ```
- **Example Response:**
  ```json
  [
    { "id": 1, "name": "Item 1" },
    { "id": 2, "name": "Item 2" }
  ]
  ```

### 2. Get Item by ID
- **Endpoint:** `GET /api/items/{id}`
- **Description:** Retrieves a specific item by its ID.
- **Example Request:** 
  ```curl
  curl -X GET https://api.example.com/api/items/1
  ```
- **Example Response:**
  ```json
  { "id": 1, "name": "Item 1" }
  ```

### 3. Create New Item
- **Endpoint:** `POST /api/items`
- **Description:** Creates a new item.
- **Example Request:** 
  ```curl
  curl -X POST https://api.example.com/api/items \
       -H 'Content-Type: application/json' \
       -d '{ "name": "New Item" }'
  ```
- **Example Response:**
  ```json
  { "id": 3, "name": "New Item" }
  ```

### 4. Update Item
- **Endpoint:** `PUT /api/items/{id}`
- **Description:** Updates an existing item by its ID.
- **Example Request:** 
  ```curl
  curl -X PUT https://api.example.com/api/items/1 \
       -H 'Content-Type: application/json' \
       -d '{ "name": "Updated Item" }'
  ```
- **Example Response:**
  ```json
  { "id": 1, "name": "Updated Item" }
  ```

### 5. Delete Item
- **Endpoint:** `DELETE /api/items/{id}`
- **Description:** Deletes an item by its ID.
- **Example Request:** 
  ```curl
  curl -X DELETE https://api.example.com/api/items/1
  ```
- **Example Response:**
  ```json
  { "message": "Item deleted successfully" }
  ```

## Usage Examples

### Example of Using the API
1. Retrieve all items:
   ```
curl -X GET https://api.example.com/api/items
   ```
2. Create a new item:
   ```
curl -X POST https://api.example.com/api/items -H 'Content-Type: application/json' -d '{ "name": "New Item" }'
   ```