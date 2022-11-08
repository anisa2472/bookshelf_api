const { nanoid } = require('nanoid');
const books = require('./books');

const addBooksHandler = (request, h) => {
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    } = request.payload;

    // when name property is empty
    if (!name) {
        const response = h
            .response({
                status: 'fail',
                message: 'Gagal menambahkan buku. Mohon isi nama buku',
            })
            .code(400);
        return response;
    }

    // when readPage is more than pageCount
    if (readPage > pageCount) {
        const response = h
            .response({
                status: 'fail',
                message:
                    'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
            })
            .code(400);
        return response;
    }

    const id = nanoid(16);
    const finished = readPage === pageCount;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt,
    };

    books.push(newBook);
    // check if the book is saved
    const isSuccess = books.filter((book) => book.id === id).length > 0;

    // when the book is successfully saved
    if (isSuccess) {
        const response = h
            .response({
                status: 'success',
                message: 'Buku berhasil ditambahkan',
                data: {
                    bookId: id,
                },
            })
            .code(201);
        return response;
    }

    // when the book fails to save
    const response = h
        .response({
            status: 'fail',
            message: 'Buku gagal ditambahkan',
        })
        .code(500);
    return response;
};

const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query;

    // when query is not found
    if (!name && !reading && !finished) {
        const response = h
            .response({
                status: 'success',
                data: {
                    books: books.map((book) => ({
                        id: book.id,
                        name: book.name,
                        publisher: book.publisher,
                    })),
                },
            })
            .code(200);
        return response;
    }
    // when query name is found
    if (name) {
        const filteredBooks = books.filter((book) => {
            return book.name.toLowerCase().includes(name.toLowerCase());
        });
        const response = h
            .response({
                status: 'success',
                data: {
                    books: filteredBooks.map((book) => ({
                        id: book.id,
                        name: book.name,
                        publisher: book.publisher,
                    })),
                },
            })
            .code(200);
        return response;
    }

    // when query reading is found
    if (reading) {
        const filteredBooks = books.filter((book) => {
            return Number(book.reading) === Number(reading);
        });
        const response = h
            .response({
                status: 'success',
                data: {
                    books: filteredBooks.map((book) => ({
                        id: book.id,
                        name: book.name,
                        publisher: book.publisher,
                    })),
                },
            })
            .code(200);
        return response;
    }

    // when query finished is found
    if (finished) {
        const filteredBooks = books.filter((book) => {
            return Number(book.finished) === Number(finished);
        });
        const response = h
            .response({
                status: 'success',
                data: {
                    books: filteredBooks.map((book) => ({
                        id: book.id,
                        name: book.name,
                        publisher: book.publisher,
                    })),
                },
            })
            .code(200);
        return response;
    }
};

const getBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    // search for a book by ID
    const book = books.filter((item) => item.id === bookId)[0];
    // when the book is found
    if (book) {
        const response = h
            .response({
                status: 'success',
                data: {
                    book,
                },
            })
            .code(200);
        return response;
    }

    // when the book is not found
    const response = h
        .response({
            status: 'fail',
            message: 'Buku tidak ditemukan',
        })
        .code(404);
    return response;
};

const editBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    } = request.payload;

    // when name property is empty
    if (!name) {
        const response = h
            .response({
                status: 'fail',
                message: 'Gagal memperbarui buku. Mohon isi nama buku',
            })
            .code(400);
        return response;
    }

    // when readPage is more than pageCount
    if (readPage > pageCount) {
        const response = h
            .response({
                status: 'fail',
                message:
                    'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
            })
            .code(400);
        return response;
    }

    const updatedAt = new Date().toISOString();

    // search book index by ID
    const index = books.findIndex((book) => book.id === bookId);

    // when the book is found
    if (index !== -1) {
        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt,
        };

        const response = h
            .response({
                status: 'success',
                message: 'Buku berhasil diperbarui',
            })
            .code(200);
        return response;
    }

    // when the book is not found
    const response = h
        .response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Id tidak ditemukan',
        })
        .code(404);
    return response;
};

const deleteBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    // search book index by ID
    const index = books.findIndex((book) => book.id === bookId);

    // when the book is found
    if (index !== -1) {
        books.splice(index, 1);
        const response = h
            .response({
                status: 'success',
                message: 'Buku berhasil dihapus',
            })
            .code(200);
        return response;
    }

    // when the book is not found
    const response = h
        .response({
            status: 'fail',
            message: 'Buku gagal dihapus. Id tidak ditemukan',
        })
        .code(404);
    return response;
};

module.exports = {
    addBooksHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
};
