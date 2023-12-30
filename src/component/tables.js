import React from 'react';
import { Table } from 'react-bootstrap';

function ComparisonTable() {
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Criteria</th>
                        <th>MongoDB</th>
                        <th>SQL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data Model</td>
                        <td>Document-based</td>
                        <td>Table-based</td>
                    </tr>
                    <tr>
                        <td>Scalability</td>
                        <td>Horizontally scalable</td>
                        <td>Vertically scalable</td>
                    </tr>
                    <tr>
                        <td>Querying</td>
                        <td>Richer query language</td>
                        <td>Limited query language</td>
                    </tr>
                    <tr>
                        <td>Schema</td>
                        <td>Dynamic schema</td>
                        <td>Static schema</td>
                    </tr>
                    <tr>
                        <td>Data Integrity</td>
                        <td>Eventual consistency</td>
                        <td>Strong consistency</td>
                    </tr>
                    <tr>
                        <td>Performance</td>
                        <td>Faster for unstructured data</td>
                        <td>Faster for structured data</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ComparisonTable;