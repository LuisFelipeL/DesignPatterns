import { IConnection } from "./IConnection";

class Oracle implements IConnection {
  private host: string;
  private port: string;
  private user: string;
  private password: string;

  constructor() {
    this.host = "localhost";
    this.port = "8080";
    this.user = "root";
    this.password = "12345";
  }

  public connect(): void {
    console.log(
      "Se establecio la conexión con la base de datos Oracle exitosamente"
    );
  }

  public disconnect(): void {
    console.log("Se desconectó de la base de datos Oracle exitosamente");
  }
}

export { Oracle };
