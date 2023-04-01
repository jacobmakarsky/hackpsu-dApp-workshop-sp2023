import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

async function deployLionCashFixture() {
  const LionCashFactory = await ethers.getContractFactory("LionCash");
  const [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
  const LionCash = await LionCashFactory.deploy();
  await LionCash.deployed();

  return { LionCash, owner, addr1, addr2, addrs };
}

describe("LionCash", () => {
  it("should set the initial balance of the contract creator to 100,000 tokens", async () => {
    const { LionCash, owner } = await loadFixture(deployLionCashFixture);
    const ownerBalance = await LionCash.balanceOf(await owner.getAddress());
    expect(ownerBalance).to.equal(ethers.utils.parseEther("100000"));
  });

  it("should allow users to print LionCash", async () => {
    const { LionCash, addr1 } = await loadFixture(deployLionCashFixture);
    await LionCash.connect(addr1).printLionCash(
      ethers.utils.parseEther("5000")
    );
    const addr1Balance = await LionCash.balanceOf(await addr1.getAddress());
    expect(addr1Balance).to.equal(ethers.utils.parseEther("5000"));
  });

  it("should properly transfer LionCash between accounts", async () => {
    const { LionCash, addr1, addr2 } = await loadFixture(deployLionCashFixture);
    await LionCash.connect(addr1).printLionCash(
      ethers.utils.parseEther("10000")
    );
    await LionCash.connect(addr1).transfer(
      await addr2.getAddress(),
      ethers.utils.parseEther("5000")
    );

    const addr1Balance = await LionCash.balanceOf(await addr1.getAddress());
    const addr2Balance = await LionCash.balanceOf(await addr2.getAddress());

    expect(addr1Balance).to.equal(ethers.utils.parseEther("5000"));
    expect(addr2Balance).to.equal(ethers.utils.parseEther("5000"));
  });
});
