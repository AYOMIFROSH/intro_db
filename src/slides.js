import React from 'react';
import main from './Asset/Back.jpg'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ComparisonCarousel() {
    return (
        <Carousel style={{backgroundColor: 'grey', margin: '30px'}}>
            <Carousel.Item>
                <img className="d-block w-100"  src={main} alt="Data Storage Model"/>
                <Carousel.Caption>
                    <h3>Data Storage Model</h3>
                    <p>SQL databases store data in tables with fixed rows and columns, while NoSQL databases use a variety of models such as document, key-value, wide-column, and graph.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={main} alt="Development History"/>
                <Carousel.Caption>
                    <h3>Development History</h3>
                    <p>SQL databases were developed in the 1970s with a focus on reducing data duplication, while NoSQL databases were developed in the late 2000s with a focus on scaling, fast queries, and making programming simpler for developers.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={main} alt="Primary Purpose"/>
                <Carousel.Caption>
                    <h3>Primary Purpose</h3>
                    <p>SQL databases are general-purpose databases, while NoSQL databases are designed for specific purposes such as document, key-value, wide-column, and graph.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={main} alt="Schemas"/>
                <Carousel.Caption>
                    <h3>Schemas</h3>
                    <p>SQL databases have rigid, complex, tabular schemas, while NoSQL databases have flexible schemas that allow for easy changes to the database as requirements change.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={main} alt="Scaling"/>
                <Carousel.Caption>
                    <h3>Scaling</h3>
                    <p>SQL databases require vertical scaling (migrating to a larger, more expensive server) when you exceed the capacity requirements of your current server, while NoSQL databases can scale horizontally (scale-out across commodity servers).</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={main} alt="Functionalities"/>
                <Carousel.Caption>
                    <h3>Functionalities</h3>
                    <p>
                        <strong>MongoDB:</strong>
                        <ul>
                            <li>Supports ad-hoc queries and indexing</li>
                            <li>Provides automatic sharding for horizontal scaling</li>
                            <li>Offers built-in support for replication and high availability</li>
                            <li>Uses BSON (Binary JSON) format to store data</li>
                        </ul>
                        <strong>SQL:</strong>
                        <ul>
                            <li>Uses SQL (Structured Query Language) to manage data</li>
                            <li>Provides ACID (Atomicity, Consistency, Isolation, Durability) transactions</li>
                            <li>Offers a wide range of tools and technologies for data management</li>
                            <li>Supports complex queries and joins</li>
                        </ul>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ComparisonCarousel;