# Blockchain Simulator  

An *interactive blockchain simulator* built with *HTML, **CSS, and **JavaScript*. This project demonstrates the foundational principles of blockchain technology, including blocks, transactions, proof of work, mining rewards, and chain integrity. Designed with a modern and responsive UI, it is a perfect educational tool for learning blockchain basics.

---

## Features  

### Functionalities:
- *Genesis Block*: Automatically generates the first block in the blockchain.
- *Add Transactions*: Users can add mock transactions to a transaction pool.
- *Mine Blocks*: Implements Proof of Work (PoW) by solving a hash-based puzzle.
- *Blockchain Integrity*: Validates the blockchain and highlights any broken links if tampered.
- *Mining Rewards*: Rewards miners for successfully mining blocks.

### Visual Enhancements:
- Modern gradient design and hover effects.
- Responsive layout for desktop and mobile views.
- Glassmorphism-style container and interactive block elements.

---

## How It Works  

1. *Transaction Pool*:  
   - Users can create transactions by specifying sender, receiver, and amount.  
   - Transactions remain in a pool until they are mined into a block.  

2. *Mining Blocks*:  
   - A block contains multiple transactions from the transaction pool.  
   - Proof of Work ensures that the block's hash meets a specific difficulty level.  

3. *Blockchain Formation*:  
   - Each block is linked to the previous block via a hash, forming a secure chain.  

---

## Technologies Used  

- *HTML*: Provides the structure and elements for the UI.  
- *CSS*: Delivers an innovative and visually appealing design.  
- *JavaScript*: Implements blockchain functionality and interactivity.  

---

## Installation  

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blockchain-simulator.git

	2.	Navigate to the project directory:

cd blockchain-simulator


	3.	Open index.html in your favorite browser.

File Structure

blockchain-simulator/
├── index.html      # Main HTML file
├── styles.css      # CSS file for styling
├── script.js       # JavaScript file for blockchain logic
├── README.md       # Documentation file

Usage
	1.	Open the project in your browser by launching index.html.
	2.	Create Transactions:
	•	Add transactions to the pool by providing the sender, receiver, and amount.
	3.	Mine Blocks:
	•	Click the “Mine Block” button to generate new blocks.
	•	Proof of Work difficulty can be adjusted in the script for demonstration.
	4.	Inspect Blockchain:
	•	View all blocks, including their index, timestamp, transactions, hash, and nonce.
	5.	Verify Integrity:
	•	Tamper with a block to observe how it affects the chain’s validity.

Preview
	1.	Blockchain Display:
	•	Blocks are displayed in a vertical layout with details like transactions, previous hash, and computed hash.
	2.	Responsive Design:
	•	Works seamlessly on desktop and mobile devices.

Future Enhancements
	•	Smart Contracts: Add functionality to simulate smart contracts.
	•	Multiple Nodes: Simulate a decentralized blockchain with multiple nodes.
	•	Wallets: Create wallet balances for users and integrate them with transactions.
	•	Encryption: Use cryptographic libraries for more realistic hash computations.

Author

BIKRAMJOT SINGH RANYAL
kingragnar0077
Contact: vikram2482005@gmail.com
