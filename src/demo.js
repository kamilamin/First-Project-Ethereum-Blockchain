import web3 from './web3';

const address = '0x4bC407eB62F341261C6Fb3503918693bd629111C';

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			}
		],
		"name": "cancelTransaction",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "house_ID",
				"type": "uint256"
			}
		],
		"name": "payRent",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_buyerName",
				"type": "string"
			},
			{
				"name": "_BuyerInfo",
				"type": "address"
			},
			{
				"name": "_requireRooms",
				"type": "uint256"
			}
		],
		"name": "setBuyer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ownerName",
				"type": "string"
			},
			{
				"name": "_HouseNo",
				"type": "uint256"
			},
			{
				"name": "_no_of_bed",
				"type": "uint256"
			},
			{
				"name": "_accountAddress",
				"type": "address"
			},
			{
				"name": "_cost",
				"type": "uint256"
			}
		],
		"name": "setHouse",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "Buyer",
		"outputs": [
			{
				"name": "buyerName",
				"type": "string"
			},
			{
				"name": "requireRooms",
				"type": "uint256"
			},
			{
				"name": "transactedAt",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Buyers",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "house_ID",
				"type": "uint256"
			}
		],
		"name": "getHouse",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getListOfHouseBuyers",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getListOfHouseSellers",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "Owner",
		"outputs": [
			{
				"name": "ownerName",
				"type": "string"
			},
			{
				"name": "houseNumberOwned",
				"type": "uint256"
			},
			{
				"name": "cost",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Sellers",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export default new web3.eth.Contract(abi, address);