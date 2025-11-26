import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import PlayerSetup from './components/PlayerSetup';
import RuleSetup from './components/RuleSetup';
import Scorecard from './components/Scorecard';
import Totals from './components/Totals';

function App() {
  const [players, setPlayers] = useState(['']);
  const [rules, setRules] = useState({
    ob: { name: '오비', amount: 1000, color: 'danger' },
    hazard: { name: '해저드', amount: 1000, color: 'warning' },
    mulligan: { name: '멀리건', amount: 1000, color: 'orange-600' }, // Using a direct Tailwind color here
    bunker: { name: '벙커', amount: 1000, color: 'warning' },
    threePutt: { name: '쓰리퍼트', amount: 1000, color: 'purple-500' }, // Using a direct Tailwind color here
    tripleBogey: { name: '트리플보기', amount: 1000, color: 'orange-500' } // Using a direct Tailwind color here
  });
  const [customRules, setCustomRules] = useState({});
  const [scores, setScores] = useState({});
  const [totalScores, setTotalScores] = useState({});

  const [customRuleName, setCustomRuleName] = useState('');
  const [customRuleAmount, setCustomRuleAmount] = useState('');

  const [isAtTotal, setIsAtTotal] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const totalSectionRef = useRef(null); // Create a ref for the total section

  // This useEffect will run once on mount to load data from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('golfOECDGame');
    if (savedState) {
      const state = JSON.parse(savedState);
      if (state.players) setPlayers(state.players);
      if (state.ruleValues) {
        const newRules = { ...rules };
        for (const key in state.ruleValues) {
          if (newRules[key]) {
            newRules[key].amount = parseInt(state.ruleValues[key], 10);
          }
        }
        setRules(newRules);
      }
      if (state.customRules) setCustomRules(state.customRules);
      if (state.scores) setScores(state.scores);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this effect runs only once

  // This useEffect will run whenever players, rules, customRules or scores change to save to localStorage and update totals
  useEffect(() => {
    const playerTotals = players.reduce((acc, player) => {
      if (player) acc[player] = 0;
      return acc;
    }, {});

    const allRules = { ...rules, ...Object.fromEntries(Object.entries(customRules).map(([name, rule]) => [name, {...rule, name}])) };

    for (const hole in scores) {
        for (const playerIndex in scores[hole]) {
            const player = players[playerIndex];
            if (player) {
                scores[hole][playerIndex].forEach(ruleKey => {
                    const rule = allRules[ruleKey];
                    if (rule) {
                        playerTotals[player] += rule.amount;
                    }
                });
            }
        }
    }
    setTotalScores(playerTotals);
    
    const stateToSave = {
        players,
        ruleValues: Object.fromEntries(Object.entries(rules).map(([key, rule]) => [key, rule.amount])),
        customRules,
        scores
    };
    localStorage.setItem('golfOECDGame', JSON.stringify(stateToSave));

  }, [players, rules, customRules, scores]);


  const handlePlayerNameChange = (index, newName) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = newName;
    setPlayers(updatedPlayers);
  };

  const addPlayer = () => {
    if (players.length < 5) {
      setPlayers([...players, '']);
    } else {
      alert('최대 5명까지만 추가할 수 있습니다.');
    }
  };

  const removePlayer = (index) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    setPlayers(updatedPlayers);
  };

  const handleRuleAmountChange = (ruleKey, newAmount) => {
    const updatedRules = { ...rules };
    updatedRules[ruleKey].amount = parseInt(newAmount, 10) || 0;
    setRules(updatedRules);
  };

  const addCustomRule = () => {
    if (!customRuleName) {
        alert('룰 이름을 입력해주세요.');
        return;
    }
    if (customRules[customRuleName] || Object.values(rules).some(r => r.name === customRuleName)) {
        alert('이미 존재하는 룰 이름입니다.');
        return;
    }
    const newCustomRules = { ...customRules };
    newCustomRules[customRuleName] = { amount: parseInt(customRuleAmount, 10) || 0 };
    setCustomRules(newCustomRules);
    setCustomRuleName('');
    setCustomRuleAmount('');
  };

  const removeCustomRule = (ruleName) => {
    const newCustomRules = { ...customRules };
    delete newCustomRules[ruleName];
    setCustomRules(newCustomRules);
  };
  
  const addRuleToPlayer = (holeNumber, playerIndex, ruleKey, ruleData) => {
    const newScores = { ...scores };
    if (!newScores[holeNumber]) newScores[holeNumber] = {};
    if (!newScores[holeNumber][playerIndex]) newScores[holeNumber][playerIndex] = [];
    
    newScores[holeNumber][playerIndex].push(ruleKey);
    setScores(newScores);
  };

  const removeRuleFromPlayer = (holeNumber, playerIndex, ruleIndex) => {
    const newScores = { ...scores };
    if (newScores[holeNumber] && newScores[holeNumber][playerIndex]) {
        newScores[holeNumber][playerIndex].splice(ruleIndex, 1);
        setScores(newScores);
    }
  };
  
  const resetHole = (holeNumber) => {
    if (!window.confirm(`${holeNumber}번 홀의 모든 기록을 초기화하시겠습니까?`)) return;
    const newScores = { ...scores };
    if(newScores[holeNumber]) {
        delete newScores[holeNumber];
        setScores(newScores);
    }
  };

  const resetAll = () => {
    if (!window.confirm('모든 데이터를 초기화하시겠습니까?')) return;
    setPlayers(['']);
    setRules({
        ob: { name: '오비', amount: 1000, color: 'danger' },
        hazard: { name: '해저드', amount: 1000, color: 'warning' },
        mulligan: { name: '멀리건', amount: 1000, color: 'orange-600' },
        bunker: { name: '벙커', amount: 1000, color: 'warning' },
        threePutt: { name: '쓰리퍼트', amount: 1000, color: 'purple-500' },
        tripleBogey: { name: '트리플보기', amount: 1000, color: 'orange-500' }
    });
    setCustomRules({});
    setScores({});
  };

  const resetScoresFn = () => {
    if (!window.confirm('모든 홀의 스코어 기록을 초기화하시겠습니까?')) return;
    setScores({});
  };
  
  const scrollToTotal = () => {
    if (totalSectionRef.current) { // Check if the ref has a value
      if (isAtTotal) {
        window.scrollTo({ top: lastScrollPosition, behavior: 'smooth' });
        setIsAtTotal(false);
      } else {
        setLastScrollPosition(window.scrollY);
        totalSectionRef.current.scrollIntoView({ behavior: 'smooth' }); // Use the ref here
        setIsAtTotal(true);
      }
    }
  }

  const allRulesForMenu = { ...rules, ...Object.fromEntries(Object.entries(customRules).map(([name, rule]) => [name, {...rule, name}])) };


  return (
    <div className="max-w-5xl mx-auto bg-white overflow-hidden">
      <Header />
      
      <PlayerSetup 
        players={players}
        handlePlayerNameChange={handlePlayerNameChange}
        addPlayer={addPlayer}
        removePlayer={removePlayer}
        resetAll={resetAll}
        resetScoresFn={resetScoresFn}
      />

      <RuleSetup
        rules={rules}
        handleRuleAmountChange={handleRuleAmountChange}
        customRules={customRules}
        customRuleName={customRuleName}
        setCustomRuleName={setCustomRuleName}
        customRuleAmount={customRuleAmount}
        setCustomRuleAmount={setCustomRuleAmount}
        addCustomRule={addCustomRule}
        removeCustomRule={removeCustomRule}
      />

      <Scorecard
        players={players}
        scores={scores}
        allRulesForMenu={allRulesForMenu}
        addRuleToPlayer={addRuleToPlayer}
        removeRuleFromPlayer={removeRuleFromPlayer}
        resetHole={resetHole}
      />

      <Totals 
        totalScores={totalScores}
        totalSectionRef={totalSectionRef}
      />
      
      <button 
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full text-2xl cursor-pointer shadow-lg transition-all hover:bg-blue-600 hover:scale-110 flex justify-center items-center"
        onClick={scrollToTotal}
      >
        {isAtTotal ? '⬆️' : '🏆'}
      </button>
    </div>
  );
}

export default App;