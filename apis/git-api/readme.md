# GitMethods API Documentation

The GitMethods API provides endpoints for managing files in a GitHub repository.

## Base URL

All API endpoints are relative to the base URL:

```
http://asia-south1-esgedu-740d2.cloudfunctions.net/git-api
```

## Authentication

Ensure that you include a valid GitHub Personal Access Token (PAT) in the request headers.

```http
Authorization: Bearer your_github_token_here
```

## Endpoints

### 1. List Files

**Endpoint:**

```
GET /list?list=environment
```

**Description:**

List files in the "environment" directory.

**Response:**

```json
[
  {
    "sha": "abc123",
    "path": "docs/environment/file1.md",
    "name": "file1.md",
    "type": "file"
  },
  {
    "sha": "def456",
    "path": "docs/environment/file2.md",
    "name": "file2.md",
    "type": "file"
  },
  // ... additional files
]
```
 **Note** : Only three list types are possible: **environment**, **social**, and **governance**.


### 2. Get File Content

**Endpoint:**

```
GET /get_content?path=docs/environment/file1.md
```

**Description:**

Get the content of a specific file.

**Response:**

```json
{
  "sha": "abc123",
  "path": "docs/environment/file1.md",
  "name": "file1.md",
  "type": "file",
  "content": "This is the content of file1.md"
}
```

### 3. Create File

**Endpoint:**

```
POST /create?type=create&path=docs/environment/newFile.md
```

**Request Body:**

```json
{
  "content": "This is the content of the new file."
}
```

**Description:**

Create a new file in the "environment" directory.

**Response:**

```json
{
  "sha": "new_sha_value",
  "path": "docs/environment/newFile.md",
  "name": "newFile.md",
  "type": "file"
}
```

### 4. Update File

**Endpoint:**

```
POST /update?type=update&path=docs/environment/file1.md&sha=abc123
```

**Request Body:**

```json
{
  "content": "Updated content of file1.md."
}
```

**Description:**

Update the content of an existing file.

**Response:**

```json
{
  "sha": "new_sha_value",
  "path": "docs/environment/file1.md",
  "name": "file1.md",
  "type": "file"
}
```

### 5. Delete File

**Endpoint:**

```
POST /delete?type=delete&path=docs/environment/file1.md&sha=abc123
```

**Description:**

Delete an existing file.

**Response:**

```json
{
  "message": "File 'file1.md' deleted successfully."
}
```

## Error Handling

- If an error occurs during the API request, the response will include an error message along with an appropriate HTTP status code.

Example:

```json
{
  "error": "Invalid request parameters"
}
```

Feel free to customize this documentation based on your specific API implementation and requirements.