import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import NftMinter from "../components/nftMinter.jsx"
import contractAbi from "../abi.json";
import NFTContractABI from "../contracts_abi/Membresia.json";



export default function Home() {
  return (
    <div>
        <main className={styles.main}>
        <NftMinter
          contractAddress={"0x9FaCAf075Cda7C0947DA0F0B4164332e01422E97"}
          tokenUri={"https://ipfs.io/ipfs/QmXmKy7QcQwX5CFamWsR91eNkb7auGhbPLGrk3t1Mgfbw9?filename=Analytical.JPG"}
          abi={contractAbi.abi}
        />
        </main>
    </div>
  );
}
