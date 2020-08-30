import { IConnection } from "./IConnection";

class Invalid implements IConnection {
  public connect(): void {
    console.log("No se logro establecer la conexión");
  }

  public disconnect(): void {
    console.log("No se logro establecer la conexión");
  }
}

export { Invalid };
