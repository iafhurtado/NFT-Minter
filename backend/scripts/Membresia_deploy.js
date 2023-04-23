const hre = require("hardhat");

async function main() {
	const Contract = await hre.ethers.getContractFactory("Membresia");
	const contract = await Contract.deploy();

	await contract.deployed();

	console.log("Membresia deployed to:", contract.address);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});