class Transaction {
  constructor(sender, receiver, amount) {
      this.sender = sender;
      this.receiver = receiver;
      this.amount = amount;
  }
}

class Block {
  constructor(index, previousHash, transactions, timestamp = Date.now()) {
      this.index = index;
      this.previousHash = previousHash;
      this.timestamp = timestamp;
      this.transactions = transactions;
      this.hash = this.calculateHash();
      this.nonce = 0;
  }

  calculateHash() {
      return CryptoJS.SHA256(
          this.index +
          this.previousHash +
          this.timestamp +
          JSON.stringify(this.transactions) +
          this.nonce
      ).toString();
  }

  mineBlock(difficulty) {
      while (!this.hash.startsWith(Array(difficulty + 1).join("0"))) {
          this.nonce++;
          this.hash = this.calculateHash();
      }
  }
}

class Blockchain {
  constructor() {
      this.chain = [this.createGenesisBlock()];
      this.difficulty = 2;
      this.pendingTransactions = [];
  }

  createGenesisBlock() {
      return new Block(0, "0", [], Date.now());
  }

  getLatestBlock() {
      return this.chain[this.chain.length - 1];
  }

  addTransaction(transaction) {
      this.pendingTransactions.push(transaction);
  }

  minePendingTransactions() {
      const block = new Block(
          this.chain.length,
          this.getLatestBlock().hash,
          this.pendingTransactions
      );

      block.mineBlock(this.difficulty);
      this.chain.push(block);
      this.pendingTransactions = [];
  }
}

// Instantiate Blockchain
const myBlockchain = new Blockchain();

// DOM Elements
const chainDiv = document.getElementById("chain");
const transactionForm = document.getElementById("transactionForm");
const mineBlockBtn = document.getElementById("mineBlock");

// Update Blockchain UI
function updateChainUI() {
  chainDiv.innerHTML = "";
  myBlockchain.chain.forEach(block => {
      const blockDiv = document.createElement("div");
      blockDiv.classList.add("block");
      blockDiv.innerHTML = `
          <h3>Block ${block.index}</h3>
          <p><strong>Previous Hash:</strong> ${block.previousHash}</p>
          <p><strong>Hash:</strong> ${block.hash}</p>
          <p><strong>Transactions:</strong> ${JSON.stringify(block.transactions)}</p>
      `;
      chainDiv.appendChild(blockDiv);
  });
}

// Handle Transaction Form Submit
transactionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const sender = document.getElementById("sender").value;
  const receiver = document.getElementById("receiver").value;
  const amount = parseFloat(document.getElementById("amount").value);

  const transaction = new Transaction(sender, receiver, amount);
  myBlockchain.addTransaction(transaction);

  transactionForm.reset();
  alert("Transaction added! Mine a block to include it in the blockchain.");
});

// Handle Mining Block
mineBlockBtn.addEventListener("click", () => {
  myBlockchain.minePendingTransactions();
  updateChainUI();
  alert("Block mined and added to the blockchain!");
});

// Initialize UI
updateChainUI();