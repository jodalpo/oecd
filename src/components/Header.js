import React from 'react';

function Header() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-8 rounded-lg shadow-md transition-all duration-300 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -mr-8 -mt-8 pointer-events-none transform scale-150" />
      <div className="relative z-10">
        <h1 className="text-3xl font-extrabold mb-2 tracking-tight flex items-center gap-2">
          <span>🏌️‍♂️</span> 골프 OECD 스코어보드
        </h1>
        <p className="text-sm opacity-90 font-medium">
          벌칙 룰을 관리하고 최종 스코어를 실시간으로 정산해 보세요.
        </p>
      </div>
    </div>
  );
}

export default Header;