import { FactoryDB } from "./FactoryDB";
import { IConnection } from "./DB/IConnection";

const FDB: FactoryDB = new FactoryDB();

// Creando conexión con base de datos MySQL
const cxMySQL: IConnection = FDB.getConnection("MySQL");
cxMySQL.connect();
cxMySQL.disconnect();

console.log("-------------------------------------------------");

// Creando conexión con base de datos Oracle
const cxOracle: IConnection = FDB.getConnection("Oracle");
cxOracle.connect();
cxOracle.disconnect();

console.log("-------------------------------------------------");

// Creando conexión con base de datos PostgreSQL
const cxPostgreSQL: IConnection = FDB.getConnection("PostgreSQL");
cxPostgreSQL.connect();
cxPostgreSQL.disconnect();

console.log("-------------------------------------------------");

// Creando conexión con base de datos
const cxTest: IConnection = FDB.getConnection("");
cxTest.connect();
cxTest.disconnect();
