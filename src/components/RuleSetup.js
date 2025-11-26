import React from 'react';

function RuleSetup({
  rules,
  handleRuleAmountChange,
  customRules,
  customRuleName,
  setCustomRuleName,
  customRuleAmount,
  setCustomRuleAmount,
  addCustomRule,
  removeCustomRule,
}) {
  return (
    <div className="p-6 border-b border-light-gray">
      <h2 className="text-2xl font-bold mb-5 flex items-center">
        <span className="w-1 h-5 bg-primary rounded-sm mr-2.5"></span>
        룰 별 벌금 설정
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(rules).map(([key, rule]) => (
          <div className="flex items-center gap-2 bg-light-gray p-3 rounded-lg" key={key}>
            <label className="flex-1 text-base font-medium">{rule.name}</label>
            <input
              type="number"
              value={rule.amount}
              min="0"
              step="100"
              className="w-24 p-2 border border-gray-300 rounded-md text-center text-sm"
              onChange={(e) => handleRuleAmountChange(key, e.target.value)}
            />
            <span>원</span>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-5 mt-6 border border-light-gray">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <span className="w-1 h-5 bg-primary rounded-sm mr-2.5"></span>
          🎯 커스텀 룰 추가/제거
        </h3>
        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <input
            type="text"
            placeholder="룰 이름 (예: 원펏, 양파)"
            maxLength="15"
            className="flex-1 p-3 border border-gray-300 rounded-lg text-sm"
            value={customRuleName}
            onChange={(e) => setCustomRuleName(e.target.value)}
          />
          <input
            type="number"
            placeholder="금액 (보상은 음수)"
            step="100"
            className="w-32 p-3 border border-gray-300 rounded-lg text-center text-sm"
            value={customRuleAmount}
            onChange={(e) => setCustomRuleAmount(e.target.value)}
          />
          <button 
            className="bg-success text-white border-none py-3 px-4 rounded-lg cursor-pointer text-sm font-medium transition-colors hover:bg-green-600"
            onClick={addCustomRule}
          >
            + 추가
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {Object.entries(customRules).map(([name, rule]) => (
               <div className="flex items-center py-2 px-3 bg-white rounded-full border border-light-gray text-sm" key={name}>
                  <div className="flex items-center gap-2">
                      <span className="font-medium">{name}</span>
                      <span className={`text-xs ${rule.amount >= 0 ? 'text-danger' : 'text-success'}`}>
                          {`${rule.amount >= 0 ? '+' : ''}${rule.amount.toLocaleString()}원`}
                      </span>
                  </div>
                  <button 
                    className="bg-transparent border-none text-danger text-lg ml-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" 
                    onClick={() => removeCustomRule(name)}
                  >
                    ×
                  </button>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RuleSetup;