import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, usePrepareContractWrite } from "wagmi";
import { useContractWrite } from "wagmi";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

// just the minting part of the ABI is needed
const contractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "printLionCash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
// the contract address we deployed LionCash.sol to
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Your contract address

const Home: NextPage = () => {
  // basically checks if the window has loaded before trying to render components
  // needed for conditional rendering of components
  const [isSSR, setIsSSR] = useState(true);

  const { address } = useAccount();

  const { config } = usePrepareContractWrite({
    address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
    abi: contractABI,
    functionName: "printLionCash",
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  // this is a hook that runs once when the page loads in
  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>LionCash Printer</title>
        <meta content="HackPSU dApp workshop" name="LionCash Printer" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>Welcome to LionCash Printer</h1>

        {!isSSR && address ? (
          <div>
            <button onClick={() => write?.()}>Print Free LionCash</button>
            {isLoading && <div>Check Wallet</div>}
            {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
          </div>
        ) : (
          <p className={styles.description}>
            Get started by{" "}
            <code className={styles.code}>connecting your wallet</code>
          </p>
        )}
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Powered by Next.js, RainbowKit, and WAGMI
        </a>
      </footer>
    </div>
  );
};

export default Home;
