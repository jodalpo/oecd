import React from 'react';

function PlayerSetup({ players, handlePlayerNameChange, addPlayer, removePlayer, resetAll, resetScoresFn }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-5 text-primary flex items-center">
        <span role="img" aria-label="player-icon" className="mr-2">👥</span>
        플레이어 설정 (최대 5명)
      </h2>
      <div id="playerInputs" className="space-y-4">
        {players.map((player, index) => (
          <div className="flex gap-2 items-center" key={index}>
            <input
              type="text"
              placeholder={`플레이어 ${index + 1} 이름`}
              maxLength="10"
              className="flex-1 p-2 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-primary transition-colors"
              value={player}
              onChange={(e) => handlePlayerNameChange(index, e.target.value)}
            />
            {index > 0 && 
              <button 
                className="bg-transparent border-none text-danger text-2xl cursor-pointer p-1 opacity-70 hover:opacity-100 transition-opacity" 
                onClick={() => removePlayer(index)}
              >
                ×
              </button>
            }
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-6 flex-wrap">
        <button 
          className="bg-primary text-white border-none py-2 px-4 rounded-md cursor-pointer text-base font-medium transition-all hover:bg-primary-dark"
          onClick={addPlayer}
        >
          + 플레이어 추가
        </button>
        <button 
          className="bg-light-gray text-dark-gray border border-gray-300 py-2 px-4 rounded-md cursor-pointer text-base font-medium transition-all hover:bg-gray-200 flex items-center justify-center"
          onClick={resetAll}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-cw w-4 h-4 mr-2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
          전체 초기화
        </button>
        <button 
          className="bg-danger text-white border-none py-2 px-4 rounded-md cursor-pointer text-base font-medium transition-all hover:opacity-90"
          onClick={resetScoresFn}
        >
          스코어 기록 초기화
        </button>
      </div>
    </div>
  );
}

export default PlayerSetup;