# node-red-contrib-madlib

Node Red Flows for Building Machine Learning Pipelines with Apache Madlib

## Status

- Pre Alpha
- Simple flows possible, but some hacking maybe required.  

##  Dependencies

- node-red-contrib-sql
- Postgres / Apache HAWQ
- Madlib

## How It works

Nodes represent Madlib Algorithms, grouped by the type of operations they perform. (http://madlib.incubator.apache.org/docs/latest/index.html)

Each Node may be configured with appropriate algorithm parameters taken from the madlib docs, in additon to common parameters for each node representing the 'source' table where input data is stored and 'result' tables where the output will be written. 

Nodes may be chained into flows, using simple  templates for method parameters such that the source table for a given node will default to the result table from the prior node.

Metadata for the supported madlib algorithms, including relevant configuration parameters for creating nodes  are stored in 'madops.js'

All processing logic, and data passing is performed on the DB server so the overhead on the madlib server is minimalas just the names of the tables holding data are passed around. 


