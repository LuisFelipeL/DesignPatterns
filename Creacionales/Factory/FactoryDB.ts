import { IConnection } from "./DB/IConnection";
import { MySQL } from "./DB/MySQL";
import { Oracle } from "./DB/Oracle";
import { PostgreSQL } from "./DB/PostgreSQL";
import { Invalid } from "./DB/Invalid";

class FactoryDB {
  public getConnection(motor: string): IConnection {
    if (motor === null) return new Invalid();
    else if (motor === "MySQL") return new MySQL();
    else if (motor === "Oracle") return new Oracle();
    else if (motor === "PostgreSQL") return new PostgreSQL();

    return new Invalid();
  }
}

export { FactoryDB };
