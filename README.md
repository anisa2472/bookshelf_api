# 📚 BOOKSHELF API

<div align="center">

[![javascript](./javascript.svg)](https://badges.aleen42.com/src/javascript.svg) [![node](./node.svg)](https://badges.aleen42.com/src/node.svg) [![eslint](./eslint.svg)](https://badges.aleen42.com/src/eslint.svg)
<a href="https://nodemon.io"><img src="https://img.shields.io/badge/-nodemon-brightgreen"></a> <a href="https://github.com/ai/nanoid"><img src="https://img.shields.io/badge/-nanoid-green"></a> <a href="https://github.com/hapijs/hapi"><img src="https://img.shields.io/badge/-@hapi/hapi-orange"></a>

</div>

## 📄 Description

This project was created to complete the Learn to Create Back-End Applications for Beginners from Dicoding course.

## 📑 API Documentation

### Save Books

-   **Request Type:** `POST`
-   **URL:** `/books`
-   **Body Request:**

```
{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}
```

### Get All Books

-   **Request Type:** `GET`
-   **URL:** `/books`
-   **Response Body:**

```
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "Qbax5Oy7L8WKf74l",
                "name": "Buku A",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "1L7ZtDUFeGs7VlEt",
                "name": "Buku B",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "K8DZbfI-t3LrY7lD",
                "name": "Buku C",
                "publisher": "Dicoding Indonesia"
            }
        ]
    }
}
```

### Get Book By ID

-   **Request Type:** `GET`
-   **URL:** `/books/{bookId}`
-   **Response Body:**

```
{
    "status": "success",
    "data": {
        "book": {
            "id": "aWZBUW3JN_VBE-9I",
            "name": "Buku A Revisi",
            "year": 2011,
            "author": "Jane Doe",
            "summary": "Lorem Dolor sit Amet",
            "publisher": "Dicoding",
            "pageCount": 200,
            "readPage": 26,
            "finished": false,
            "reading": false,
            "insertedAt": "2021-03-05T06:14:28.930Z",
            "updatedAt": "2021-03-05T06:14:30.718Z"
        }
    }
}
```

### Change Book Data

-   **Request Type:** `PUT`
-   **URL:** `/books/{bookId}`
-   **Body Request:**

```
{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}
```

### Delete Book

-   **Request Type:** `DELETE`
-   **URL:** `/books/{bookId}`
-   **Response Body:**

```
{
    "status": "success",
    "message": "Buku berhasil dihapus"
}
```

```
{
    "status": "fail",
    "message": "Buku gagal dihapus. Id tidak ditemukan"
}
```

### Filtering

**1. Filter Books By Name**
-   **Request Type:** `GET`
-   **URL:** `/books?name="<book_title>"`
-   **Response Body:**

```
{
    "status": "success",
    "data": {
        "book": {
            "id": "aWZBUW3JN_VBE-9I",
            "name": "Buku A Revisi",
            "year": 2011,
            "author": "Jane Doe",
            "summary": "Lorem Dolor sit Amet",
            "publisher": "Dicoding",
            "pageCount": 200,
            "readPage": 26,
            "finished": false,
            "reading": false,
            "insertedAt": "2021-03-05T06:14:28.930Z",
            "updatedAt": "2021-03-05T06:14:30.718Z"
        }
    }
}
```

**2. Filter Books By Reading**
-   **Request Type:** `GET`
-   **URL:** `/books?reading=<1 or 0>`
-   **Response Body:**

```
{
    "status": "success",
    "data": {
        "book": {
            "id": "aWZBUW3JN_VBE-9I",
            "name": "Buku A Revisi",
            "year": 2011,
            "author": "Jane Doe",
            "summary": "Lorem Dolor sit Amet",
            "publisher": "Dicoding",
            "pageCount": 200,
            "readPage": 26,
            "finished": false,
            "reading": false,
            "insertedAt": "2021-03-05T06:14:28.930Z",
            "updatedAt": "2021-03-05T06:14:30.718Z"
        }
    }
}
```

**3. Filter Books By Finished**
-   **Request Type:** `GET`
-   **URL:** `/books?finished=<1 or 0>`
-   **Response Body:**

```
{
    "status": "success",
    "data": {
        "book": {
            "id": "aWZBUW3JN_VBE-9I",
            "name": "Buku A Revisi",
            "year": 2011,
            "author": "Jane Doe",
            "summary": "Lorem Dolor sit Amet",
            "publisher": "Dicoding",
            "pageCount": 200,
            "readPage": 26,
            "finished": false,
            "reading": false,
            "insertedAt": "2021-03-05T06:14:28.930Z",
            "updatedAt": "2021-03-05T06:14:30.718Z"
        }
    }
}
```