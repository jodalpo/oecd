import React from 'react';

function PlayerSetup({ players, handlePlayerNameChange, addPlayer, removePlayer, resetAll, resetScoresFn }) {
  return (
    <div className="p-6 border-b border-light-gray">
      <h2 className="text-2xl font-bold mb-5 flex items-center">
        <span className="w-1 h-5 bg-primary rounded-sm mr-2.5"></span>
        👥 플레이어 설정 (최대 5명)
      </h2>
      <div id="playerInputs" className="space-y-2">
        {players.map((player, index) => (
          <div className="flex gap-2 items-center" key={index}>
            <input
              type="text"
              placeholder={`플레이어 ${index + 1} 이름`}
              maxLength="10"
              className="flex-1 p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-primary transition-colors"
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
      <div className="flex gap-2 mt-4 flex-wrap">
        <button 
          className="bg-primary text-white border-none py-3 px-5 rounded-lg cursor-pointer text-base font-medium transition-all hover:bg-blue-600 hover:-translate-y-0.5"
          onClick={addPlayer}
        >
          + 플레이어 추가
        </button>
        <button 
          className="bg-dark-gray text-white border-none py-3 px-5 rounded-lg cursor-pointer text-base font-medium transition-all hover:bg-gray-600 hover:-translate-y-0.5"
          onClick={resetAll}
        >
          🔄 전체 초기화
        </button>
        <button 
          className="bg-danger text-white border-none py-3 px-5 rounded-lg cursor-pointer text-base font-medium transition-all hover:bg-red-600 hover:-translate-y-0.5"
          onClick={resetScoresFn}
        >
          스코어 기록 초기화
        </button>
      </div>
    </div>
  );
}

export default PlayerSetup;