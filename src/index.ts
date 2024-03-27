import { createClientAsync } from "../generated/cirasmx";
import dotenv from "dotenv";
import * as soap from "soap";

dotenv.config();

async function main() {
  try {
    const client = await createClientAsync("ws-docs/CIR.asmx.wsdl");
    const basicAuthOptions = new soap.BasicAuthSecurity(
      process.env.USERNAME!,
      process.env.PASSWORD!
    );
    client.setSecurity(basicAuthOptions);
    client.searchByDateAsync({
      date: "2022-01-01",
      court: "court",
      pubType: undefined,
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
