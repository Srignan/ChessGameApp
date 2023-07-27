import './pieces';
import './ui';

const chessBoard = document.querySelector("#chessBoard"); 
const playerDisplay = document.querySelector("#player");
const numRanks = 8;
const numFiles = 8;
const endOfRank = 7;
const endOfFile = 56;
var moveStartPiece;
var moveStartId;
var moveEndSquare;
var moveEndId;
var allLegalMovesWhite = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var allLegalMovesBlack = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var legalMoves = [];
var colorTurn = "white";
var colorTurnIsInCheck = false;
var moveUpLeft = -9;
var moveUp = -8;
var moveUpRight = -7;
var moveLeft = -1;
var moveRight = 1;
var moveDownLeft = 7;
var moveDown = 8;
var moveDownRight = 9;

var boardMatrix = 
[
	blackRook, blackKnight, blackBishop, blackQueen, blackKing, blackBishop, blackKnight, blackRook,
	blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn,
	'', '', '', '', '', '', '', '',
	'', '', '', '', '', '', '', '',
	'', '', '', '', '', '', '', '',
	'', '', '', '', '', '', '', '',
	whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn,
	whiteRook, whiteKnight, whiteBishop, whiteQueen, whiteKing, whiteBishop, whiteKnight, whiteRook
];

function createBoard()
{
	boardMatrix.forEach((startingPiece, i) => 
	{
		const square = document.createElement("div");
		square.classList.add("square");
		square.innerHTML = startingPiece;
		if(square.children[0])
		{
			let svgDiv = square.children[0];
			svgDiv.setAttribute("draggable", true)
			
			let svg = square.children[0].children[0];
			svg.setAttribute("viewBox", "2.5 2.5 40 40");
			
		}
		square.setAttribute("squareId", i);
		let rank = Math.floor(i / 8);
		if (rank % 2 === 0)
		{
			square.classList.add(i % 2 === 0 ? "tan" : "green")
		}
		else
		{
			square.classList.add(i % 2 === 0 ? "green" : "tan")
		}
		square.classList.add("green");
		chessBoard.append(square);
	});

	let pieces = document.querySelectorAll("div.piece");
	let pieceId;
	legalMoves = [];
	pieces.forEach((piece, i) =>
	{
		pieceId = i;
		piece.setAttribute("pieceId", pieceId);
		if((pieceId === 0) || (pieceId === 4) || (pieceId === 7) || (pieceId === 24) || (pieceId === 28) || (pieceId === 31))
		{
			piece.setAttribute("hasMoved", 0);
		}
		if(piece.id.includes("white"))
		{
			piece.setAttribute("color", '1');
		}
		else
		{
			piece.setAttribute("color", '0');
		}
	});

	whiteKingSquareId = Number(document.querySelector("[pieceId='" + 28 + "']").parentNode.getAttribute("squareId"));
	blackKingSquareId = Number(document.querySelector("[pieceId='" + 4 + "']").parentNode.getAttribute("squareId"));
	allLegalMovesWhite = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	allLegalMovesBlack = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	populateDefaultKingMoves(whiteKingSquareId, true);
	populateDefaultKingMoves(blackKingSquareId, false);
	
	pieces = document.querySelectorAll("[color='" + 1 + "']");
	legalMoves = [];
	pieces.forEach((piece) =>
	{
		moveStartId = Number(piece.parentNode.getAttribute("squareId"));
		pieceId = Number(piece.getAttribute("pieceId"));
		if(!(pieceId === 28))
		{
			moveStartPiece = piece;
			findLegalMoves();
			allLegalMovesWhite[pieceId - 16] = legalMoves;
			legalMoves = [];
		}
	});

	pieces = document.querySelectorAll("[color='" + 0 + "']");
	legalMoves = [];
	pieces.forEach((piece) =>
	{
		moveStartId = Number(piece.parentNode.getAttribute("squareId"));
		pieceId = Number(piece.getAttribute("pieceId"));
		if(!(pieceId === 4))
		{
			moveStartPiece = piece;
			findLegalMoves();
			allLegalMovesBlack[pieceId] = legalMoves;
			legalMoves = [];
		}
	});

	let piece;
	legalMoves = [];
	allLegalMovesWhite[28 - 16] = [];
	piece = document.querySelector("[pieceId='" + 28 + "']");
	moveStartId = Number(piece.parentNode.getAttribute("squareId"));
	pieceId = 28;
	moveStartPiece = piece;
	findLegalMoves();
	allLegalMovesWhite[pieceId - 16] = legalMoves;
	legalMoves = [];

	legalMoves = [];
	allLegalMovesBlack[4] = [];
	piece = document.querySelector("[pieceId='" + 4 + "']");
	moveStartId = Number(piece.parentNode.getAttribute("squareId"));
	pieceId = 4;
	moveStartPiece = piece;
	findLegalMoves();
	allLegalMovesBlack[pieceId] = legalMoves;
	legalMoves = [];
}

function populateAllLegalMovesWhite()
{
	let pieceId;
	let pieces = document.querySelectorAll("[color='" + 1 + "']");

	legalMoves = [];
	pieces.forEach((piece) =>
	{
		moveStartId = Number(piece.parentNode.getAttribute("squareId"));
		pieceId = Number(piece.getAttribute("pieceId"));
		if(!(pieceId === 28))
		{
			moveStartPiece = piece;
			findLegalMoves();
			allLegalMovesWhite[pieceId - 16] = legalMoves;
			legalMoves = [];
		}
	});
}

function populateAllLegalMovesBlack()
{
	let pieceId;
	let pieces = document.querySelectorAll("[color='" + 0 + "']");
	
	legalMoves = [];
	pieces.forEach((piece) =>
	{
		moveStartId = Number(piece.parentNode.getAttribute("squareId"));
		pieceId = Number(piece.getAttribute("pieceId"));
		if(!(pieceId === 4))
		{
			moveStartPiece = piece;
			findLegalMoves();
			allLegalMovesBlack[pieceId] = legalMoves;
			legalMoves = [];
		}
	});
}

function populateAllLegalMovesKings()
{
	let pieceId;
	let piece;
	let allLegalMovesTemp1;
	let allLegalMovesTemp2;
	let kingLegalMovesTemp1;
	let kingLegalMovesTemp2;

	allLegalMovesTemp1 = allLegalMovesWhite.map((x) => x);
	allLegalMovesTemp2 = allLegalMovesBlack.map((x) => x);
	legalMoves = [];
	allLegalMovesWhite[28 - 16] = [];
	for(let i = 8; i < 16; i++)
	{
		allLegalMovesBlack[i] = [];
	}
	piece = document.querySelector("[pieceId='" + 28 + "']");
	moveStartId = Number(piece.parentNode.getAttribute("squareId"));
	pieceId = 28;
	moveStartPiece = piece;
	findLegalMoves();
	kingLegalMovesTemp1 = legalMoves.map((x) => x);
	legalMoves = [];
	allLegalMovesWhite = allLegalMovesTemp1.map((x) => x);
	allLegalMovesTemp1[pieceId - 16] = kingLegalMovesTemp1.map((x) => x);

	legalMoves = [];
	allLegalMovesBlack = allLegalMovesTemp2.map((x) => x);
	allLegalMovesBlack[4] = [];
	for(let i = 0; i < 8; i++)
	{
		allLegalMovesWhite[i] = [];
	}
	piece = document.querySelector("[pieceId='" + 4 + "']");
	moveStartId = Number(piece.parentNode.getAttribute("squareId"));
	pieceId = 4;
	moveStartPiece = piece;
	findLegalMoves();
	kingLegalMovesTemp2 = legalMoves.map((x) => x);
	legalMoves = [];
	allLegalMovesBlack[pieceId] = kingLegalMovesTemp2.map((x) => x);

	allLegalMovesWhite = allLegalMovesTemp1.map((x) => x);
}

function populateDefaultKingMoves(kingId, isWhite)
{
	let kingRank = Math.floor(kingId / numRanks);
	let kingFile = kingId % numFiles;

	if(isWhite)
	{
		for(let i = 0; i < 3; i++)
		{
			if((kingRank === 0) || ((kingFile === 7) && (i === 2)))
			{
				break;
			}
			if((kingFile === 0) && (i === 0))
			{
				continue;
			}
			endId = kingId + moveUpLeft + i;
			if((endId > 0) && (endId < 63))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				if(endSquare.children[0])
				{
					if(endSquare.children[0].id.includes("black"))
					{
						allLegalMovesWhite[12].push(endId);
					}
					else
					{
						endSquare.children[0].setAttribute("isDefendedWhite", '');
					}
				}
				else
				{
					allLegalMovesWhite[12].push(endId);
				}
			}
		}

		for(let i = 0; i < 3; i++)
		{
			if((kingFile === 7) && (i === 2))
			{
				break;
			}
			if((kingFile === 0) && (i === 0))
			{
				continue;
			}
			endId = kingId + moveLeft + i;
			if((endId > 0) && (endId < 63) && (i !== 1))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				if(endSquare.children[0])
				{
					if(endSquare.children[0].id.includes("black"))
					{
						allLegalMovesWhite[12].push(endId);
					}
					else
					{
						endSquare.children[0].setAttribute("isDefendedWhite", '');
					}
				}
				else
				{
					allLegalMovesWhite[12].push(endId);
				}
			}
		}

		for(let i = 0; i < 3; i++)
		{
			if((kingRank === 7) || ((kingFile === 7) && (i === 2)))
			{
				break;
			}
			if((kingFile === 0) && (i === 0))
			{
				continue;
			}
			endId = kingId + moveDownLeft + i;
			if((endId > 0) && (endId < 63))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				if(endSquare.children[0])
				{
					if(endSquare.children[0].id.includes("black"))
					{
						allLegalMovesWhite[12].push(endId);
					}
					else
					{
						endSquare.children[0].setAttribute("isDefendedWhite", '');
					}
				}
				else
				{
					allLegalMovesWhite[12].push(endId);
				}
			}
		}
	}
	else
	{
		for(let i = 0; i < 3; i++)
		{
			if((kingRank === 0) || ((kingFile === 7) && (i === 2)))
			{
				break;
			}
			if((kingFile === 0) && (i === 0))
			{
				continue;
			}
			endId = kingId + moveUpLeft + i;
			if((endId > 0) && (endId < 63))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				if(endSquare.children[0])
				{
					if(endSquare.children[0].id.includes("white"))
					{
						allLegalMovesBlack[4].push(endId);
					}
					else
					{
						endSquare.children[0].setAttribute("isDefendedBlack", '');
					}
				}
				else
				{
					allLegalMovesBlack[4].push(endId);
				}
			}
		}

		for(let i = 0; i < 3; i++)
		{
			if((kingFile === 7) && (i === 2))
			{
				break;
			}
			if((kingFile === 0) && (i === 0))
			{
				continue;
			}
			endId = kingId + moveLeft + i;
			if((endId > 0) && (endId < 63) && (i !== 1))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				if(endSquare.children[0])
				{
					if(endSquare.children[0].id.includes("white"))
					{
						allLegalMovesBlack[4].push(endId);
					}
					else
					{
						endSquare.children[0].setAttribute("isDefendedBlack", '');
					}
				}
				else
				{
					allLegalMovesBlack[4].push(endId);
				}
			}
		}

		for(let i = 0; i < 3; i++)
		{
			if((kingRank === 7) || ((kingFile === 7) && (i === 2)))
			{
				break;
			}
			if((kingFile === 0) && (i === 0))
			{
				continue;
			}
			endId = kingId + moveDownLeft + i;
			if((endId > 0) && (endId < 63))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				if(endSquare.children[0])
				{
					if(endSquare.children[0].id.includes("white"))
					{
						allLegalMovesBlack[4].push(endId);
					}
					else
					{
						endSquare.children[0].setAttribute("isDefendedBlack", '');
					}
				}
				else
				{
					allLegalMovesBlack[4].push(endId);
				}
			}
		}
	}
}

function checkAndPushLegalMove(endSquare)
{
	if(endSquare.children[0])
	{
		if(moveStartPiece.id.includes("white"))
		{
			if(endSquare.children[0].id.includes("black"))
			{
				legalMoves.push(Number(endSquare.getAttribute("squareId")));
			}
			else
			{
				endSquare.children[0].setAttribute("isDefendedWhite", '');
			}
		}
		else
		{
			if(endSquare.children[0].id.includes("white"))
			{
				legalMoves.push(Number(endSquare.getAttribute("squareId")));
			}
			else
			{
				endSquare.children[0].setAttribute("isDefendedBlack", '');
			}
		}
	}
	else
	{
		legalMoves.push(Number(endSquare.getAttribute("squareId")));
	}
}

function onlyAllowBlockWhite(blockMoves)
{
	let tempBlockIndex;
	let tempBlockMoves = [];
	let i;
	let j;

	for(i = 0; i < 16; i++)
	{
		if(i === 12)
		{
			continue;
		}
		for(j = 0; j < blockMoves.length; j++)
		{
			tempBlockIndex = allLegalMovesWhite[i].indexOf(blockMoves[j]);
			if(tempBlockIndex !== -1)
			{
				tempBlockMoves.push(blockMoves[j])
			}
		}
		allLegalMovesWhite[i] = tempBlockMoves.map((x) => x);
		tempBlockMoves = [];
	}
}

function onlyAllowBlockBlack(blockMoves)
{
	let tempBlockIndex;
	let tempBlockMoves = [];
	let i;
	let j;

	for(i = 0; i < 16; i++)
	{
		if(i === 4)
		{
			continue;
		}
		for(j = 0; j < blockMoves.length; j++)
		{
			tempBlockIndex = allLegalMovesBlack[i].indexOf(blockMoves[j]);
			if(tempBlockIndex !== -1)
			{
				tempBlockMoves.push(blockMoves[j])
			}
		}
		allLegalMovesBlack[i] = tempBlockMoves.map((x) => x);
		tempBlockMoves = [];
	}
}

function handleCheckQueen(kingSquareId, pieceSquareId, kingIsWhite)
{
	let blockMoves = [];
	let tempSquareId;

	if(kingSquareId > pieceSquareId)
	{
		if(((kingSquareId - pieceSquareId) % 8) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 8;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else if(Math.floor(kingSquareId / numRanks) === Math.floor(pieceSquareId / numRanks))
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId++;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else if(((kingSquareId - pieceSquareId) % 7) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else if(((kingSquareId - pieceSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	else
	{
		if(((pieceSquareId - kingSquareId) % 8) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 8;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else if(Math.floor(kingSquareId / numRanks) === Math.floor(pieceSquareId / numRanks))
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId--;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else if(((pieceSquareId - kingSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else if(((pieceSquareId - kingSquareId) % 7) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
}

function handleCheckRook(kingSquareId, pieceSquareId, kingIsWhite)
{
	let blockMoves = [];
	let tempSquareId;

	if(kingSquareId > pieceSquareId)
	{
		if(((kingSquareId - pieceSquareId) % 8) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 8;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId++;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	else
	{
		if(((pieceSquareId - kingSquareId) % 8) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 8;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId--;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
}

function handleCheckBishop(kingSquareId, pieceSquareId, kingIsWhite)
{
	let blockMoves = [];
	let tempSquareId;

	console.log(allLegalMovesBlack);
	console.log(allLegalMovesWhite);

	if(kingSquareId > pieceSquareId)
	{
		if(((kingSquareId - pieceSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	else
	{
		if(((pieceSquareId - kingSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	console.log(blockMoves);
	console.log(allLegalMovesBlack);
	console.log(allLegalMovesWhite);
}

function handleCheckKnight(kingSquareId, pieceSquareId, kingIsWhite)
{
	let blockMoves = [];
	let tempSquareId;

	console.log(allLegalMovesBlack);
	console.log(allLegalMovesWhite);

	if(kingSquareId > pieceSquareId)
	{
		if(((kingSquareId - pieceSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	else
	{
		if(((pieceSquareId - kingSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	console.log(blockMoves);
	console.log(allLegalMovesBlack);
	console.log(allLegalMovesWhite);
}

function handleCheckPawn(kingSquareId, pieceSquareId, kingIsWhite)
{
	let blockMoves = [];
	let tempSquareId;

	console.log(allLegalMovesBlack);
	console.log(allLegalMovesWhite);

	if(kingSquareId > pieceSquareId)
	{
		if(((kingSquareId - pieceSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	else
	{
		if(((pieceSquareId - kingSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	console.log(blockMoves);
	console.log(allLegalMovesBlack);
	console.log(allLegalMovesWhite);
}

function handleCheck(kingSquareId)
{
	let checkingId1 = -1;
	let checkingId2 = -1;
	let kingMovesTemp;
	let pieceSquareId;
	let piece;
	let i;

	colorTurnIsInCheck = true;
	if(colorTurn === 'white')
	{
		for(i = 0; i < 16; i++)
		{
			if(allLegalMovesBlack[i].indexOf(kingSquareId) !== -1)
			{
				checkingId1 = i;
				break;
			}
		}
		for(i++; i < 16; i++)
		{
			if(allLegalMovesBlack[i].indexOf(kingSquareId) !== -1)
			{
				checkingId2 = i;
				break;
			}
		}

		piece = document.querySelector("[pieceId='" + checkingId1 + "']");
		pieceSquareId = Number(piece.parentNode.getAttribute("squareId"));
		if((checkingId2 !== -1) || (piece.id.includes("Knight")) || (piece.id.includes("Pawn")))
		{
			kingMovesTemp = allLegalMovesWhite[28 - 16].map((x) => x);
			allLegalMovesWhite = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
			allLegalMovesWhite[28 - 16] = kingMovesTemp.map((x) => x);
		}
		else if(piece.id.includes("Queen"))
		{
			handleCheckQueen(kingSquareId, pieceSquareId, true);
		}
		else if(piece.id.includes("Rook"))
		{
			handleCheckRook(kingSquareId, pieceSquareId, true);
		}
		else if(piece.id.includes("Bishop"))
		{
			handleCheckBishop(kingSquareId, pieceSquareId, true);
		}
	}
	else
	{
		for(i = 0; i < 16; i++)
		{
			if(allLegalMovesWhite[i].indexOf(kingSquareId) !== -1)
			{
				checkingId1 = i;
				break;
			}
		}
		for(i++; i < 16; i++)
		{
			if(allLegalMovesWhite[i].indexOf(kingSquareId) !== -1)
			{
				checkingId2 = i;
				break;
			}
		}

		piece = document.querySelector("[pieceId='" + (checkingId1 + 16) + "']");
		pieceSquareId = Number(piece.parentNode.getAttribute("squareId"));
		if(checkingId2 !== -1)
		{
			kingMovesTemp = allLegalMovesBlack[4].map((x) => x);
			allLegalMovesBlack = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
			allLegalMovesBlack[4] = kingMovesTemp.map((x) => x);
		}
		else if(piece.id.includes("Queen"))
		{
			handleCheckQueen(kingSquareId, pieceSquareId, false);
		}
		else if(piece.id.includes("Rook"))
		{
			handleCheckRook(kingSquareId, pieceSquareId, false);
		}
		else if(piece.id.includes("Bishop"))
		{
			handleCheckBishop(kingSquareId, pieceSquareId, false);
		}
		else if(piece.id.includes("Knight"))
		{
			handleCheckKnight(kingSquareId, pieceSquareId, false);
		}
		else if(piece.id.includes("Pawn"))
		{
			handleCheckPawn(kingSquareId, pieceSquareId, false);
		}
	}
}

function isUnderAttack(endId, isKingWhite)
{
	let pawnSquare1;
	let pawnSquare2;
	let moves;
	let endRank = Math.floor(endId / numRanks);
	let endFile = endId % numFiles;
	let endSquare = document.querySelector("[squareId='" + endId + "']");;

	if(isKingWhite)
	{
		if(endSquare.children[0] && endSquare.children[0].hasAttribute("isDefendedBlack"))
		{
			return true;
		}

		if((endFile === 7) && (endRank !== 0))
		{
			pawnSquare1 = document.querySelector("[squareId='" + (endId + moveUpLeft) + "']");
			if(pawnSquare1.children[0] && pawnSquare1.children[0].id.includes("blackPawn"))
			{
				return true;
			}
		}
		else if((endFile === 0) && (endRank !== 0))
		{
			pawnSquare2 = document.querySelector("[squareId='" + (endId + moveUpRight) + "']");
			if(pawnSquare2.children[0] && pawnSquare2.children[0].id.includes("blackPawn"))
			{
				return true;
			}
		}
		else if(endRank !== 0)
		{
			pawnSquare1 = document.querySelector("[squareId='" + (endId + moveUpLeft) + "']");
			pawnSquare2 = document.querySelector("[squareId='" + (endId + moveUpRight) + "']");
			if((pawnSquare1.children[0] && pawnSquare1.children[0].id.includes("blackPawn")) || (pawnSquare2.children[0] && pawnSquare2.children[0].id.includes("blackPawn")))
			{
				return true;
			}
		}

		for(let i = 0; i < 16; i++)
		{
			moves = allLegalMovesBlack[i];
			if(moves.includes(endId))
			{
				return true;
			}
		}
		return false;
	}
	else
	{
		if(endSquare.children[0] && endSquare.children[0].hasAttribute("isDefendedWhite"))
		{
			return true;
		}

		if((endFile === 7) && (endRank !== 7))
		{
			pawnSquare1 = document.querySelector("[squareId='" + (endId + moveDownLeft) + "']");
			if(pawnSquare1.children[0] && pawnSquare1.children[0].id.includes("whitePawn"))
			{
				return true;
			}
		}
		else if((endFile === 0) && (endRank !== 7))
		{
			pawnSquare2 = document.querySelector("[squareId='" + (endId + moveDownRight) + "']");
			if(pawnSquare2.children[0] && pawnSquare2.children[0].id.includes("whitePawn"))
			{
				return true;
			}
		}
		else if(endRank !== 7)
		{
			pawnSquare1 = document.querySelector("[squareId='" + (endId + moveDownLeft) + "']");
			pawnSquare2 = document.querySelector("[squareId='" + (endId + moveDownRight) + "']");
			if((pawnSquare1.children[0] && pawnSquare1.children[0].id.includes("whitePawn")) || (pawnSquare2.children[0] && pawnSquare2.children[0].id.includes("whitePawn")))
			{
				return true;
			}
		}

		for(let i = 0; i < 16; i++)
		{
			moves = allLegalMovesWhite[i];
			if(moves.includes(endId))
			{
				return true;
			}
		}
		return false;
	}
}

function findLegalMovesKing()
{
	let endId;
	let startRank = Math.floor(moveStartId / numRanks);
	let startFile = moveStartId % numFiles;
	let castleSquare2;
	let castleSquareId3;
	let castleSquare3;
	let leftRook;
	let rightRook;
	let isKingWhite;

	if(moveStartPiece.id.includes("white"))
	{
		isKingWhite = true;
	}	
	else
	{
		isKingWhite = false;
	}

	for(let i = 0; i < 3; i++)
	{
		if((startRank === 0) || ((startFile === 7) && (i === 2)))
		{
			break;
		}
		if((startFile === 0) && (i === 0))
		{
			continue;
		}
		endId = moveStartId + moveUpLeft + i;
		if((endId > 0) && (endId < 63) && !isUnderAttack(endId, isKingWhite))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
		
	}

	for(let i = 0; i < 3; i++)
	{
		endId = moveStartId + moveLeft + i;
		if((i === 0) && (startFile !== 0))
		{
			if((endId > 0) && (endId < 63) && !isUnderAttack(endId, isKingWhite))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				checkAndPushLegalMove(endSquare);

				endId = moveStartId + (moveLeft * 2);
				castleSquare2 = document.querySelector("[squareId='" + endId + "']");
				castleSquareId3 = moveStartId + (moveLeft * 3);
				castleSquare3 = document.querySelector("[squareId='" + castleSquareId3 + "']");
				if(moveStartPiece.id.includes("white"))
				{
					leftRook = document.querySelector("[pieceId='" + 24 + "']");
				}
				else
				{
					leftRook = document.querySelector("[pieceId='" + 0 + "']");
				}
				if((endId > 0) && (endId < 63) && !isUnderAttack(endId, isKingWhite) && !isUnderAttack(castleSquareId3, isKingWhite) && !endSquare.children[0] && !castleSquare2.children[0] && !castleSquare3.children[0] && (Number(moveStartPiece.getAttribute("hasMoved")) === 0) && (Number(leftRook.getAttribute("hasMoved")) === 0))
				{
					endSquare = document.querySelector("[squareId='" + endId + "']");
					checkAndPushLegalMove(endSquare);;
				}
			}
		}
		else if((i === 2) && (startFile !== 7))
		{
			if((endId > 0) && (endId < 63) && !isUnderAttack(endId, isKingWhite))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				checkAndPushLegalMove(endSquare);

				endId = moveStartId + (moveRight * 2);
				castleSquare2 = document.querySelector("[squareId='" + endId + "']");
				if(moveStartPiece.id.includes("white"))
				{
					rightRook = document.querySelector("[pieceId='" + 31 + "']");
				}
				else
				{
					rightRook = document.querySelector("[pieceId='" + 7 + "']");
				}
				if((endId > 0) && (endId < 63) && !isUnderAttack(endId, isKingWhite) && !endSquare.children[0] && !castleSquare2.children[0] && (Number(moveStartPiece.getAttribute("hasMoved")) === 0) && (Number(rightRook.getAttribute("hasMoved")) === 0))
				{
					endSquare = document.querySelector("[squareId='" + endId + "']");
					checkAndPushLegalMove(endSquare);;
				}
			}
		}
		/*else if((i === 1) && isUnderAttack(endId, isKingWhite))
		{
			handleCheck();
		}*/
	}

	for(let i = 0; i < 3; i++)
	{
		if((startRank === 7) || ((startFile === 7) && (i === 2)))
		{
			break;
		}
		if((startFile === 0) && (i === 0))
		{
			continue;
		}
		endId = moveStartId + moveDownLeft + i;
		if((endId > 0) && (endId < 63) && !isUnderAttack(endId, isKingWhite))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
	}
}

function findLegalMovesRook()
{
	let endId;
	let endSquare;
	let startRank = Math.floor(moveStartId / numRanks);
	let startFile = moveStartId % numFiles;
	let rank;
	let file;
	
	// Move up
	endId = moveStartId + moveUp;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	while((endId >= 0) && (endId <= 63))
	{
		if(startRank === 0)
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((rank === 0) || (rank === 7))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveUp;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
	}
	
	// Move down
	endId = moveStartId + moveDown;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	while((endId >= 0) && (endId <= 63))
	{
		if(startRank === 7)
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((rank === 0) || (rank === 7))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveDown;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
	}
	
	// Move left
	endId = moveStartId + moveLeft;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	file = (endId % numFiles);
	while((endId >= 0) && (endId <= 63))
	{
		if(startFile === 0)
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((file === 0) || (file === 7))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveLeft;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		file = (endId % numFiles);
	}
	
	// Move right
	endId = moveStartId + moveRight;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	file = (endId % numFiles);
	while((endId >= 0) && (endId <= 63))
	{
		if(startFile === 7)
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((file === 0) || (file === 7))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveRight;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		file = (endId % numFiles);
	}
}

function findLegalMovesBishop()
{
	let endId;
	let endSquare;
	let startRank = Math.floor(moveStartId / numRanks);
	let startFile = moveStartId % numFiles;
	let rank;
	let file;
	
	// Move up left
	endId = moveStartId + moveUpLeft;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	while((endId >= 0) && (endId <= 63))
	{
		if((startRank === 0) || (startFile === 0))
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((rank === 0) || (file === 0))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveUpLeft;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
	
	// Move up right
	endId = moveStartId + moveUpRight;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	while((endId >= 0) && (endId <= 63))
	{
		if((startRank === 0) || (startFile === 7))
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((rank === 0) || (file === 7))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveUpRight;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
	
	// Move down left
	endId = moveStartId + moveDownLeft;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	while((endId >= 0) && (endId <= 63))
	{
		if((startRank === 7) || (startFile === 0))
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((rank === 7) || (file === 0))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveDownLeft;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
	
	// Move down right
	endId = moveStartId + moveDownRight;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	while((endId >= 0) && (endId <= 63))
	{
		if((startRank === 7) || (startFile === 7))
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((rank === 7) || (file === 7))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveDownRight;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
}

function findLegalMovesKnight()
{
	let endId;
	let file = (moveStartId % numFiles);
	
	if(file >= 2)
	{
		endId = moveStartId + moveUpLeft + moveLeft;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
		
		endId = moveStartId + moveDownLeft + moveLeft;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
	}
	
	if(file <= 5)
	{
		endId = moveStartId + moveUpRight + moveRight;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
		
		endId = moveStartId + moveDownRight + moveRight;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
	}
	
	if(file !== 0)
	{
		endId = moveStartId + moveUpLeft + moveUp;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
		
		endId = moveStartId + moveDownLeft + moveDown;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
	}
	
	if(file !== 7)
	{
		endId = moveStartId + moveUpRight + moveUp;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}

		endId = moveStartId + moveDownRight + moveDown;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
	}
}

function findLegalMovesPawn()
{
	let endId;
	let endSquare;
	let enPassantDiv;
	let enPassantSquare;
	let startRank = Math.floor(moveStartId / numRanks);
	let startFile = moveStartId % numFiles;
	let rank = Math.floor(moveStartId / numRanks);
	
	if(moveStartPiece.id.includes("white"))
	{
		endId = moveStartId + moveUp;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		if(!endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			
			endId = moveStartId + (moveUp * 2);
			endSquare = document.querySelector("[squareId='" + endId + "']");
			if((rank === 6) && (!endSquare.children[0]))
			{
				checkAndPushLegalMove(endSquare);
			}
		}
		
		if(!(startFile === 0))
		{
			endId = moveStartId + moveUpLeft;
			endSquare = document.querySelector("[squareId='" + endId + "']");
			if(endSquare.children[0] || endSquare.hasAttribute("enPassantBlack"))
			{
				checkAndPushLegalMove(endSquare);
			}
		}
		
		if(!(startFile === 7))
		{
			endId = moveStartId + moveUpRight;
			endSquare = document.querySelector("[squareId='" + endId + "']");
			if(endSquare.children[0] || endSquare.hasAttribute("enPassantBlack"))
			{
				checkAndPushLegalMove(endSquare);
			}
		}
	}
	else
	{
		endId = moveStartId + moveDown;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		if(!endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			
			endId = moveStartId + (moveDown * 2);
			endSquare = document.querySelector("[squareId='" + endId + "']");
			if((rank === 1) && (!endSquare.children[0]))
			{
				checkAndPushLegalMove(endSquare);
			}
		}
		
		if(!(startFile === 0))
		{
			endId = moveStartId + moveDownLeft;
			endSquare = document.querySelector("[squareId='" + endId + "']");
			if(endSquare.children[0] || endSquare.hasAttribute("enPassantWhite"))
			{
				checkAndPushLegalMove(endSquare);
			}
		}
		
		if(!(startFile === 7))
		{
			endId = moveStartId + moveDownRight;
			endSquare = document.querySelector("[squareId='" + endId + "']");
			if(endSquare.children[0] || endSquare.hasAttribute("enPassantWhite"))
			{
				checkAndPushLegalMove(endSquare);
			}
		}
	}
}

function findLegalMoves()
{
	if(moveStartPiece.id.includes("King"))
	{
		findLegalMovesKing();
	}
	else if(moveStartPiece.id.includes("Queen"))
	{
		// Queen is the combination of a Rook and a Bishop
		findLegalMovesRook();
		findLegalMovesBishop();
	}
	else if(moveStartPiece.id.includes("Rook"))
	{
		findLegalMovesRook();
	}
	else if(moveStartPiece.id.includes("Bishop"))
	{
		findLegalMovesBishop();
	}
	else if(moveStartPiece.id.includes("Knight"))
	{
		findLegalMovesKnight();
	}
	else if(moveStartPiece.id.includes("Pawn"))
	{
		findLegalMovesPawn();
	}
	else
	{
		// Error
		return;
	}
}

function playIfValidMove()
{
	let rookMoveId;
	let rookMoveSquare;
	let rookPiece;

	// If dropped back on starting square return or there are no legal moves
	if((moveStartId === moveEndId) || (legalMoves === []))
	{
		clearEnPassantNew();
		return;
	}
	// If a piece is on the target square run as capture
	else if(moveEndSquare.children[0])
	{
		if(moveStartPiece.id.includes("white"))
		{
			if((colorTurn === "white") && legalMoves.includes(moveEndId))
			{
				if((moveStartPiece.id.includes("King") || moveStartPiece.id.includes("Rook")) && (Number(moveStartPiece.getAttribute("hasMoved")) === 0))
				{
					moveStartPiece.setAttribute("hasMoved", 1);
				}
				moveEndSquare.append(moveStartPiece);
				moveEndSquare.children[0].remove();
				boardMatrix[Math.floor(moveStartId / numRanks)][moveStartId % numFiles] = '';
				boardMatrix[Math.floor(moveEndId / numRanks)][moveEndId % numFiles] = moveStartPiece;
			}
			else
			{
				return;
			}
		}
		else
		{
			if((colorTurn === "black") && legalMoves.includes(moveEndId))
			{
				if((moveStartPiece.id.includes("King") || moveStartPiece.id.includes("Rook")) && (Number(moveStartPiece.getAttribute("hasMoved")) === 0))
				{
					moveStartPiece.setAttribute("hasMoved", 1);
				}
				moveEndSquare.append(moveStartPiece);
				moveEndSquare.children[0].remove();
				boardMatrix[Math.floor(moveStartId / numRanks)][moveStartId % numFiles] = '';
				boardMatrix[Math.floor(moveEndId / numRanks)][moveEndId % numFiles] = moveStartPiece;
			}
			else
			{
				return;
			}
		}
	}
	// If the target square is empty run as normal move
	else
	{
		if(moveStartPiece.id.includes("white"))
		{
			if((colorTurn === "white") && legalMoves.includes(moveEndId))
			{
				if((moveStartPiece.id.includes("King") || moveStartPiece.id.includes("Rook")) && (Number(moveStartPiece.getAttribute("hasMoved")) === 0))
				{
					moveStartPiece.setAttribute("hasMoved", 1);
				}
				if(moveStartPiece.id.includes("King"))
				{
					if((moveEndId - moveStartId) === 2)
					{
						rookPiece = document.querySelector("[pieceId='" + (15 + 16) + "']");
						rookMoveId = moveEndId - 1;
						rookMoveSquare = document.querySelector("[squareId='" + rookMoveId + "']");
						rookMoveSquare.append(rookPiece);
						boardMatrix[Math.floor(moveStartId / numRanks)][moveStartId % numFiles] = '';
						boardMatrix[Math.floor(moveEndId / numRanks)][moveEndId % numFiles] = moveStartPiece;
					}
					else if((moveStartId - moveEndId) === 2)
					{
						rookPiece = document.querySelector("[pieceId='" + (8 + 16) + "']");
						rookMoveId = moveEndId + 1;
						rookMoveSquare = document.querySelector("[squareId='" + rookMoveId + "']");
						rookMoveSquare.append(rookPiece);
						boardMatrix[Math.floor(moveStartId / numRanks)][moveStartId % numFiles] = '';
						boardMatrix[Math.floor(moveEndId / numRanks)][moveEndId % numFiles] = moveStartPiece;
					}
				}
				if(moveEndSquare.hasAttribute("enPassantBlack") && (moveStartPiece.id.includes("Pawn")))
				{
					let capturedId = Number(moveEndSquare.getAttribute("squareId")) + moveDown;
					let capturedSquare = document.querySelector("[squareId='" + capturedId + "']");
					moveEndSquare.append(moveStartPiece);
					capturedSquare.children[0].remove();
					boardMatrix[Math.floor(moveStartId / numRanks)][moveStartId % numFiles] = '';
					boardMatrix[Math.floor(moveEndId / numRanks)][moveEndId % numFiles] = moveStartPiece;
				}
				else
				{
					if(moveStartPiece.id.includes("Pawn") && ((moveDown * 2) === Math.abs(moveStartId - moveEndId)))
					{
						enPassantSquare = document.querySelector("[squareId='" + (moveEndId + moveDown) + "']");
						enPassantSquare.setAttribute("enPassantWhite", 0);
					}
					moveEndSquare.append(moveStartPiece);
					boardMatrix[Math.floor(moveStartId / numRanks)][moveStartId % numFiles] = '';
					boardMatrix[Math.floor(moveEndId / numRanks)][moveEndId % numFiles] = moveStartPiece;
				}
			}
			else
			{
				return;
			}
		}
		else
		{
			if((colorTurn === "black") && legalMoves.includes(moveEndId))
			{
				if((moveStartPiece.id.includes("King") || moveStartPiece.id.includes("Rook")) && (Number(moveStartPiece.getAttribute("hasMoved")) === 0))
				{
					moveStartPiece.setAttribute("hasMoved", 1);
				}
				if(moveStartPiece.id.includes("King"))
				{
					if((moveEndId - moveStartId) === 2)
					{
						rookPiece = document.querySelector("[pieceId='" + 7 + "']");
						rookMoveId = moveEndId - 1;
						rookMoveSquare = document.querySelector("[squareId='" + rookMoveId + "']");
						rookMoveSquare.append(rookPiece);
						boardMatrix[Math.floor(moveStartId / numRanks)][moveStartId % numFiles] = '';
						boardMatrix[Math.floor(moveEndId / numRanks)][moveEndId % numFiles] = moveStartPiece;
					}
					else if((moveStartId - moveEndId) === 2)
					{
						rookPiece = document.querySelector("[pieceId='" + 0 + "']");
						rookMoveId = moveEndId + 1;
						rookMoveSquare = document.querySelector("[squareId='" + rookMoveId + "']");
						rookMoveSquare.append(rookPiece);
						boardMatrix[Math.floor(moveStartId / numRanks)][moveStartId % numFiles] = '';
						boardMatrix[Math.floor(moveEndId / numRanks)][moveEndId % numFiles] = moveStartPiece;
					}
				}
				if(moveEndSquare.hasAttribute("enPassantWhite") && (moveStartPiece.id.includes("Pawn")))
				{
					let capturedId = Number(moveEndSquare.getAttribute("id")) + moveUp;
					let capturedSquare = document.querySelector("[squareId='" + capturedId + "']");
					moveEndSquare.append(moveStartPiece);
					capturedSquare.children[0].remove();
					boardMatrix[Math.floor(moveStartId / numRanks)][moveStartId % numFiles] = '';
					boardMatrix[Math.floor(moveEndId / numRanks)][moveEndId % numFiles] = moveStartPiece;
				}
				else
				{
					if(moveStartPiece.id.includes("Pawn") && ((moveDown * 2) === Math.abs(moveStartId - moveEndId)))
					{
						enPassantSquare = document.querySelector("[squareId='" + (moveEndId + moveUp) + "']");
						enPassantSquare.setAttribute("enPassantBlack", 0);
					}
					moveEndSquare.append(moveStartPiece);
					boardMatrix[Math.floor(moveStartId / numRanks)][moveStartId % numFiles] = '';
					boardMatrix[Math.floor(moveEndId / numRanks)][moveEndId % numFiles] = moveStartPiece;
				}
			}
			else
			{
				return;
			}
		}
	}
	
	changeColorTurn();
	progressEnPassant();
	clearDefended();

	let whiteKingSquareId = Number(document.querySelector("[pieceId='" + 28 + "']").parentNode.getAttribute("squareId"));
	let blackKingSquareId = Number(document.querySelector("[pieceId='" + 4 + "']").parentNode.getAttribute("squareId"));

	allLegalMovesWhite = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	allLegalMovesBlack = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	populateDefaultKingMoves(whiteKingSquareId, true);
	populateDefaultKingMoves(blackKingSquareId, false);
	populateAllLegalMovesWhite();
	populateAllLegalMovesBlack();
	populateAllLegalMovesKings();
	
	if(colorTurn === "white")
	{
		if(isUnderAttack(whiteKingSquareId, true))
		{
			handleCheck(whiteKingSquareId);
		}
	}
	else
	{
		if(isUnderAttack(blackKingSquareId, false))
		{
			handleCheck(blackKingSquareId);
		}
	}
}

function clearDefended()
{
	allDefendedWhite = document.querySelectorAll("[isDefendedWhite='']");
	allDefendedWhite.forEach((isDefendedWhite) =>
	{
		isDefendedWhite.removeAttribute("isDefendedWhite");
	});
	
	allDefendedBlack = document.querySelectorAll("[isDefendedBlack='']");
	allDefendedBlack.forEach((isDefendedBlack) =>
	{
		isDefendedBlack.removeAttribute("isDefendedBlack");
	});
}

function clearEnPassantNew()
{
	enPassantWhiteOlds = document.querySelectorAll("[enPassantWhite='0']");
	enPassantWhiteOlds.forEach((enPassantWhiteOld) =>
	{
		enPassantWhiteOld.removeAttribute("enPassantWhite");
	});
	
	enPassantBlackOlds = document.querySelectorAll("[enPassantBlack='0']");
	enPassantBlackOlds.forEach((enPassantBlackOld) =>
	{
		enPassantBlackOld.removeAttribute("enPassantBlack");
	});
}

function progressEnPassant()
{
	enPassantWhiteOlds = document.querySelectorAll("[enPassantWhite='1']");
	enPassantWhiteOlds.forEach((enPassantWhiteOld) =>
	{
		enPassantWhiteOld.removeAttribute("enPassantWhite");
	});
	
	enPassantBlackOlds = document.querySelectorAll("[enPassantBlack='1']");
	enPassantBlackOlds.forEach((enPassantBlackOld) =>
	{
		enPassantBlackOld.removeAttribute("enPassantBlack");
	});
	
	enPassantWhiteNews = document.querySelectorAll("[enPassantWhite='0']");
	enPassantWhiteNews.forEach((enPassantWhiteNew) =>
	{
		enPassantWhiteNew.setAttribute("enPassantWhite", 1);
	});
	
	enPassantBlackNews = document.querySelectorAll("[enPassantBlack='0']");
	enPassantBlackNews.forEach((enPassantBlackNew) =>
	{
		enPassantBlackNew.setAttribute("enPassantBlack", 1);
	});
}

function showLegalMoves()
{
	hideLegalMoves();
	legalMoves.forEach((moveOption) => 
	{
		square = document.querySelector("[squareId='" + moveOption + "']");
		if(square.children[0])
		{
			const svgDiv = document.createElement("div");
			svgDiv.className = "uiElement";
			svgDiv.id = "circlePiece";
			svgDiv.innerHTML = circlePiece;
			square.append(svgDiv);
			let svg = square.children[1].children[0];
			svg.setAttribute("viewBox", "0 0 300 300");
		}
		else
		{
			const svgDiv = document.createElement("div");
			svgDiv.className = "uiElement";
			svgDiv.id = "circleNoPiece";
			svgDiv.innerHTML = circleNoPiece;
			square.append(svgDiv);
			let svg = square.children[0].children[0];
			svg.setAttribute("viewBox", "8 8 496 496");
		}
	});
}

function hideLegalMoves()
{
	uiElements = document.querySelectorAll("div.uiElement");
	uiElements.forEach((uiElement) =>
	{
		uiElement.remove();
	});
}

function changeColorTurn()
{
	if(colorTurn === "white")
	{
		colorTurn = "black";
		//toBlackBoardPOV();
	}
	else
	{
		colorTurn = "white";
		//toWhiteBoardPOV();
	}
}

function toBlackBoardPOV()
{
	const squares = document.querySelectAll(".square");
	squares.forEach((square, i) =>
	{
		square.setAttribute("squareId", (numRanks * numFiles - 1) - i)
	});
}

function toWhiteBoardPOV()
{
	const squares = document.querySelectAll(".square");
	squares.forEach((square, i) =>
	{
		square.setAttribute("squareId", i)
	});
}

function dragStart(e)
{
	moveStartId = Number(e.target.parentNode.getAttribute("squareId"));
	moveStartPiece = e.target;
	
	let pieceId = Number(e.target.getAttribute("pieceId"));
	if(pieceId >= 16)
	{
		legalMoves = allLegalMovesWhite[pieceId - 16];
	}
	else
	{
		legalMoves = allLegalMovesBlack[pieceId];
	}
	if(((colorTurn === "white") && (moveStartPiece.id.includes("white"))) || ((colorTurn === "black") && (moveStartPiece.id.includes("black"))))
	{
		showLegalMoves();
	}
}

function dragOver(e)
{
	e.preventDefault();
	/*e = e || window.event;
	let dragX = e.pageX + 20;
	let dragY = e.pageY + 20;
	console.log("X: "+dragX+" Y: "+dragY);*/
}

function dragDrop(e)
{
	e.stopPropagation();
	if(e.target.children[0])
	{
		moveEndId = Number(e.target.parentNode.getAttribute("squareId"));
		moveEndSquare = e.target.parentNode;
	}
	else
	{
		moveEndId = Number(e.target.getAttribute("squareId"));
		moveEndSquare = e.target;
	}
	hideLegalMoves();
	playIfValidMove();
}

createBoard();

let squares = document.querySelectorAll("#chessBoard .square")
squares.forEach(square =>
{
	square.addEventListener("dragstart", dragStart);
	square.addEventListener("dragover", dragOver);
	square.addEventListener("drop", dragDrop);
});
