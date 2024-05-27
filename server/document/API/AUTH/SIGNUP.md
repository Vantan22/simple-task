# API Template

## Description

This is an api to sign up new user

## Base URL

The base URL for all API requests is:

`https://your-api.com`

## Endpoints

### `POST /signup`

Returns object with userId and message.

### Response

Returns a JSON object with the following properties:

- `message`: A success message indicating that the user was created.
- `userId`: The ID of the newly created user.

### Example

Request:

```
POST /signup
```

Response:

```json
{
  "message": "User created!",
  "userId": "6653eed87730a8c6724e53af"
}

```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `409 Conflict`: The user already exists.
- `500 Internal Server Error`: An unexpected error occurred on the server.