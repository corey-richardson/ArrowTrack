As of 2024-04-03, I am using a JSON file in local browser storage to act as a flat file database. A better alternative would be *IndexedDB*.

Structured Data Storage: IndexedDB allows you to store structured data, similar to a database, with support for indexes and querying. This makes it easier to manage and retrieve complex data compared to storing JSON files in local storage, where you have to handle serialization and deserialization yourself.

Better Performance for Large Data: IndexedDB is designed to handle larger amounts of data more efficiently than local storage. It uses asynchronous APIs and supports transactions, which can improve performance when dealing with large datasets.

Querying and Indexing: IndexedDB supports indexes, allowing you to query data based on specific criteria efficiently. This is particularly useful for searching and filtering data, which can be cumbersome with JSON files in local storage.

Support for Transactions and Atomicity: IndexedDB supports transactions, ensuring data integrity and atomicity when performing multiple operations. This is important for applications that require consistency and reliability in data storage.

Scalability: IndexedDB is more scalable than local storage for large datasets. It's designed to handle larger amounts of data without significantly impacting performance or memory usage.

Browser Support: While both IndexedDB and local storage are widely supported in modern web browsers, IndexedDB is specifically designed for storing larger amounts of structured data and is more suitable for complex web applications.

IndexedDB is a more robust solution for storing and managing structured data in web applications compared to using JSON files in local storage, especially when dealing with large datasets or complex querying requirements.

Better scalability, would allow for the previously planned relational objects,