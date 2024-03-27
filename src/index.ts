import { createClientAsync, PubType } from "../generated/cirasmx";
import dotenv from "dotenv";
import * as soap from "soap";

dotenv.config();

async function main() {
  try {
    const url = "ws-docs/CIR.asmx.wsdl";
    const username = process.env.USERNAME!;
    const password = process.env.PASSWORD!;
    const auth =
      "Basic " + Buffer.from(username + ":" + password).toString("base64");
    const client = await createClientAsync(url, {
      wsdl_headers: {
        Authorization: auth,
        SOAPAction: "searchByDate",
      },
    });

    const basicAuthOptions = new soap.BasicAuthSecurity(
      process.env.USERNAME!,
      process.env.PASSWORD!
    );
    client.setSecurity(basicAuthOptions);

    const soapHeader = {
      Username: process.env.USERNAME!,
      Password: process.env.PASSWORD!,
      Action: "http://schemas.xmlsoap.org/ws/2004/08/addressing:Action",
    };
    client.addSoapHeader(soapHeader);

    const result = await client.searchByDateAsync({
      date: "1990-01-01",
      court: "court",
      pubType: { string: ["hoi"] },
    });

    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
