import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function Header() {
  return (
    <div className="header">
      <h1>🏌️ 골프 OECD 스코어보드</h1>
      <p>간편하게 벌금을 기록하고 정산하세요.</p>
    </div>
  );
}

function PlayerSetup({ players, setPlayers, resetAll, resetScores }) {
  const addPlayer = () => {
    if (players.length >= 5) {
      alert('최대 5명까지만 추가할 수 있습니다.');
      return;
    }
    setPlayers([...players, '']);
  };

  const removePlayer = (index) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  };

  const handlePlayerNameChange = (index, name) => {
    const newPlayers = [...players];
    newPlayers[index] = name;
    setPlayers(newPlayers);
  };

  return (
    <div className="section">
      <div className="section-title">👥 플레이어 설정 (최대 5명)</div>
      <div id="playerInputs">
        {players.map((player, index) => (
          <div className="player-input" key={index}>
            <input
              type="text"
              placeholder={`플레이어 ${index + 1} 이름`}
              maxLength="10"
              value={player}
              onChange={(e) => handlePlayerNameChange(index, e.target.value)}
            />
            {index > 0 && (
              <button className="remove-player-btn" onClick={() => removePlayer(index)}>×</button>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button className="btn" onClick={addPlayer}>+ 플레이어 추가</button>
        <button className="btn btn-secondary" onClick={resetAll}>🔄 전체 초기화</button>
        <button className="btn btn-danger" onClick={resetScores}>스코어 기록 초기화</button>
      </div>
    </div>
  );
}

function RuleSettings({ rules, setRules, customRules, setCustomRules }) {
  const handleRuleChange = (ruleName, amount) => {
    setRules({ ...rules, [ruleName]: { ...rules[ruleName], amount: parseInt(amount) || 0 } });
  };

  const addCustomRule = () => {
    const name = document.getElementById('customRuleName').value.trim();
    const amount = parseInt(document.getElementById('customRuleAmount').value) || 0;

    if (!name) {
      alert('룰 이름을 입력해주세요.');
      return;
    }
    if (Object.values(rules).some(rule => rule.name.toLowerCase() === name.toLowerCase()) || customRules[name]) {
      alert('이미 존재하는 룰 이름입니다.');
      return;
    }

    setCustomRules({ ...customRules, [name]: { amount: amount } });
    document.getElementById('customRuleName').value = '';
    document.getElementById('customRuleAmount').value = '';
  };

  const removeCustomRule = (name) => {
    const newCustomRules = { ...customRules };
    delete newCustomRules[name];
    setCustomRules(newCustomRules);
  };

  return (
    <div className="section">
      <div className="section-title">룰 별 벌금 설정</div>
      <div className="rules-section">
        {Object.entries(rules).map(([key, rule]) => (
          <div className="rule-item" key={key}>
            <label>{rule.name}</label>
            <input
              type="number"
              value={rule.amount}
              min="0"
              step="100"
              onChange={(e) => handleRuleChange(key, e.target.value)}
            />
            <span>원</span>
          </div>
        ))}
      </div>

      <div className="custom-rule-section">
        <div className="section-title" style={{ fontSize: '18px', marginBottom: '15px' }}>🎯 커스텀 룰 추가/제거</div>
        <div className="custom-rule-input">
          <input type="text" id="customRuleName" placeholder="룰 이름 (예: 원펏, 양파)" maxLength="15" />
          <input type="number" id="customRuleAmount" placeholder="금액 (보상은 음수)" step="100" />
          <button className="add-custom-rule-btn" onClick={addCustomRule}>+ 추가</button>
        </div>
        <div className="custom-rules-list">
          {Object.entries(customRules).map(([name, rule]) => (
            <div className="custom-rule-item" key={name}>
              <div className="custom-rule-info">
                <span className="custom-rule-name">{name}</span>
                <span className="custom-rule-amount" style={{ color: rule.amount >= 0 ? 'var(--danger-color)' : 'var(--success-color)' }}>
                  {`${rule.amount >= 0 ? '+' : ''}${rule.amount.toLocaleString()}원`}
                </span>
              </div>
              <button className="remove-custom-rule-btn" onClick={() => removeCustomRule(name)}>×</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Scoreboard({ players, rules, customRules, scores, setScores }) {
  const [activeRuleMenu, setActiveRuleMenu] = useState(null);

  const addRuleToPlayer = (holeNumber, playerIndex, ruleKey, ruleData) => {
    const newScores = { ...scores };
    if (!newScores[holeNumber]) {
      newScores[holeNumber] = {};
    }
    if (!newScores[holeNumber][playerIndex]) {
      newScores[holeNumber][playerIndex] = [];
    }
    newScores[holeNumber][playerIndex].push(ruleKey);
    setScores(newScores);
  };

  const removeRuleFromPlayer = (holeNumber, playerIndex, ruleIndex) => {
    const newScores = { ...scores };
    newScores[holeNumber][playerIndex].splice(ruleIndex, 1);
    setScores(newScores);
  };

  const resetHole = (holeNumber) => {
    if (!window.confirm(`${holeNumber}번 홀의 모든 기록을 초기화하시겠습니까?`)) return;
    const newScores = { ...scores };
    delete newScores[holeNumber];
    setScores(newScores);
  };

  const allRules = { ...rules, ...Object.fromEntries(Object.entries(customRules).map(([name, rule]) => [name, {...rule, name}])) };

  return (
    <div className="section">
      <div className="section-title">⛳ 홀별 스코어 기록</div>
      <div className="holes-grid">
        {[...Array(18)].map((_, i) => {
          const holeNumber = i + 1;
          return (
            <div className="hole-card" key={holeNumber}>
              <div className="hole-header">
                <span className="hole-number">{holeNumber}번 홀</span>
                <button className="hole-reset-btn" onClick={() => resetHole(holeNumber)}>초기화</button>
              </div>
              <div className="hole-scores">
                {players.map((player, playerIndex) => (
                  <div className="player-score" key={playerIndex}>
                    <div className="player-name-bar">
                      <span className="player-name">{player}</span>
                      <button className="add-rule-btn" onClick={(e) => {
                        const rect = e.target.getBoundingClientRect();
                        setActiveRuleMenu({ holeNumber, playerIndex, top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
                      }}>+ 룰 추가</button>
                    </div>
                    <div className="oecd-rules-container">
                      {(scores[holeNumber]?.[playerIndex] || []).map((ruleKey, ruleIndex) => (
                        <span
                          key={ruleIndex}
                          className="oecd-rule"
                          style={{ backgroundColor: allRules[ruleKey]?.color || (allRules[ruleKey]?.amount >= 0 ? '#6c757d' : '#2980b9') }}
                          onClick={() => removeRuleFromPlayer(holeNumber, playerIndex, ruleIndex)}
                        >
                          {allRules[ruleKey]?.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {activeRuleMenu && (
        <div className="rule-menu-overlay" onClick={() => setActiveRuleMenu(null)}>
            <div className="rule-menu is-modal">
                {Object.entries(allRules).map(([key, rule]) => (
                    <div
                        key={key}
                        className="rule-menu-item"
                        onClick={() => {
                            addRuleToPlayer(activeRuleMenu.holeNumber, activeRuleMenu.playerIndex, key, rule);
                            setActiveRuleMenu(null);
                        }}
                    >
                        {`${rule.name} (${rule.amount.toLocaleString()}원)`}
                    </div>
                ))}
            </div>
        </div>
      )}
    </div>
  );
}

function Total({ players, rules, customRules, scores }) {
  const totalScores = players.map(player => {
    let total = 0;
    for (const hole in scores) {
      for (const pIndex in scores[hole]) {
        if (players[pIndex] === player) {
          scores[hole][pIndex].forEach(ruleKey => {
            const allRules = { ...rules, ...Object.fromEntries(Object.entries(customRules).map(([name, rule]) => [name, {...rule, name}])) };
            if (allRules[ruleKey]) {
              total += allRules[ruleKey].amount;
            }
          });
        }
      }
    }
    return { player, total };
  });

  return (
    <div className="total-section">
      <div className="total-title">🏆 최종 정산</div>
      <div className="total-scores">
        {totalScores.map(({ player, total }, index) => (
          <div className="total-score-item" key={index}>
            <div className="total-score-name">{player}</div>
            <div
              className="total-score-value"
              style={{ color: total >= 0 ? 'var(--danger-color)' : 'var(--success-color)' }}
            >
              {`${total >= 0 ? '+' : ''}${total.toLocaleString()}원`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [players, setPlayers] = useState(['']);
  const [rules, setRules] = useState({
    ob: { name: '오비 (OB)', amount: 2000, color: '#e74c3c' },
    hazard: { name: '해저드 (Hazard)', amount: 1000, color: '#f39c12' },
    mulligan: { name: '멀리건 (Mulligan)', amount: 2000, color: '#e74e22' },
    bunker: { name: '벙커 (Bunker)', amount: 1000, color: '#f1c40f' },
    threePutt: { name: '쓰리퍼트 (3-Putt)', amount: 1000, color: '#9b59b6' },
    tripleBogey: { name: '트리플보기 (Triple)', amount: 2000, color: '#e67e22' }
  });
  const [customRules, setCustomRules] = useState({});
  const [scores, setScores] = useState({});
  const totalSectionRef = useRef(null);
  const lastScrollPosition = useRef(0);
  const [isAtTotal, setIsAtTotal] = useState(false);

  const isInitialMount = useRef(true);

  useEffect(() => {
    const savedState = localStorage.getItem('golfOECDGame');
    if (savedState) {
      const state = JSON.parse(savedState);
      setPlayers(state.players || ['']);
      setRules(state.rules || {
        ob: { name: '오비 (OB)', amount: 2000, color: '#e74c3c' },
        hazard: { name: '해저드 (Hazard)', amount: 1000, color: '#f39c12' },
        mulligan: { name: '멀리건 (Mulligan)', amount: 2000, color: '#e74e22' },
        bunker: { name: '벙커 (Bunker)', amount: 1000, color: '#f1c40f' },
        threePutt: { name: '쓰리퍼트 (3-Putt)', amount: 1000, color: '#9b59b6' },
        tripleBogey: { name: '트리플보기 (Triple)', amount: 2000, color: '#e67e22' }
      });
      setCustomRules(state.customRules || {});
      setScores(state.scores || {});
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const state = { players, rules, customRules, scores };
      localStorage.setItem('golfOECDGame', JSON.stringify(state));
    }
  }, [players, rules, customRules, scores]);

  const resetAll = () => {
    if (!window.confirm('모든 데이터를 초기화하시겠습니까?')) return;
    setPlayers(['']);
    setRules({
        ob: { name: '오비 (OB)', amount: 2000, color: '#e74c3c' },
        hazard: { name: '해저드 (Hazard)', amount: 1000, color: '#f39c12' },
        mulligan: { name: '멀리건 (Mulligan)', amount: 2000, color: '#e74e22' },
        bunker: { name: '벙커 (Bunker)', amount: 1000, color: '#f1c40f' },
        threePutt: { name: '쓰리퍼트 (3-Putt)', amount: 1000, color: '#9b59b6' },
        tripleBogey: { name: '트리플보기 (Triple)', amount: 2000, color: '#e67e22' }
    });
    setCustomRules({});
    setScores({});
  };

  const resetScores = () => {
    if (!window.confirm('모든 홀의 스코어 기록을 초기화하시겠습니까?')) return;
    setScores({});
  };

  const handleScroll = () => {
    if (isAtTotal) {
        window.scrollTo({ top: lastScrollPosition.current, behavior: 'smooth' });
        setIsAtTotal(false);
    } else {
        lastScrollPosition.current = window.scrollY;
        totalSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        setIsAtTotal(true);
    }
  };

  return (
    <div className="container">
      <Header />
      <PlayerSetup players={players} setPlayers={setPlayers} resetAll={resetAll} resetScores={resetScores} />
      <RuleSettings
        rules={rules}
        setRules={setRules}
        customRules={customRules}
        setCustomRules={setCustomRules}
      />
      <Scoreboard
        players={players}
        rules={rules}
        customRules={customRules}
        scores={scores}
        setScores={setScores}
      />
      <div ref={totalSectionRef}>
        <Total players={players} rules={rules} customRules={customRules} scores={scores} />
      </div>
      <button onClick={handleScroll} className="floating-btn">{isAtTotal ? '⬆️' : '🏆'}</button>
    </div>
  );
}

export default App;
