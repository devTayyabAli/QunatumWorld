export const GLABA_NFT = "0x980d34DC8649b4EBd63C1D09f3cAc64D6E388b7F";
export const GLABA_NFT_ABI = [{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "approved",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Approval",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "ApprovalForAll",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "approve",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "emergencyWithdrawUSDT",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "emergencyWithdrawVTO",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay1",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay2",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay3",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay4",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay5",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay6",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay7",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay8",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}
	],
	"name": "OwnershipTransferred",
	"type": "event"
},
{
	"inputs": [],
	"name": "pause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Paused",
	"type": "event"
},
{
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	},
	{
		"internalType": "bytes",
		"name": "_data",
		"type": "bytes"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "setApprovalForAll",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "string",
		"name": "_newBaseExtension",
		"type": "string"
	}],
	"name": "setBaseExtension",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "string",
		"name": "_uri",
		"type": "string"
	}],
	"name": "setPrefixURI",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Transfer",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "transferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "unPause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Unpaused",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "_newIndex",
		"type": "uint256"
	}],
	"name": "updateCurrentIndex",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "contract IPancakeRouter01",
		"name": "_Router",
		"type": "address"
	}],
	"name": "UpdateROUTER",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "_token",
		"type": "address"
	}],
	"name": "withdrawAssest",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "baseExtension",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "getApproved",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay1Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay2Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay3Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay4Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay5Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay6Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay7Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay8Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	}
	],
	"name": "isApprovedForAll",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "nextOwnerToExplicitlySet",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "one$VTO",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "ownerOf",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "prefixURI",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "Router",
	"outputs": [{
		"internalType": "contract IPancakeRouter01",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "bytes4",
		"name": "interfaceId",
		"type": "bytes4"
	}],
	"name": "supportsInterface",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "index",
		"type": "uint256"
	}],
	"name": "tokenByIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "index",
		"type": "uint256"
	}
	],
	"name": "tokenOfOwnerByIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "tokenURI",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "USDT",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "VTO",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "_owner",
		"type": "address"
	}],
	"name": "WalletOfOwner",
	"outputs": [{
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}],
	"stateMutability": "view",
	"type": "function"
}
]


// end 100 ----------------------------------------------

// Mint With 500--------------------------------------------------------------------
export const GLABA_NFT_500 = "0x6B009272Ba5356329b4F62EbAc6CA573e25A66D2";
export const GLABA_NFT_ABI_500 = [{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "approved",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Approval",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "ApprovalForAll",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "approve",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "emergencyWithdrawUSDT",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "emergencyWithdrawVTO",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay1",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay2",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay3",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay4",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay5",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay6",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay7",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay8",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}
	],
	"name": "OwnershipTransferred",
	"type": "event"
},
{
	"inputs": [],
	"name": "pause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Paused",
	"type": "event"
},
{
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	},
	{
		"internalType": "bytes",
		"name": "_data",
		"type": "bytes"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "setApprovalForAll",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "string",
		"name": "_newBaseExtension",
		"type": "string"
	}],
	"name": "setBaseExtension",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "string",
		"name": "_uri",
		"type": "string"
	}],
	"name": "setPrefixURI",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Transfer",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "transferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "unPause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Unpaused",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "_newIndex",
		"type": "uint256"
	}],
	"name": "updateCurrentIndex",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "contract IPancakeRouter01",
		"name": "_Router",
		"type": "address"
	}],
	"name": "UpdateROUTER",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "_token",
		"type": "address"
	}],
	"name": "withdrawAssest",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "baseExtension",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "getApproved",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay1Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay2Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay3Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay4Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay5Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay6Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay7Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay8Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	}
	],
	"name": "isApprovedForAll",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "nextOwnerToExplicitlySet",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "one$VTO",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "ownerOf",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "prefixURI",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "Router",
	"outputs": [{
		"internalType": "contract IPancakeRouter01",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "bytes4",
		"name": "interfaceId",
		"type": "bytes4"
	}],
	"name": "supportsInterface",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "index",
		"type": "uint256"
	}],
	"name": "tokenByIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "index",
		"type": "uint256"
	}
	],
	"name": "tokenOfOwnerByIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "tokenURI",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "USDT",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "VTO",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "_owner",
		"type": "address"
	}],
	"name": "WalletOfOwner",
	"outputs": [{
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}],
	"stateMutability": "view",
	"type": "function"
}
]
// End 500-----------------------------------------------------------------------------

// Mint With 1000-------------------------------------------------------------------------
export const GLABA_NFT_1000 = "0xbEa8401DBAF6E42CEc281c7c699D77134Dc67e39";
export const GLABA_NFT_ABI_1000 = [{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "approved",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Approval",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "ApprovalForAll",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "approve",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "emergencyWithdrawUSDT",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "emergencyWithdrawVTO",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay1",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay2",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay3",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay4",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay5",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay6",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay7",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay8",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}
	],
	"name": "OwnershipTransferred",
	"type": "event"
},
{
	"inputs": [],
	"name": "pause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Paused",
	"type": "event"
},
{
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	},
	{
		"internalType": "bytes",
		"name": "_data",
		"type": "bytes"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "setApprovalForAll",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "string",
		"name": "_newBaseExtension",
		"type": "string"
	}],
	"name": "setBaseExtension",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "string",
		"name": "_uri",
		"type": "string"
	}],
	"name": "setPrefixURI",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Transfer",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "transferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "unPause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Unpaused",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "_newIndex",
		"type": "uint256"
	}],
	"name": "updateCurrentIndex",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "contract IPancakeRouter01",
		"name": "_Router",
		"type": "address"
	}],
	"name": "UpdateROUTER",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "_token",
		"type": "address"
	}],
	"name": "withdrawAssest",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "baseExtension",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "getApproved",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay1Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay2Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay3Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay4Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay5Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay6Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay7Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay8Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	}
	],
	"name": "isApprovedForAll",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "nextOwnerToExplicitlySet",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "one$VTO",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "ownerOf",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "prefixURI",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "Router",
	"outputs": [{
		"internalType": "contract IPancakeRouter01",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "bytes4",
		"name": "interfaceId",
		"type": "bytes4"
	}],
	"name": "supportsInterface",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "index",
		"type": "uint256"
	}],
	"name": "tokenByIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "index",
		"type": "uint256"
	}
	],
	"name": "tokenOfOwnerByIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "tokenURI",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "USDT",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "VTO",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "_owner",
		"type": "address"
	}],
	"name": "WalletOfOwner",
	"outputs": [{
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}],
	"stateMutability": "view",
	"type": "function"
}
]

// End 1000----------------------------------------------------------------------------------

// Mint With 2500-------------------------------------------------------------------------
export const GLABA_NFT_2500 = "0x81FF9be39042561f276f6C238455De7b4994B241";
export const GLABA_NFT_ABI_2500 = [{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "approved",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Approval",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "ApprovalForAll",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "approve",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "emergencyWithdrawUSDT",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "emergencyWithdrawVTO",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay1",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay2",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay3",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay4",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay5",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay6",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay7",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay8",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}
	],
	"name": "OwnershipTransferred",
	"type": "event"
},
{
	"inputs": [],
	"name": "pause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Paused",
	"type": "event"
},
{
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	},
	{
		"internalType": "bytes",
		"name": "_data",
		"type": "bytes"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "setApprovalForAll",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "string",
		"name": "_newBaseExtension",
		"type": "string"
	}],
	"name": "setBaseExtension",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "string",
		"name": "_uri",
		"type": "string"
	}],
	"name": "setPrefixURI",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Transfer",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "transferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "unPause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Unpaused",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "_newIndex",
		"type": "uint256"
	}],
	"name": "updateCurrentIndex",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "contract IPancakeRouter01",
		"name": "_Router",
		"type": "address"
	}],
	"name": "UpdateROUTER",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "_token",
		"type": "address"
	}],
	"name": "withdrawAssest",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "baseExtension",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "getApproved",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay1Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay2Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay3Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay4Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay5Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay6Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay7Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay8Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	}
	],
	"name": "isApprovedForAll",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "nextOwnerToExplicitlySet",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "one$VTO",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "ownerOf",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "prefixURI",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "Router",
	"outputs": [{
		"internalType": "contract IPancakeRouter01",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "bytes4",
		"name": "interfaceId",
		"type": "bytes4"
	}],
	"name": "supportsInterface",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "index",
		"type": "uint256"
	}],
	"name": "tokenByIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "index",
		"type": "uint256"
	}
	],
	"name": "tokenOfOwnerByIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "tokenURI",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "USDT",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "VTO",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "_owner",
		"type": "address"
	}],
	"name": "WalletOfOwner",
	"outputs": [{
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}],
	"stateMutability": "view",
	"type": "function"
}
]
// End 2500----------------------------------------------------------------------------------

// Mint With 5000-------------------------------------------------------------------------
export const GLABA_NFT_5000 = "0x6f8E7DaB2F8C581445Ad36a920464c9C7De82D84";
export const GLABA_NFT_ABI_5000 = [{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "approved",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Approval",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "ApprovalForAll",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "approve",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "emergencyWithdrawUSDT",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "emergencyWithdrawVTO",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay1",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay2",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay3",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay4",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay5",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay6",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay7",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "mintPay8",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}
	],
	"name": "OwnershipTransferred",
	"type": "event"
},
{
	"inputs": [],
	"name": "pause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Paused",
	"type": "event"
},
{
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	},
	{
		"internalType": "bytes",
		"name": "_data",
		"type": "bytes"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "setApprovalForAll",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "string",
		"name": "_newBaseExtension",
		"type": "string"
	}],
	"name": "setBaseExtension",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "string",
		"name": "_uri",
		"type": "string"
	}],
	"name": "setPrefixURI",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Transfer",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "transferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "unPause",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Unpaused",
	"type": "event"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "_newIndex",
		"type": "uint256"
	}],
	"name": "updateCurrentIndex",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "contract IPancakeRouter01",
		"name": "_Router",
		"type": "address"
	}],
	"name": "UpdateROUTER",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "_token",
		"type": "address"
	}],
	"name": "withdrawAssest",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "baseExtension",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "getApproved",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay1Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay2Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay3Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay4Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay5Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay6Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay7Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "count",
		"type": "uint256"
	}],
	"name": "getmintPay8Price",
	"outputs": [{
		"internalType": "uint256",
		"name": "token0",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "token1",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	}
	],
	"name": "isApprovedForAll",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "nextOwnerToExplicitlySet",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "one$VTO",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "ownerOf",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "prefixURI",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "Router",
	"outputs": [{
		"internalType": "contract IPancakeRouter01",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "bytes4",
		"name": "interfaceId",
		"type": "bytes4"
	}],
	"name": "supportsInterface",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "index",
		"type": "uint256"
	}],
	"name": "tokenByIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "index",
		"type": "uint256"
	}
	],
	"name": "tokenOfOwnerByIndex",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}],
	"name": "tokenURI",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "USDT",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "VTO",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "_owner",
		"type": "address"
	}],
	"name": "WalletOfOwner",
	"outputs": [{
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}],
	"stateMutability": "view",
	"type": "function"
}
]

// End 5000----------------------------------------------------------------------------------


// Staking Contract---------------------------------


//   Mint with 100
export const Staking_NFT = "0x20547539F595611298be61e8Adb2836A1011EFC0";
export const Staking_NFT_ABI = [{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "OwnershipTransferred",
	"type": "event"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "Stake",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Staked_Time",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Unstacked_ids",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_Token",
		"type": "address"
	}],
	"name": "WithdrawToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "find",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_stakeHolder",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "isStaked",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused_staking",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "stake_Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "totalStakedNft",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "_tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "unStake",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "_tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "unStake_owner",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "unStaked_Time",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "unpaused_staking",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "unstake_Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_staker",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "userStakedNFT",
	"outputs": [{
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "withdrawBNB",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}]
// end 100 ----------------------------------------------

// Mint With 500--------------------------------------------------------------------
export const Staking_NFT_500 = "0x722c642fAb5e7DEBFB61B73217d0cFf5c50f2371";
export const Staking_NFT_ABI_500 = [{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "OwnershipTransferred",
	"type": "event"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "Stake",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Staked_Time",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Unstacked_ids",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_Token",
		"type": "address"
	}],
	"name": "WithdrawToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "find",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_stakeHolder",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "isStaked",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused_staking",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "stake_Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "totalStakedNft",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "_tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "unStake",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "_tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "unStake_owner",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "unStaked_Time",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "unpaused_staking",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "unstake_Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_staker",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "userStakedNFT",
	"outputs": [{
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "withdrawBNB",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}]
// End 500-----------------------------------------------------------------------------

// Mint With 1000-------------------------------------------------------------------------
export const Staking_NFT_1000 = "0x7A19CA0F4F641811f18c58d9D6006ADec8e6C0ba";
export const Staking_NFT_ABI_1000 = [{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "OwnershipTransferred",
	"type": "event"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "Stake",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Staked_Time",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Unstacked_ids",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_Token",
		"type": "address"
	}],
	"name": "WithdrawToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "find",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_stakeHolder",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "isStaked",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused_staking",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "stake_Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "totalStakedNft",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "_tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "unStake",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "_tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "unStake_owner",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "unStaked_Time",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "unpaused_staking",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "unstake_Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_staker",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "userStakedNFT",
	"outputs": [{
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "withdrawBNB",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}]
// End 1000----------------------------------------------------------------------------------

// Mint With 2500-------------------------------------------------------------------------
export const Staking_NFT_2500 = "0xC5a6d0fB1fe1c6b7135d3B984C5f158C897840e0";
export const Staking_NFT_ABI_2500 = [{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "OwnershipTransferred",
	"type": "event"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "Stake",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Staked_Time",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Unstacked_ids",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_Token",
		"type": "address"
	}],
	"name": "WithdrawToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "find",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_stakeHolder",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "isStaked",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused_staking",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "stake_Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "totalStakedNft",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "_tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "unStake",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "_tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "unStake_owner",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "unStaked_Time",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "unpaused_staking",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "unstake_Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_staker",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "userStakedNFT",
	"outputs": [{
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "withdrawBNB",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}]
// End 2500----------------------------------------------------------------------------------

// Mint With 5000-------------------------------------------------------------------------
export const Staking_NFT_5000 = "0xCab51783e563FF6EE0cb90f15BD52f1650018623";
export const Staking_NFT_ABI_5000 = [{
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "OwnershipTransferred",
	"type": "event"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "Stake",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Staked_Time",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "Unstacked_ids",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_Token",
		"type": "address"
	}],
	"name": "WithdrawToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "find",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_stakeHolder",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "isStaked",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused_staking",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "stake_Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "totalStakedNft",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "_tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "unStake",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256[]",
		"name": "_tokenId",
		"type": "uint256[]"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "unStake_owner",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "unStaked_Time",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "unpaused_staking",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "unstake_Tokenid",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_staker",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "_nftAddress",
		"type": "address"
	}],
	"name": "userStakedNFT",
	"outputs": [{
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "withdrawBNB",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}]

// End 5000----------------------------------------------------------------------------------










// Token Addresses------------------------------------------------------------------------------


////////////   Staking MAin  Contract     /////////////////////
export const Staking_Main = "0x22c825524aF660ad06925E8D14AEE1c9c2233e05";
export const Staking_Main_ABI = [{ "inputs": [{ "internalType": "address[]", "name": "_nftContracts", "type": "address[]" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "startTime", "type": "uint256" }], "name": "Staked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Unstaked", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "_nftContract", "type": "address" }], "name": "allowNFTContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_nftContract", "type": "address" }], "name": "disallowNFTContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getStakedNFTs", "outputs": [{ "components": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }], "internalType": "struct FexRaceStaking.StakedNFT[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_nftContract", "type": "address" }], "name": "isNFTContractAllowed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_duration", "type": "uint256" }], "name": "setStakingDurationTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContractAddress", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "stake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stakingDurationTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContractAddress", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]





export const LaRace_Governance_Token = "0x052775Cf897b3eC894F26b8d801C514123c305D1";
export const LaRace_Governance_Token_ABI = [{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Approval",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "uint256",
		"name": "total",
		"type": "uint256"
	}, {
		"indexed": false,
		"internalType": "address",
		"name": "tokenAddress",
		"type": "address"
	}],
	"name": "Multisended",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Paused",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Transfer",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Unpaused",
	"type": "event"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_addr",
		"type": "address"
	}, {
		"internalType": "bool",
		"name": "_state",
		"type": "bool"
	}],
	"name": "ExcludefromLimits",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_balances",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_firstBuytime",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_firstReceivetime",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_firstSelltime",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_firstTransfer",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_isExcluded",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_totTransfers",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_totalAmountBuy",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_totalAmountSell",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_totalAmountreceive",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_pair",
		"type": "address"
	}],
	"name": "addpairaddress",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_addr",
		"type": "address"
	}],
	"name": "addtoblacklist",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_owner",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}],
	"name": "allowance",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "approve",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "blacklist",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "buy",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "buying",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "decimals",
	"outputs": [{
		"internalType": "uint8",
		"name": "",
		"type": "uint8"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "subtractedValue",
		"type": "uint256"
	}],
	"name": "decreaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "getTokens",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "addedValue",
		"type": "uint256"
	}],
	"name": "increaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "locktime",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "maxMultisendPday",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "maxTrPerDay",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "maxbuyamount",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "maxsellamount",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address[]",
		"name": "_contributors",
		"type": "address[]"
	}, {
		"internalType": "uint256[]",
		"name": "__balances",
		"type": "uint256[]"
	}],
	"name": "multisendToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "multisendaccount",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "pancakePair",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "pauseContract",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_address",
		"type": "address"
	}],
	"name": "register",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "pure",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_addr",
		"type": "address"
	}],
	"name": "removefromblacklist",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_token",
		"type": "uint256"
	}],
	"name": "sell",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "selling",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address payable[]",
		"name": "_contributors",
		"type": "address[]"
	}, {
		"internalType": "uint256[]",
		"name": "__balances",
		"type": "uint256[]"
	}],
	"name": "sendMultiBnb",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "setTransferperdaylimti",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "setbuylimit",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "setmaxMultisendPday",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "setmaxsell",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_addr",
		"type": "address"
	}],
	"name": "setmultisendaccount",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "transfer",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "sender",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "transferFrom",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_newonwer",
		"type": "address"
	}],
	"name": "transferownership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "unpauseContract",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "withDraw",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}]

export const WIRE_Token = "0x3b3CD14d6D2fc39A68630582c2EB8ec98C21A81e";
export const WIRE_Token_ABI = [{
	"constant": true,
	"inputs": [],
	"name": "name",
	"outputs": [{
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "spender",
		"type": "address"
	}, {
		"name": "value",
		"type": "uint256"
	}],
	"name": "approve",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "withDraw",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "erc20token",
	"outputs": [{
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "from",
		"type": "address"
	}, {
		"name": "to",
		"type": "address"
	}, {
		"name": "value",
		"type": "uint256"
	}],
	"name": "transferFrom",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "decimals",
	"outputs": [{
		"name": "",
		"type": "uint8"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "spender",
		"type": "address"
	}, {
		"name": "addedValue",
		"type": "uint256"
	}],
	"name": "increaseAllowance",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "value",
		"type": "uint256"
	}],
	"name": "burn",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_address",
		"type": "address"
	}],
	"name": "register",
	"outputs": [{
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "pure",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "_contributors",
		"type": "address[]"
	}, {
		"name": "_balances",
		"type": "uint256[]"
	}],
	"name": "sendMultiBnb",
	"outputs": [],
	"payable": true,
	"stateMutability": "payable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "owner",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "from",
		"type": "address"
	}, {
		"name": "value",
		"type": "uint256"
	}],
	"name": "burnFrom",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "spender",
		"type": "address"
	}, {
		"name": "subtractedValue",
		"type": "uint256"
	}],
	"name": "decreaseAllowance",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [],
	"name": "buy",
	"outputs": [],
	"payable": true,
	"stateMutability": "payable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "to",
		"type": "address"
	}, {
		"name": "value",
		"type": "uint256"
	}],
	"name": "transfer",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "_contributors",
		"type": "address[]"
	}, {
		"name": "_balances",
		"type": "uint256[]"
	}],
	"name": "multisendToken",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "getTokens",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "owner",
		"type": "address"
	}, {
		"name": "spender",
		"type": "address"
	}],
	"name": "allowance",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "_token",
		"type": "uint256"
	}],
	"name": "sell",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"name": "total",
		"type": "uint256"
	}, {
		"indexed": false,
		"name": "tokenAddress",
		"type": "address"
	}],
	"name": "Multisended",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"name": "from",
		"type": "address"
	}, {
		"indexed": true,
		"name": "to",
		"type": "address"
	}, {
		"indexed": false,
		"name": "value",
		"type": "uint256"
	}],
	"name": "Transfer",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"name": "owner",
		"type": "address"
	}, {
		"indexed": true,
		"name": "spender",
		"type": "address"
	}, {
		"indexed": false,
		"name": "value",
		"type": "uint256"
	}],
	"name": "Approval",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"name": "previousOwner",
		"type": "address"
	}, {
		"indexed": false,
		"name": "newOwner",
		"type": "address"
	}],
	"name": "OwnershipTransferred",
	"type": "event"
}]


export const Minting_Token = "0x753ad9B6e175761bBc058b2192728a0F0b5d0275";
export const Minting_Token_ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "total", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "tokenAddress", "type": "address" }], "name": "Multisended", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [], "name": "Buy", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "Duration", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }, { "internalType": "bool", "name": "_state", "type": "bool" }], "name": "ExcludefromLimits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "RemainingReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_token", "type": "uint256" }], "name": "Sell", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "WithDrawBNB", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "Withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "WithdrawableTokens", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_firstBuytime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_firstReceivetime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_firstSelltime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_firstTransfer", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_isExcluded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_totTransfers", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_totalAmountBuy", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_totalAmountSell", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_totalAmountreceive", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_pair", "type": "address" }], "name": "addPairAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "addToblackList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "blacklist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "buying", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "calculatingPerMinutes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "getTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "locktime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxBuyAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMultisendPday", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxTrPerDay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxsSellingAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_contributors", "type": "address[]" }, { "internalType": "uint256[]", "name": "__balances", "type": "uint256[]" }], "name": "multiSendToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "multisendaccount", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pancakePair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "removeFromBlackList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "selling", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address payable[]", "name": "_contributors", "type": "address[]" }, { "internalType": "uint256[]", "name": "__balances", "type": "uint256[]" }], "name": "sendMultiBnb", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "setBuyLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "setMaxMultiSendPday", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "setMaxSell", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "setMultiSendAccount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "setPerDayTransferLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setUnPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_time", "type": "uint256" }], "name": "updateTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawlAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]

export const USDT_Token = "0x55d398326f99059fF775485246999027B3197955";
export const USDT_Token_ABI = [{
	"inputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Approval",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "OwnershipTransferred",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Transfer",
	"type": "event"
}, {
	"constant": true,
	"inputs": [],
	"name": "_decimals",
	"outputs": [{
		"internalType": "uint8",
		"name": "",
		"type": "uint8"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "_name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "_symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}],
	"name": "allowance",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "approve",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "burn",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "decimals",
	"outputs": [{
		"internalType": "uint8",
		"name": "",
		"type": "uint8"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "subtractedValue",
		"type": "uint256"
	}],
	"name": "decreaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "getOwner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "addedValue",
		"type": "uint256"
	}],
	"name": "increaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "mint",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "transfer",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "sender",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "transferFrom",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}]

export const BUSD_Token = "0x55d398326f99059fF775485246999027B3197955";
export const BUSD_Token_ABI = [{
	"inputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Approval",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "OwnershipTransferred",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Transfer",
	"type": "event"
}, {
	"constant": true,
	"inputs": [],
	"name": "_decimals",
	"outputs": [{
		"internalType": "uint8",
		"name": "",
		"type": "uint8"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "_name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "_symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}],
	"name": "allowance",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "approve",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "burn",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "decimals",
	"outputs": [{
		"internalType": "uint8",
		"name": "",
		"type": "uint8"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "subtractedValue",
		"type": "uint256"
	}],
	"name": "decreaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "getOwner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "addedValue",
		"type": "uint256"
	}],
	"name": "increaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "mint",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "transfer",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "sender",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "transferFrom",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}]




export const LAR_withdrowal = "0x4cCB65D2d225fc6eB6F6E3dE730Af4d9387f1738";
export const LAR_withdrowal_ABI = [{
	"inputs": [{
		"internalType": "address",
		"name": "_subOwner",
		"type": "address"
	}, {
		"internalType": "contract IERC20",
		"name": "_Token",
		"type": "address"
	}, {
		"internalType": "contract IPancakePair",
		"name": "_bnbtobusd",
		"type": "address"
	}, {
		"internalType": "contract IPancakePair",
		"name": "_Tokentobnblp",
		"type": "address"
	}],
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "OwnershipTransferred",
	"type": "event"
}, {
	"inputs": [],
	"name": "BUSDtobnb",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "BnbtoBusd",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "bool",
		"name": "_status",
		"type": "bool"
	}],
	"name": "FlipclaimPeriod",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "GetCoin",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "Ids_Wallet",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "Token",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "Tokentobnb",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "Tokentobnblp",
	"outputs": [{
		"internalType": "contract IPancakePair",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "WalletIds",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "allowance",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_addr",
		"type": "address"
	}, {
		"internalType": "bool",
		"name": "status",
		"type": "bool"
	}],
	"name": "blacklist",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "bnbbusdlp",
	"outputs": [{
		"internalType": "contract IPancakePair",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "bnbtoToken",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "changeTax",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_time",
		"type": "uint256"
	}],
	"name": "changeTime",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_subOwner",
		"type": "address"
	}],
	"name": "change_SubOwner",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_dolAmt",
		"type": "uint256"
	}],
	"name": "claimAirdrop",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "claimPeriod",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "contract IERC20",
		"name": "_token",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "_tokenAmount",
		"type": "uint256"
	}],
	"name": "emergencyWithdraw",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "Amount",
		"type": "uint256"
	}],
	"name": "emergencyWithdrawETH",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "isBlackList",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "lastClaim",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "maxDolAmt",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_add",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "_Dollaramount",
		"type": "uint256"
	}],
	"name": "modifyAllowance",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "one$toToken",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "pauseContract",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "pricetime",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_token",
		"type": "uint256"
	}],
	"name": "sell",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address[]",
		"name": "_addr",
		"type": "address[]"
	}, {
		"internalType": "uint256[]",
		"name": "_amounts",
		"type": "uint256[]"
	}, {
		"internalType": "uint256[]",
		"name": "id",
		"type": "uint256[]"
	}],
	"name": "setClaimers",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address[]",
		"name": "_addr",
		"type": "address[]"
	}, {
		"internalType": "uint256[]",
		"name": "ids",
		"type": "uint256[]"
	}],
	"name": "setWalletIds",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address[]",
		"name": "_addr",
		"type": "address[]"
	}, {
		"internalType": "uint256[]",
		"name": "ids",
		"type": "uint256[]"
	}],
	"name": "setWalletIds_SUbOwner",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_val",
		"type": "uint256"
	}],
	"name": "setmaxTokenAmt",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "sub_owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "tax",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "time",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "unpauseContract",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "usdt",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amt",
		"type": "uint256"
	}],
	"name": "value",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}]

export const LAG_withdrowal = "0xF117C391CbfDf85532CBB4a020558760BF9aA742";
export const LAG_withdrowal_ABI = [{
	"inputs": [{
		"internalType": "address",
		"name": "_subOwner",
		"type": "address"
	}, {
		"internalType": "contract IERC20",
		"name": "_Token",
		"type": "address"
	}],
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "OwnershipTransferred",
	"type": "event"
}, {
	"inputs": [{
		"internalType": "bool",
		"name": "_status",
		"type": "bool"
	}],
	"name": "FlipclaimPeriod",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "GetCoin",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "Ids_Wallet",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "Token",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "WalletIds",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "allowance",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_addr",
		"type": "address"
	}, {
		"internalType": "bool",
		"name": "status",
		"type": "bool"
	}],
	"name": "blacklist",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "changeTax",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_time",
		"type": "uint256"
	}],
	"name": "changeTime",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_subOwner",
		"type": "address"
	}],
	"name": "change_SubOwner",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_dolAmt",
		"type": "uint256"
	}],
	"name": "claimAirdrop",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "claimPeriod",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "contract IERC20",
		"name": "_token",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "_tokenAmount",
		"type": "uint256"
	}],
	"name": "emergencyWithdraw",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "Amount",
		"type": "uint256"
	}],
	"name": "emergencyWithdrawETH",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "isBlackList",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "lastClaim",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "maxDolAmt",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_add",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "_Dollaramount",
		"type": "uint256"
	}],
	"name": "modifyAllowance",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "pauseContract",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "pricetime",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_token",
		"type": "uint256"
	}],
	"name": "sell",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address[]",
		"name": "_addr",
		"type": "address[]"
	}, {
		"internalType": "uint256[]",
		"name": "_amounts",
		"type": "uint256[]"
	}, {
		"internalType": "uint256[]",
		"name": "id",
		"type": "uint256[]"
	}],
	"name": "setClaimers",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address[]",
		"name": "_addr",
		"type": "address[]"
	}, {
		"internalType": "uint256[]",
		"name": "ids",
		"type": "uint256[]"
	}],
	"name": "setWalletIds",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address[]",
		"name": "_addr",
		"type": "address[]"
	}, {
		"internalType": "uint256[]",
		"name": "ids",
		"type": "uint256[]"
	}],
	"name": "setWalletIds_SUbOwner",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_val",
		"type": "uint256"
	}],
	"name": "setmaxTokenAmt",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "sub_owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "tax",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "time",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "unpauseContract",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "usdt",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}]

export const LaRace_Gaming_Token = "0x3A49e91E69e18D886f33155c4De23dD3819626e9";
export const LaRace_Gaming_Token_ABI = [{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Approval",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "uint256",
		"name": "total",
		"type": "uint256"
	}, {
		"indexed": false,
		"internalType": "address",
		"name": "tokenAddress",
		"type": "address"
	}],
	"name": "Multisended",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Paused",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Transfer",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Unpaused",
	"type": "event"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_addr",
		"type": "address"
	}, {
		"internalType": "bool",
		"name": "_state",
		"type": "bool"
	}],
	"name": "ExcludefromLimits",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_balances",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_firstBuytime",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_firstReceivetime",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_firstSelltime",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_firstTransfer",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_isExcluded",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_totTransfers",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_totalAmountBuy",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_totalAmountSell",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "_totalAmountreceive",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_pair",
		"type": "address"
	}],
	"name": "addpairaddress",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_addr",
		"type": "address"
	}],
	"name": "addtoblacklist",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_owner",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}],
	"name": "allowance",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "approve",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "blacklist",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "burn",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "buy",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "buying",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "decimals",
	"outputs": [{
		"internalType": "uint8",
		"name": "",
		"type": "uint8"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "subtractedValue",
		"type": "uint256"
	}],
	"name": "decreaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "getTokens",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "addedValue",
		"type": "uint256"
	}],
	"name": "increaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "locktime",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "maxMultisendPday",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "maxTrPerDay",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "maxbuyamount",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "maxsellamount",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "mint",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address[]",
		"name": "_contributors",
		"type": "address[]"
	}, {
		"internalType": "uint256[]",
		"name": "__balances",
		"type": "uint256[]"
	}],
	"name": "multisendToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "multisendaccount",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "pancakePair",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "pauseContract",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_address",
		"type": "address"
	}],
	"name": "register",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "pure",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_addr",
		"type": "address"
	}],
	"name": "removefromblacklist",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_token",
		"type": "uint256"
	}],
	"name": "sell",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "selling",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address payable[]",
		"name": "_contributors",
		"type": "address[]"
	}, {
		"internalType": "uint256[]",
		"name": "__balances",
		"type": "uint256[]"
	}],
	"name": "sendMultiBnb",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "setTransferperdaylimti",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "setbuylimit",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "setmaxMultisendPday",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "setmaxsell",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_addr",
		"type": "address"
	}],
	"name": "setmultisendaccount",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "transfer",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "sender",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "transferFrom",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_newonwer",
		"type": "address"
	}],
	"name": "transferownership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "unpauseContract",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "withDraw",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}]