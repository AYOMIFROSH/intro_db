import React from "react";

const Content = () => {
    return(
        <div>
            <h3 style={{display: "flex", justifyContent: "center"}}><strong><cite>Now, let’s take a closer look at each type and their functionalities.</cite></strong></h3>
            <br/>
            <p style={{margin: "30px"}}>
            SQL is a relational database management system that uses Structured Query Language (SQL) to manage data. It is a table-based system that stores data in rows and columns. SQL databases are known for their strong consistency, which means that all data is consistent across all nodes in the database. SQL databases are vertically scalable, which means that they can be scaled up by adding more resources to a single server.
            MongoDB is a NoSQL document-based database management system. It stores data in JSON-like documents with dynamic schemas, which means that the data can be stored in a variety of formats. MongoDB is horizontally scalable, which means that it can be scaled out across multiple servers. MongoDB is known for its eventual consistency, which means that data may not be consistent across all nodes in the database at all times.
            In terms of functionalities, SQL databases are best suited for applications that require complex queries and transactions, such as financial systems. MongoDB is best suited for applications that require scalability and flexibility, such as social media platforms.
            </p>
        </div>
    )
};

export default Content;