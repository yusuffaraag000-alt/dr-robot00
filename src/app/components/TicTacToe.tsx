import { motion } from 'motion/react';
import { Bot, User, RotateCcw, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';

type Player = 'X' | 'O' | null;
type Board = Player[];

export default function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);
  const [winningLine, setWinningLine] = useState<number[]>([]);
  const [score, setScore] = useState({ player: 0, ai: 0, draws: 0 });
  const [difficulty, setDifficulty] = useState<'easy' | 'hard'>('hard');

  // Check for winner
  const calculateWinner = (squares: Board): { winner: Player; line: number[] } | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  // Minimax algorithm for unbeatable AI
  const minimax = (board: Board, depth: number, isMaximizing: boolean): number => {
    const result = calculateWinner(board);
    
    if (result?.winner === 'O') return 10 - depth;
    if (result?.winner === 'X') return depth - 10;
    if (!board.includes(null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = 'O';
          const score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = 'X';
          const score = minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  // AI move
  const makeAIMove = (currentBoard: Board) => {
    if (difficulty === 'easy') {
      // Easy mode: random move
      const availableMoves = currentBoard
        .map((val, idx) => (val === null ? idx : null))
        .filter((val) => val !== null) as number[];
      
      if (availableMoves.length > 0) {
        const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        return randomMove;
      }
    } else {
      // Hard mode: minimax algorithm
      let bestScore = -Infinity;
      let bestMove = -1;

      for (let i = 0; i < 9; i++) {
        if (currentBoard[i] === null) {
          currentBoard[i] = 'O';
          const score = minimax(currentBoard, 0, false);
          currentBoard[i] = null;

          if (score > bestScore) {
            bestScore = score;
            bestMove = i;
          }
        }
      }
      return bestMove;
    }
    return -1;
  };

  // Handle click
  const handleClick = (index: number) => {
    if (board[index] || winner || !isXNext) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);

    // Check if player won
    const result = calculateWinner(newBoard);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
      setScore(prev => ({ ...prev, player: prev.player + 1 }));
      return;
    }

    // Check for draw
    if (!newBoard.includes(null)) {
      setWinner('Draw');
      setScore(prev => ({ ...prev, draws: prev.draws + 1 }));
      return;
    }

    // AI turn
    setTimeout(() => {
      const aiMove = makeAIMove([...newBoard]);
      if (aiMove !== -1) {
        newBoard[aiMove] = 'O';
        setBoard(newBoard);
        setIsXNext(true);

        // Check if AI won
        const aiResult = calculateWinner(newBoard);
        if (aiResult) {
          setWinner(aiResult.winner);
          setWinningLine(aiResult.line);
          setScore(prev => ({ ...prev, ai: prev.ai + 1 }));
          return;
        }

        // Check for draw
        if (!newBoard.includes(null)) {
          setWinner('Draw');
          setScore(prev => ({ ...prev, draws: prev.draws + 1 }));
        }
      }
    }, 500);
  };

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-500/30 rounded-3xl p-8 backdrop-blur-sm"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h3 
            className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent"
            animate={{
              textShadow: [
                '0 0 20px rgba(251, 191, 36, 0.3)',
                '0 0 40px rgba(251, 191, 36, 0.6)',
                '0 0 20px rgba(251, 191, 36, 0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Challenge Dr. Robot
          </motion.h3>
          <p className="text-gray-400">Can you beat the AI?</p>
        </div>

        {/* Difficulty Toggle */}
        <div className="flex justify-center gap-4 mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { setDifficulty('easy'); resetGame(); }}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              difficulty === 'easy'
                ? 'bg-amber-500 text-black'
                : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
            }`}
          >
            Easy
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { setDifficulty('hard'); resetGame(); }}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              difficulty === 'hard'
                ? 'bg-amber-500 text-black'
                : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
            }`}
          >
            Hard (Unbeatable)
          </motion.button>
        </div>

        {/* Score Board */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-blue-500/20 border border-blue-500/50 rounded-xl p-4 text-center"
          >
            <User className="w-6 h-6 mx-auto mb-2 text-blue-400" />
            <div className="text-2xl font-bold text-blue-400">{score.player}</div>
            <div className="text-xs text-gray-400">You</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-500/20 border border-gray-500/50 rounded-xl p-4 text-center"
          >
            <Trophy className="w-6 h-6 mx-auto mb-2 text-gray-400" />
            <div className="text-2xl font-bold text-gray-400">{score.draws}</div>
            <div className="text-xs text-gray-400">Draws</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-amber-500/20 border border-amber-500/50 rounded-xl p-4 text-center"
          >
            <Bot className="w-6 h-6 mx-auto mb-2 text-amber-400" />
            <div className="text-2xl font-bold text-amber-400">{score.ai}</div>
            <div className="text-xs text-gray-400">Dr. Robot</div>
          </motion.div>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-3 gap-4 mb-8 aspect-square" style={{ perspective: '1000px' }}>
          {board.map((cell, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={!cell && !winner ? { 
                scale: 1.1,
                rotateY: 10,
                z: 20,
                boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
              } : {}}
              whileTap={!cell && !winner ? { scale: 0.95 } : {}}
              onClick={() => handleClick(index)}
              disabled={!isXNext || !!cell || !!winner}
              className={`
                aspect-square rounded-2xl font-bold text-5xl transition-all
                ${winningLine.includes(index) 
                  ? 'bg-gradient-to-br from-amber-500 to-yellow-600 border-2 border-amber-400' 
                  : 'bg-zinc-800/50 border-2 border-amber-500/30 hover:border-amber-500/60'
                }
                ${!cell && !winner && isXNext ? 'cursor-pointer' : 'cursor-not-allowed'}
              `}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {cell === 'X' && (
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="text-blue-400"
                  style={{
                    textShadow: '0 0 20px rgba(59, 130, 246, 0.8)'
                  }}
                >
                  ✕
                </motion.span>
              )}
              {cell === 'O' && (
                <motion.span
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="text-amber-400"
                  style={{
                    textShadow: '0 0 20px rgba(251, 191, 36, 0.8)'
                  }}
                >
                  ○
                </motion.span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Status */}
        <div className="text-center mb-6">
          {winner ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {winner === 'Draw' ? (
                <div className="text-2xl font-bold text-gray-400">It's a Draw! 🤝</div>
              ) : winner === 'X' ? (
                <div className="text-2xl font-bold text-blue-400">You Win! 🎉</div>
              ) : (
                <div className="text-2xl font-bold text-amber-400">Dr. Robot Wins! 🤖</div>
              )}
            </motion.div>
          ) : (
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xl font-semibold"
            >
              {isXNext ? (
                <span className="text-blue-400">Your Turn (✕)</span>
              ) : (
                <span className="text-amber-400">Dr. Robot's Turn (○)</span>
              )}
            </motion.div>
          )}
        </div>

        {/* Reset Button */}
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={resetGame}
          className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:from-amber-600 hover:to-yellow-700 transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          New Game
        </motion.button>
      </motion.div>
    </div>
  );
}
