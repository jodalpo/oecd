import React from 'react';

function Totals({ totalScores, totalSectionRef }) {
  return (
    <div className="bg-secondary text-white p-8" ref={totalSectionRef}>
      <h2 className="text-2xl font-bold mb-5 text-center">🏆 최종 정산</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Object.entries(totalScores).map(([player, total]) => (
              <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center" key={player}>
                  <div className="text-sm opacity-80 mb-2">{player}</div>
                  <div className={`text-2xl font-bold ${total >= 0 ? 'text-danger' : 'text-success'}`}>
                      {`${total >= 0 ? '+' : ''}${total.toLocaleString()}원`}
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
}

export default Totals;