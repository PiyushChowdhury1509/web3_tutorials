import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

export const generateKeypair = () => {
  const keypair = Keypair.generate();

  const secretKey = keypair.secretKey;
  console.log("secretKey: ", secretKey);
  const publicKey = keypair.publicKey;
  console.log("publicKey: ", publicKey);

  const message = new TextEncoder().encode("hello world");

  const signature = nacl.sign.detached(message, secretKey);
  console.log("signature: ", signature);

  const result = nacl.sign.detached.verify(
    message,
    signature,
    keypair.publicKey.toBytes(),
  );
  console.log("bytes public key: ", keypair.publicKey.toBytes());
  console.log(result);
};
