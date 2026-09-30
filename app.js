const EMOTIONS = [
  { name: "快樂", color: "#f7ce46", cue: "被點亮、想分享" },
  { name: "憤怒", color: "#eb5a55", cue: "界線被碰觸" },
  { name: "悲傷", color: "#70a7d8", cue: "失去或錯過" },
  { name: "恐懼", color: "#8d78b7", cue: "不安全、不確定" },
  { name: "驚訝", color: "#f39a43", cue: "和預期不一樣" },
  { name: "厭惡", color: "#7fb36a", cue: "想保持距離" }
];

const SITUATIONS = [
  ["突然聽不懂", "上課時突然聽不懂大家在講什麼。", "school"],
  ["舉手沒被叫到", "老師明明看到我舉手，卻沒有叫我。", "school"],
  ["只剩我上臺", "小組報告時，同學突然不見了，只剩我一個人要上臺。", "school"],
  ["上課前肚子痛", "上課前肚子突然痛起來。", "school"],
  ["突然被點名朗讀", "老師突然點名要我上臺朗讀。", "school"],
  ["被換座位", "我的座位被換到不喜歡的位置。", "school"],
  ["一直被影響", "旁邊的同學動作很大，我一直被影響。", "school"],
  ["大家認真聽", "我分享想法時，大家都很認真地聽。", "school"],
  ["被兇說不對", "我才剛說出想法，同學就說「不對啦！」，而且口氣很兇。", "school"],
  ["新同學不說話", "新來的同學都不跟我說話。", "school"],
  ["想回答又怕錯", "我很想試著回答問題，但又怕答錯。", "school"],
  ["作品被弄壞", "我的作品不小心被同學弄壞了。", "school"],
  ["作品被展示", "我的作品被貼在教室前面展示。", "school"],
  ["只有別人被稱讚", "老師稱讚別人，卻沒有稱讚我。", "school"],
  ["老師看見進步", "老師稱讚我今天比以前更進步了。", "school"],
  ["努力被說很簡單", "我努力畫的圖，被同學說「這很簡單吧！」", "school"],
  ["祕密被說出去", "我說的祕密突然被同學說出去了。", "school"],
  ["同學看到我就笑", "同學看到我就笑，一定是在嘲笑我。", "school"],
  ["被誤會故意撞人", "同學不小心踩到我，大家卻說是我故意撞他。", "school"],
  ["又忘了帶文具", "我又忘了帶文具，雖然昨天已被同學提醒很多次。", "school"],
  ["借物找不到", "我跟同學借的東西找不到了，他開始生氣。", "school"],
  ["期待終於發生", "我期待的事情今天終於發生了。", "play"],
  ["比想像中順利", "我原本很緊張，結果事情比想像中順利。", "play"],
  ["變得更勇敢", "我發現自己比以前更勇敢了。", "play"],
  ["大家都比我快", "我跑得很慢，大家都比我快。", "play"],
  ["別人都比我厲害", "我覺得別人都比我厲害。", "play"],
  ["朋友已經組隊", "想跟朋友一起玩，但他們已經組隊了。", "play"],
  ["不知道怎麼拒絕", "有人約我一起玩，可是我不知道怎麼拒絕。", "play"],
  ["朋友主動找我", "下課時朋友主動跑來找我一起玩。", "play"],
  ["排到就上課了", "下課時間太短，排隊輪到我時還沒玩到，上課鐘就響了。", "play"],
  ["弄丟別人的東西", "我不小心弄丟了別人的東西。", "play"],
  ["弟弟不承認", "弟弟弄壞我的玩具，卻說不是他。", "play"],
  ["大家向我道謝", "我幫忙做事情，大家開心地跟我說謝謝。", "play"],
  ["家裡突然停電", "家裡突然停電，房間暗暗的，只剩我一個人。", "family"],
  ["玩笑不好笑", "家人開我玩笑，我卻覺得一點也不好笑。", "family"],
  ["家人陪我聊天", "家人特地留下時間陪我聊天。", "family"],
  ["努力沒被看見", "大人只讚獎哥哥、姊姊或弟弟、妹妹，卻沒有看到我的表現或努力。", "family"],
  ["被說還太小", "想自己做事，但爸媽說我還太小。", "family"],
  ["作業好像做不完", "回家作業好多，我覺得做不完。", "family"],
  ["家人覺得我沒做好", "我很努力，但家人還是覺得我沒做好。", "family"],
  ["今天不能出去玩", "我想出去玩，但爸媽說今天不行。", "family"],
  ["爸爸一教就懂了", "原本不會的題目，爸爸一教，我突然懂了。", "family"]
];

const EMOTION_WORDS_BY_CATEGORY = {
  "快樂": ["開心","自豪","安心","感動","期待","興奮","滿足","被重視","感謝","有成就感","放心","愉快"],
  "憤怒": ["生氣","不滿","煩躁","嫉妒","氣憤","被冒犯"],
  "悲傷": ["難過","失望","孤單","沮喪","遺憾","無助","心疼","挫折","委屈","愧疚","後悔","懊惱"],
  "恐懼": ["害怕","緊張","擔心","不安","尷尬","猶豫","焦慮","害羞","著急"],
  "驚訝": ["驚訝","意外","困惑","好奇","錯愕","驚喜","不知所措"],
  "厭惡": ["討厭","排斥","不舒服","反感","噁心","想避開","厭煩"]
};

const EMOTION_WORD_CATEGORY = Object.fromEntries(
  Object.entries(EMOTION_WORDS_BY_CATEGORY).flatMap(([category,words])=>words.map(word=>[word,category]))
);

const SITUATION_EMOTION_WORDS = {
  "突然聽不懂": ["困惑","緊張","不安","擔心","挫折","無助"],
  "舉手沒被叫到": ["失望","委屈","不滿","難過","挫折","嫉妒"],
  "只剩我上臺": ["驚訝","緊張","害怕","不安","無助","生氣"],
  "上課前肚子痛": ["擔心","不安","害怕","不舒服","緊張","無助"],
  "突然被點名朗讀": ["緊張","害怕","驚訝","不安","害羞","期待"],
  "被換座位": ["失望","不滿","難過","煩躁","不安","孤單"],
  "一直被影響": ["煩躁","生氣","不滿","不舒服","挫折","想避開"],
  "大家認真聽": ["開心","安心","被重視","自豪","感動","期待"],
  "被兇說不對": ["驚訝","委屈","難過","生氣","害怕","尷尬"],
  "新同學不說話": ["孤單","失望","困惑","不安","難過","害羞"],
  "想回答又怕錯": ["緊張","擔心","害怕","猶豫","期待","不安"],
  "作品被弄壞": ["驚訝","難過","生氣","失望","委屈","心疼"],
  "作品被展示": ["開心","自豪","驚喜","害羞","興奮","被重視"],
  "只有別人被稱讚": ["失望","難過","嫉妒","委屈","不滿","挫折"],
  "老師看見進步": ["開心","自豪","驚喜","安心","感動","有成就感"],
  "努力被說很簡單": ["委屈","生氣","難過","失望","不滿","挫折"],
  "祕密被說出去": ["驚訝","生氣","委屈","害怕","不安","失望"],
  "同學看到我就笑": ["尷尬","害怕","不安","委屈","生氣","困惑"],
  "被誤會故意撞人": ["委屈","生氣","驚訝","無助","難過","不滿"],
  "又忘了帶文具": ["尷尬","懊惱","擔心","後悔","挫折","害怕"],
  "借物找不到": ["緊張","擔心","害怕","愧疚","著急","後悔"],
  "期待終於發生": ["開心","興奮","期待","驚喜","滿足","感動"],
  "比想像中順利": ["安心","開心","自豪","驚喜","放心","有成就感"],
  "變得更勇敢": ["自豪","開心","驚喜","安心","有成就感","興奮"],
  "大家都比我快": ["失望","沮喪","挫折","尷尬","嫉妒","不安"],
  "別人都比我厲害": ["沮喪","挫折","嫉妒","失望","不安","難過"],
  "朋友已經組隊": ["失望","孤單","難過","尷尬","委屈","不安"],
  "不知道怎麼拒絕": ["猶豫","不安","緊張","擔心","尷尬","困惑"],
  "朋友主動找我": ["開心","興奮","被重視","驚喜","期待","安心"],
  "排到就上課了": ["失望","遺憾","難過","不滿","煩躁","委屈"],
  "弄丟別人的東西": ["緊張","擔心","害怕","愧疚","後悔","無助"],
  "弟弟不承認": ["生氣","委屈","不滿","難過","失望","厭煩"],
  "大家向我道謝": ["開心","自豪","感動","被重視","滿足","感謝"],
  "家裡突然停電": ["害怕","緊張","不安","擔心","孤單","無助"],
  "玩笑不好笑": ["不舒服","討厭","生氣","委屈","尷尬","反感"],
  "家人陪我聊天": ["開心","安心","感動","被重視","滿足","感謝"],
  "努力沒被看見": ["失望","難過","嫉妒","委屈","不滿","孤單"],
  "被說還太小": ["失望","委屈","不滿","生氣","挫折","無助"],
  "作業好像做不完": ["擔心","焦慮","挫折","無助","煩躁","厭煩"],
  "家人覺得我沒做好": ["失望","難過","委屈","挫折","生氣","無助"],
  "今天不能出去玩": ["失望","難過","不滿","生氣","遺憾","煩躁"],
  "爸爸一教就懂了": ["驚喜","開心","自豪","安心","有成就感","感謝"]
};

const IDIOM_GROUPS = [
  { emotion:"快樂", slug:"joy", cards:[
    ["心花怒放","心裡像花朵盛開，形容非常高興。"], ["喜出望外","遇到超出預期的喜事，感到特別高興。"],
    ["欣喜若狂","高興得像快要控制不住自己。"], ["眉開眼笑","眉毛舒展、眼睛帶笑，形容滿臉喜悅。"],
    ["樂不可支","快樂得幾乎承受不住，形容非常開心。"], ["歡天喜地","形容非常歡喜、高興。"],
    ["興高采烈","興致很高，情緒熱烈愉快。"], ["手舞足蹈","高興得手腳都舞動起來。"],
    ["笑逐顏開","笑容展開在臉上，形容滿心喜悅。"], ["喜形於色","喜悅的心情表現在臉色上。"]
  ]},
  { emotion:"憤怒", slug:"anger", cards:[
    ["火冒三丈","形容非常生氣，就像怒火升得很高。"], ["怒氣沖沖","帶著強烈怒氣的樣子。"],
    ["勃然大怒","突然變得非常憤怒。"], ["怒不可遏","憤怒得難以抑制。"],
    ["咬牙切齒","咬緊牙齒，形容極度憤恨。"], ["氣急敗壞","又氣又急而失去平常的樣子。"],
    ["怒髮衝冠","憤怒得頭髮好像豎起，頂住帽子。"], ["暴跳如雷","生氣得大跳大叫，聲音像打雷。"],
    ["拍案而起","憤怒或激動地拍桌站起來。"], ["義憤填膺","對不公平的事感到憤怒，充滿胸中。"]
  ]},
  { emotion:"悲傷", slug:"sadness", cards:[
    ["悲從中來","悲傷從心底湧上來。"], ["泣不成聲","哭得太厲害，連話都說不出來。"],
    ["黯然神傷","因失意而默默難過。"], ["心如刀割","心裡像被刀割一樣，形容非常痛苦。"],
    ["悲痛欲絕","悲傷痛苦到了極點。"], ["愁眉苦臉","皺著眉、苦著臉，形容憂愁苦惱。"],
    ["淚如雨下","眼淚像下雨一樣不停流。"], ["痛哭流涕","非常傷心地大哭，眼淚鼻涕直流。"],
    ["愁眉不展","眉頭一直皺著，形容心事重重。"], ["垂頭喪氣","低著頭、精神不振，形容失望難過。"]
  ]},
  { emotion:"恐懼", slug:"fear", cards:[
    ["提心吊膽","形容十分擔心害怕。"], ["膽戰心驚","非常害怕，心神不安。"],
    ["心驚膽跳","因害怕而心跳加快。"], ["不寒而慄","不冷卻發抖，形容非常恐懼。"],
    ["驚慌失措","害怕慌張得不知道該怎麼辦。"], ["毛骨悚然","害怕得汗毛豎起，形容極度恐懼。"],
    ["魂不附體","害怕得像靈魂離開身體，形容非常驚恐。"], ["戰戰兢兢","因害怕而小心發抖的樣子。"],
    ["心有餘悸","危險過後，想起來仍然感到害怕。"], ["聞風喪膽","聽到一點消息就嚇破膽，形容非常害怕。"]
  ]},
  { emotion:"驚訝", slug:"surprise", cards:[
    ["大吃一驚","受到意外刺激而十分驚訝。"], ["目瞪口呆","驚訝得發愣，說不出話。"],
    ["瞠目結舌","驚訝得張大眼睛，說不出話。"], ["出乎意料","超出原先的預想。"],
    ["驚喜交集","驚訝與喜悅同時出現。"], ["難以置信","事情令人很難相信。"],
    ["始料未及","起初沒有預料到。"], ["意想不到","沒有想到事情會這樣發生。"],
    ["出人意表","超出大家原先的預料。"], ["晴天霹靂","像晴天突然打雷，比喻突如其來的重大打擊。"]
  ]},
  { emotion:"厭惡", slug:"disgust", cards:[
    ["深惡痛絕","厭惡痛恨到了極點。"], ["嗤之以鼻","用鼻音冷笑，表示輕視或不認同。"],
    ["不屑一顧","認為不值得看一眼，表示輕視。"], ["敬而遠之","表面尊敬，實際保持距離。"],
    ["退避三舍","主動退讓或避開，不與對方衝突。"], ["令人作嘔","讓人噁心、非常厭惡。"],
    ["疾首蹙額","厭惡或憂恨得皺起眉頭。"], ["面目可憎","外表或神情讓人覺得討厭。"],
    ["不堪入目","內容或景象不好到不能看。"], ["不堪入耳","話語難聽到不能聽下去。"]
  ]}
];

const IDIOMS = IDIOM_GROUPS.flatMap((group, groupIndex) => group.cards.map(([word, meaning], index) => ({
  id: groupIndex * 10 + index,
  word,
  emotion: group.emotion,
  meaning,
  image: `assets/idioms/${group.slug}/${String(index + 1).padStart(2,"0")}.jpg`
})));

const PLAYER_COLORS = ["#d74f4f", "#3478bf", "#a56a22", "#7355a6"];
const CHANCE_CARDS = EMOTIONS.flatMap(e=>[1,2,3].map(points=>({emotion:e.name,points})));
const app = document.getElementById("app");
let setup = { count: 4, level: 1, names: ["玩家1", "玩家2", "玩家3", "玩家4"] };
let state = null;
let l2MoveTimer = null;
let l2SkillTimer = null;
let idiomDbFilter = "全部";

function esc(value = "") {
  return String(value).replace(/[&<>'"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[ch]));
}
function shuffle(items) { return [...items].sort(() => Math.random() - .5); }
function randomItem(items) { return items[Math.floor(Math.random() * items.length)]; }
function emotion(name) { return EMOTIONS.find(e => e.name === name); }
function emotionForWord(word) { return emotion(EMOTION_WORD_CATEGORY[word] || word) || EMOTIONS[0]; }
function situationEmotionWords(situation) { return SITUATION_EMOTION_WORDS[situation?.[0]] || EMOTIONS.map(e=>e.name); }
function save() { if (state) localStorage.setItem("sel-idiom-game", JSON.stringify(state)); }

function setupPage() {
  const saved = localStorage.getItem("sel-idiom-game");
  app.innerHTML = `
    <main class="setup-page">
      <section class="setup-card">
        <div class="setup-hero">
          <div class="setup-title"><div class="eyebrow">SEL × 成語</div><h1>心情冒險</h1><p>2–4人輪流操作，一起讀懂情緒、說出成語。</p></div>
        </div>
        <form class="setup-form" onsubmit="startGame(event)">
          <h2 class="section-title">有幾位玩家？</h2>
          <div class="count-picker" role="group" aria-label="玩家人數">
            ${[2,3,4].map(n => `<button type="button" class="choice ${setup.count===n?'active':''}" onclick="setCount(${n})">${n} 人</button>`).join("")}
          </div>
          <h2 class="section-title">玩家名字</h2>
          <div class="player-fields">
            ${setup.names.slice(0,setup.count).map((name,i)=>`<label class="field"><span>玩家 ${i+1}</span><input maxlength="8" required value="${esc(name)}" oninput="setup.names[${i}]=this.value" aria-label="玩家${i+1}名字"></label>`).join("")}
          </div>
          <h2 class="section-title">選擇關卡</h2>
          <div class="level-picker" role="group" aria-label="選擇關卡">
            ${levelChoice(1,"情緒偵探所","描述情境，猜出3個心情順序")}
            ${levelChoice(2,"情緒成語大富翁","擲骰前進，完成1、2、3分挑戰")}
            ${levelChoice(3,"成語心情冒險島","用1–2張成語卡解讀生活情境")}
          </div>
          <div class="action-row">
            <button class="btn wide" type="submit">開始第 ${setup.level} 關</button>
            ${saved ? `<button class="btn secondary wide" type="button" onclick="continueGame()">繼續上次遊戲</button>` : ""}
          </div>
        </form>
      </section>
    </main>`;
}
function levelChoice(n,title,desc) {
  return `<button type="button" class="choice level-choice ${setup.level===n?'active':''}" onclick="setLevel(${n})"><strong>第${n}關｜${title}</strong><span>${desc}</span></button>`;
}
function setCount(n) { setup.count=n; while(setup.names.length<n) setup.names.push(`玩家${setup.names.length+1}`); setupPage(); }
function setLevel(n) { setup.level=n; setupPage(); }
function continueGame() { try { state=JSON.parse(localStorage.getItem("sel-idiom-game")); render(); } catch { localStorage.removeItem("sel-idiom-game"); setupPage(); } }

function makePlayers() {
  return setup.names.slice(0,setup.count).map((name,i)=>({
    name: name.trim() || `玩家${i+1}`, color: PLAYER_COLORS[i], score: 0, position: 0, missions: 0,
    missionProgress: 0, completed: 0, skipTurns: 0, missionSwap: 0,
    banks: Object.fromEntries(EMOTIONS.map(e=>[e.name,0])), hand: [], scenarios: []
  }));
}
function startGame(event) {
  event.preventDefault();
  beginGame();
}
function beginGame() {
  state = { level: setup.level, players: makePlayers(), current: 0, turn: 0, round: 1, phase: "ready", dice: null, ended: false, log: [] };
  if (state.level===1) prepareL1Turn();
  if (state.level===2) state.phase="roll";
  if (state.level===3) {
    state.deck=shuffle(IDIOMS.map(x=>x.id)); state.discard=[];
    state.chanceDeck=shuffle(CHANCE_CARDS); state.chanceDiscard=[];
    state.players.forEach(p=>{ p.hand=drawIdioms(5); p.scenarios=shuffle(SITUATIONS).slice(0,3); });
    state.phase="select"; state.selectedSituation=null; state.selectedIdioms=[];
  }
  render();
}

function shell(content, side="") {
  return `<div class="app-shell level-${state.level}-shell">
    <header class="topbar"><div class="brand"><span class="brand-mark">心</span><span>SEL × 成語｜第${state.level}關</span></div><div class="top-actions"><button class="icon-btn database-btn" onclick="openIdiomDatabase()" aria-label="開啟SEL成語資料庫">成語資料庫</button><button class="icon-btn" onclick="openRules()" aria-label="查看規則">規則</button><button class="icon-btn" onclick="document.getElementById('confirmDialog').showModal()" aria-label="重新開始">重來</button></div></header>
    <main class="game-main">${scoreStrip()}<div class="game-grid"><section class="panel">${content}</section><aside class="panel side-panel">${side || sideInfo()}</aside></div></main>
  </div>`;
}
function scoreStrip() {
  return `<div class="status-strip" aria-label="玩家狀態">${state.players.map((p,i)=>{const top=topEmotion(p);return `<div class="player-chip ${i===state.current&&!state.ended?'current':''}"><div class="chip-line"><span class="pawn" style="background:${p.color}"></span>${esc(p.name)}</div><div class="chip-meta">${state.level===1?`最高存摺 ${Math.max(...Object.values(p.banks))}/10`:state.level===2?`${p.score}分・${p.missions}/3張`:`${top.name} ${top.points}/10・完成${p.completed}張`}</div></div>`}).join("")}</div>`;
}
function topEmotion(player){return EMOTIONS.map(e=>({name:e.name,points:player.banks?.[e.name]||0})).sort((a,b)=>b.points-a.points)[0];}
function sideInfo() {
  if (state.level===1) return `<h3>本輪進度</h3><span class="stage-pill">第 ${state.round} 輪</span><div class="mini-rule">情緒玩家先抽1張情境圖卡。</div><div class="mini-rule">描述事件時，先不說情緒名稱。</div><div class="mini-rule">觀察玩家找出3個心情與順序。</div><div class="mini-rule">相同位置答對1個，就得1分。</div>${bankHtml(state.players[state.current])}`;
  if (state.level===2) return `<h3>挑戰分數</h3><div class="mini-rule"><b>1分</b>｜顏色、溫度、味道或事物</div><div class="mini-rule"><b>2分</b>｜生活中的發生情境</div><div class="mini-rule"><b>3分</b>｜成語＋正確造句</div><div class="mini-rule">每累積3分，完成1張情境卡。</div>`;
  return `<h3>配對證據</h3><div class="mini-rule"><b>情境線索</b>｜指出卡上的哪一句。</div><div class="mini-rule"><b>成語語意</b>｜解釋意思或正確造句。</div><div class="mini-rule">任一情緒先累積10點即獲勝。</div>${bankHtml(state.players[state.current])}`;
}
function bankHtml(player) {
  return `<h3>${esc(player.name)}的存摺</h3><div class="bank">${EMOTIONS.map(e=>`<div class="bank-row"><span>${e.name}</span><div class="meter"><span style="width:${player.banks[e.name]*10}%;background:${e.color}"></span></div><b>${player.banks[e.name]}</b></div>`).join("")}</div>`;
}
function render() {
  if (!state) return setupPage();
  save();
  if (state.ended) return renderEnd();
  if (state.level===1) renderL1();
  if (state.level===2) renderL2();
  if (state.level===3) renderL3();
}

function prepareL1Turn() {
  state.phase="draw"; state.situation=null; state.ownerPick=[]; state.observerOrder=state.players.map((_,i)=>i).filter(i=>i!==state.current); state.observerCursor=0; state.guess=[]; state.lastResult=null;
}
function renderL1() {
  const owner=state.players[state.current];
  if (state.phase==="draw") app.innerHTML=shell(`<div class="turn-banner"><div class="turn-number">${state.round}</div><div><span class="stage-pill">情緒玩家</span><h2>${esc(owner.name)}，先抽一張情境圖卡</h2></div></div><button class="draw-card" onclick="drawL1Card()" aria-label="抽一張情境圖卡"><span>SEL × 成語</span><strong>點一下抽卡</strong><small>42張生活情境</small></button><p class="safe-note">抽到後先描述事件，再選出「先、再、最後」三個心情。</p>`);
  else if (state.phase==="story") app.innerHTML=shell(`<div class="turn-banner"><div class="turn-number">${state.round}</div><div><span class="stage-pill">情緒玩家</span><h2>${esc(owner.name)}，請描述這個情境</h2></div></div>${situationHtml(state.situation)}<p class="safe-note">可以改說安全的類似經驗；不想回答時可以換卡。</p><div class="action-row"><button class="btn secondary" onclick="drawL1Card()">換一張卡</button><button class="btn" onclick="state.phase='ownerPick';render()">我已描述完畢</button></div>`);
  else if (state.phase==="ownerPick") app.innerHTML=shell(`<span class="stage-pill">只有情緒玩家看螢幕</span><h2>${esc(owner.name)}，選出3個心情並排序</h2>${situationHtml(state.situation,true)}<p class="muted">以下是適合這張情境卡的情緒詞。依序點選「先、再、最後」；感受沒有唯一答案。</p>${sequenceHtml(state.ownerPick)}${emotionButtons(state.ownerPick,"pickOwner",state.situation)}<div class="action-row"><button class="btn" ${state.ownerPick.length!==3?'disabled':''} onclick="lockOwner()">鎖定答案並交給下一位</button></div>`);
  else if (state.phase==="pass") {
    const observer=state.players[state.observerOrder[state.observerCursor]];
    app.innerHTML=shell(`<div class="pass-screen"><span class="stage-pill">請傳遞裝置</span><p>下一位觀察玩家</p><div class="big-name">${esc(observer.name)}</div><p class="muted">請確認情緒玩家看不到你的選擇。</p><button class="btn" onclick="state.phase='guess';state.guess=[];render()">我是${esc(observer.name)}，開始作答</button></div>`);
  } else if (state.phase==="guess") {
    const observer=state.players[state.observerOrder[state.observerCursor]];
    app.innerHTML=shell(`<span class="stage-pill">觀察玩家</span><h2>${esc(observer.name)}，你聽見哪3個心情？</h2>${situationHtml(state.situation,true)}<p class="muted">從這張卡適合的情緒詞中，依「先、再、最後」點選。情緒詞與位置都相同才得分。</p>${sequenceHtml(state.guess)}${emotionButtons(state.guess,"pickGuess",state.situation)}<div class="action-row"><button class="btn" ${state.guess.length!==3?'disabled':''} onclick="scoreGuess()">送出答案</button></div>`);
  } else if (state.phase==="reveal") {
    const r=state.lastResult;
    app.innerHTML=shell(`<span class="stage-pill">答案揭曉</span><h2>${esc(r.name)}得到 ${r.points} 分</h2><div class="result-list">${r.rows.map((x,i)=>`<div class="result-row"><b>${["先","再","最後"][i]}</b><span>情緒玩家：${x.answer}</span><span>你的答案：${x.guess}</span><span class="${x.ok?'correct':'miss'}">${x.ok?'答對':'不同'}</span></div>`).join("")}</div><p class="safe-note">不同不代表錯誤。請用「我聽見……所以我猜……」分享一個判斷線索。</p><button class="btn" onclick="continueL1()">${state.observerCursor<state.observerOrder.length-1?'交給下一位觀察玩家':'完成本回合'}</button>`, bankHtml(state.players[state.observerOrder[state.observerCursor]]));
  }
}
function drawL1Card(){state.situation=randomItem(SITUATIONS);state.phase="story";render();}
function situationHtml(s,compact=false) {
  const category=s?.[2]||"school";
  const labels={school:"在學校與同學相處",play:"玩耍、活動與表現",family:"家庭與日常生活"};
  return `<article class="situation-card ${compact?'compact':''}"><div class="situation-visual"><img src="assets/${category}-situations.png" alt="${labels[category]}情境插圖"></div><div class="situation-copy"><span class="situation-category">${labels[category]}</span><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></div></article>`;
}
function sequenceHtml(seq) { return `<div class="sequence">${[0,1,2].map(i=>`<div class="sequence-slot" style="${seq[i]?`border-color:${emotionForWord(seq[i]).color}`:''}">${["先","再","最後"][i]}${seq[i]?`｜${esc(seq[i])}`:""}</div>`).join("")}</div>`; }
function emotionButtons(seq,fn,situation=null) {
  const words=situationEmotionWords(situation);
  return `<div class="emotion-grid context-emotions">${words.map(word=>{const e=emotionForWord(word);return `<button class="emotion-btn ${seq.includes(word)?'selected':''}" style="background:${e.color}" onclick="${fn}('${word}')">${word}<small>${e.name}｜${e.cue}</small></button>`}).join("")}</div>`;
}
function pickOwner(name) { togglePick(state.ownerPick,name); render(); }
function pickGuess(name) { togglePick(state.guess,name); render(); }
function togglePick(arr,name) { const i=arr.indexOf(name); if(i>=0) arr.splice(i,1); else if(arr.length<3) arr.push(name); }
function lockOwner() { state.phase="pass"; render(); }
function scoreGuess() {
  const idx=state.observerOrder[state.observerCursor], player=state.players[idx]; let points=0;
  const rows=state.ownerPick.map((answer,i)=>{ const ok=answer===state.guess[i]; if(ok){const category=emotionForWord(answer).name;points++;player.banks[category]=Math.min(10,player.banks[category]+1);} return {answer,guess:state.guess[i],ok}; });
  state.lastResult={name:player.name,points,rows}; state.phase="reveal";
  if (Object.values(player.banks).some(v=>v>=10)) { state.winner=idx; state.ended=true; }
  render();
}
function continueL1() {
  if(state.observerCursor<state.observerOrder.length-1){state.observerCursor++;state.phase="pass";}
  else { state.turn++; state.current=(state.current+1)%state.players.length; state.round=Math.floor(state.turn/state.players.length)+1; if(state.round>3){state.ended=true;} else prepareL1Turn(); }
  render();
}

function renderBoard(count=30) {
  const tiles=Array.from({length:count},(_,i)=>{const e=EMOTIONS[i%6];return `<div class="tile" style="--tile-color:${e.color}" data-emotion="${e.name}"><span class="tile-index">${i===0?'起點':i}</span><span class="tile-emotion">${e.name}</span><div class="tile-pawns">${state.players.map(p=>p.position===i?`<span class="pawn" title="${esc(p.name)}" style="background:${p.color}"></span>`:"").join("")}</div></div>`});
  const rows=Array.from({length:Math.ceil(count/6)},(_,row)=>{const group=tiles.slice(row*6,row*6+6);return `<div class="board-row ${row%2?'reverse':''}">${group.join("")}</div>`}).join("");
  return `<div class="board-wrap"><div class="board-map" aria-label="情緒大富翁棋盤"><div class="board-title"><strong>情緒大富翁</strong><span>沿著彩色情緒島前進吧！</span></div><div class="board-path">${rows}</div></div></div>`;
}
function diceHtml(value) {
  const pips={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]}[value]||[];
  return `<div class="dice-face" aria-label="${value?`骰子點數${value}`:'尚未擲骰'}">${value?Array.from({length:9},(_,i)=>`<span class="dice-pip ${pips.includes(i+1)?'show':''}"></span>`).join(""):'<span class="dice-question">?</span>'}</div>`;
}
function emotionCardHtml(name) {
  const e=emotion(name);
  return `<article class="emotion-reveal-card" style="--emotion-color:${e.color}" aria-label="抽到的情緒牌卡：${e.name}"><span class="emotion-card-label">抽到的情緒牌卡</span><div class="emotion-card-orbit"><span>心情</span></div><strong>${e.name}</strong><p>${e.cue}</p></article>`;
}
const L2_SKILLS = {
  "快樂": { title:"恢復型", text:"完成本次挑戰後，再擲一次骰子。" },
  "憤怒": { title:"爆發型", text:"立刻前進3格，再完成原本的情緒挑戰。" },
  "悲傷": { title:"沉澱型", text:"全組一起慢慢數10秒，再前進1格。" },
  "恐懼": { title:"警示型", text:"保留一次換卡機會，遇到情境任務時可換一張。" },
  "厭惡": { title:"逃避型", text:"下一位玩家暫停一回合。" },
  "驚訝": { title:"轉向型", text:"指定另一位玩家，擲骰決定他後退幾格。" }
};
function l2SkillHtml(name) {
  const skill=L2_SKILLS[name], used=state.skillUsedThisTurn;
  return `<section class="emotion-skill-panel" style="--skill-color:${emotion(name).color}"><div><span class="skill-kicker">情緒卡功能</span><h3>${name}｜${skill.title}</h3><p>${skill.text}</p></div><button class="btn skill-btn" ${used?'disabled':''} onclick="useL2Skill()">${used?'本回合已使用':'使用情緒技能'}</button></section>${state.skillMessage?`<p class="skill-message" role="status">${esc(state.skillMessage)}</p>`:""}`;
}
function renderL2() {
  const p=state.players[state.current];
  if(state.phase==="roll") app.innerHTML=shell(`<span class="stage-pill">${esc(p.name)}的回合</span><h2>擲骰子，前往情緒格</h2>${renderBoard()}<div class="dice-area">${diceHtml(null)}<button class="btn gold" onclick="rollL2()">擲骰子</button></div>`);
  else if(state.phase==="moving") {
    app.innerHTML=shell(`<span class="stage-pill">${esc(p.name)}的回合</span><h2>擲出 ${state.dice} 點，棋子前進！</h2><div class="move-status">${diceHtml(state.dice)}<div><strong>前進 ${state.moveProgress}/${state.dice} 格</strong><p>跟著棋子一起數：${state.moveProgress||'準備出發'}</p></div></div>${renderBoard()}`);
    scheduleL2Move();
  }
  else if(state.phase==="challenge") {
    const e=emotion(state.tileEmotion);
    app.innerHTML=shell(`${emotionCardHtml(e.name)}${l2SkillHtml(e.name)}<h2>${esc(p.name)}，選擇挑戰</h2><div class="challenge-options">${[[1,"情緒聯想","顏色、溫度、味道、動植物或事物"],[2,"情境描述","生活中何時可能出現這個情緒"],[3,"成語挑戰","說出相關成語並正確造句"]].map(x=>`<button class="challenge ${state.challengePoints===x[0]?'active':''}" onclick="state.challengePoints=${x[0]};render()"><strong>${x[0]}分｜${x[1]}</strong>${x[2]}</button>`).join("")}</div><label class="field"><span>看著上方的情緒牌卡，先說給大家聽，也可以記下關鍵詞</span><textarea id="challengeAnswer" class="answer-box" placeholder="例如：紅色，因為憤怒時像火一樣熱……">${esc(state.challengeAnswer||"")}</textarea></label><button class="btn" ${!state.challengePoints?'disabled':''} onclick="reviewL2()">請大家確認</button>`);
  } else if(state.phase==="review") app.innerHTML=shell(`${emotionCardHtml(state.tileEmotion)}${l2SkillHtml(state.tileEmotion)}<span class="stage-pill">全組確認</span><h2>這個回答符合 ${state.tileEmotion} 嗎？</h2><div class="review-box"><p><b>${state.challengePoints}分挑戰</b></p><p>${esc(state.challengeAnswer||"（玩家以口頭作答）")}</p></div><p class="safe-note">先說出一項做得好的地方；需要補充時，告訴玩家缺少哪個線索。</p><div class="action-row"><button class="btn secondary" onclick="state.phase='challenge';render()">請補充</button><button class="btn" onclick="approveL2()">通過，得到${state.challengePoints}分</button></div>`);
  else if(state.phase==="skillTarget") app.innerHTML=shell(`${emotionCardHtml(state.tileEmotion)}${l2SkillHtml(state.tileEmotion)}<span class="stage-pill">驚訝｜轉向型</span><h2>指定一位玩家後退</h2><p class="muted">點選玩家後，系統會擲骰決定後退格數。</p><div class="skill-target-grid">${state.players.map((x,i)=>i===state.current?"":`<button class="choice" onclick="resolveSurpriseSkill(${i})"><span class="pawn" style="background:${x.color}"></span>${esc(x.name)}</button>`).join("")}</div>`);
  else if(state.phase==="calming") { app.innerHTML=shell(`${emotionCardHtml(state.tileEmotion)}<section class="calm-card"><span class="stage-pill">悲傷｜沉澱型</span><div class="calm-countdown">${state.calmCount}</div><h2>一起慢慢呼吸、數到10</h2><p>數完後，${esc(p.name)}前進1格。</p></section>`); scheduleL2Calm(); }
  else if(state.phase==="mission") app.innerHTML=shell(`<span class="mission-badge">情境任務 ${p.missions+1}/3</span><h2>${esc(p.name)}，這個情境可能出現哪種心情？</h2>${situationHtml(state.missionSituation)}${p.missionSwap>0?`<button class="btn secondary mission-swap" onclick="swapMissionL2()">使用「恐懼｜警示型」換一張情境卡（${p.missionSwap}次）</button>`:""}<p class="muted">從適合這張卡的情緒詞中選一個，再說出情境線索，就完成任務。</p>${emotionButtons([],"completeMission",state.missionSituation)}`);
}
function rollL2() {
  state.dice=1+Math.floor(Math.random()*6);state.moveProgress=0;state.challengePoints=null;state.challengeAnswer="";state.skillUsedThisTurn=false;state.skillMessage="";state.phase="moving";render();
}
function scheduleL2Move(){if(l2MoveTimer)return;l2MoveTimer=setTimeout(()=>{l2MoveTimer=null;advanceL2Piece();},520);}
function advanceL2Piece(){
  if(state.phase!=="moving")return;
  if(state.moveProgress<state.dice){const p=state.players[state.current];p.position=(p.position+1)%30;state.moveProgress++;render();return;}
  state.tileEmotion=EMOTIONS[state.players[state.current].position%6].name;state.phase="challenge";render();
}
function reviewL2(){state.challengeAnswer=document.getElementById("challengeAnswer").value.trim();state.phase="review";render();}
function approveL2(){const p=state.players[state.current];p.score+=state.challengePoints;p.missionProgress+=state.challengePoints;if(p.missionProgress>=3){p.missionProgress-=3;state.missionSituation=randomItem(SITUATIONS);state.phase="mission";}else nextL2();render();}
function completeMission(name){state.players[state.current].missions++;state.lastMissionEmotion=emotionForWord(name).name;state.lastMissionEmotionWord=name;if(state.players[state.current].missions>=3){state.winner=state.current;state.ended=true;}else nextL2();render();}
function useL2Skill(){
  if(state.skillUsedThisTurn)return;
  const p=state.players[state.current], name=state.tileEmotion;state.skillUsedThisTurn=true;
  if(name==="快樂"){state.extraRoll=true;state.skillMessage="恢復能量！完成本次挑戰後，可以再擲一次。";}
  if(name==="憤怒"){p.position=(p.position+3)%30;state.skillMessage="爆發前進3格！仍要完成原本的憤怒挑戰。";}
  if(name==="恐懼"){p.missionSwap=(p.missionSwap||0)+1;state.skillMessage="已保留1次警示換卡機會。";}
  if(name==="厭惡"){const next=(state.current+1)%state.players.length;state.players[next].skipTurns=(state.players[next].skipTurns||0)+1;state.skillMessage=`${state.players[next].name}下一回合暫停一次。`;}
  if(name==="驚訝"){state.skillMessage="請指定一位玩家。";state.phase="skillTarget";}
  if(name==="悲傷"){state.calmCount=10;state.phase="calming";}
  render();
}
function resolveSurpriseSkill(target){const roll=1+Math.floor(Math.random()*6),player=state.players[target];player.position=(player.position-roll+30)%30;state.skillMessage=`轉向骰出${roll}點，${player.name}後退${roll}格。`;state.phase="challenge";render();}
function scheduleL2Calm(){if(l2SkillTimer)return;l2SkillTimer=setTimeout(()=>{l2SkillTimer=null;if(state.phase!=="calming")return;if(state.calmCount>1){state.calmCount--;render();}else{const p=state.players[state.current];p.position=(p.position+1)%30;state.skillMessage="沉澱完成，前進1格。";state.phase="challenge";render();}},1000);}
function swapMissionL2(){const p=state.players[state.current];if((p.missionSwap||0)<1)return;p.missionSwap--;let next=randomItem(SITUATIONS);if(SITUATIONS.length>1)while(next===state.missionSituation)next=randomItem(SITUATIONS);state.missionSituation=next;render();}
function nextL2(){
  state.turn++;state.round=Math.floor(state.turn/state.players.length)+1;state.phase="roll";state.dice=null;state.moveProgress=0;state.skillMessage="";state.skillUsedThisTurn=false;
  if(state.extraRoll){state.extraRoll=false;return;}
  state.current=(state.current+1)%state.players.length;
  let guard=0;
  while((state.players[state.current].skipTurns||0)>0&&guard<state.players.length){state.players[state.current].skipTurns--;state.current=(state.current+1)%state.players.length;guard++;}
}

function drawIdioms(n){const out=[];for(let i=0;i<n;i++){if(!state.deck.length)state.deck=shuffle(state.discard.splice(0));if(state.deck.length)out.push(state.deck.pop());}return out;}
function renderL3(){
  const p=state.players[state.current];
  if(state.phase==="select") app.innerHTML=shell(`<span class="stage-pill">${esc(p.name)}的回合</span><h2>先選1張情境卡</h2><div class="card-grid">${p.scenarios.map((s,i)=>`<button class="play-card ${state.selectedSituation===i?'selected':''}" onclick="state.selectedSituation=${i};render()"><span class="type">情境 ${i+1}</span><div class="idiom">${esc(s[0])}</div><p>${esc(s[1])}</p></button>`).join("")}</div><h3>再選1–2張情緒成語卡</h3><div class="card-grid">${p.hand.map((id,i)=>idiomCard(id,i)).join("")}</div><label class="field"><span>說明情境線索、成語語意；出2張時要說情緒轉折</span><textarea id="l3Answer" class="answer-box" placeholder="我先……，後來因為……，所以……"></textarea></label><div class="action-row"><button class="btn" ${(state.selectedSituation===null||!state.selectedIdioms.length)?'disabled':''} onclick="reviewL3()">請大家確認配對</button></div>`);
  else if(state.phase==="review3") {
    const s=p.scenarios[state.selectedSituation];const cards=state.selectedIdioms.map(i=>IDIOMS.find(x=>x.id===p.hand[i]));
    app.innerHTML=shell(`<span class="stage-pill">全組確認</span><h2>成語和情境配得起來嗎？</h2>${situationHtml(s)}<div class="card-grid">${cards.map(c=>`<article class="play-card" style="border-color:${emotion(c.emotion).color}"><span class="type">${c.emotion}</span><div class="idiom">${c.word}</div><p>${c.meaning}</p></article>`).join("")}</div><div class="review-box"><b>玩家說明</b><p>${esc(state.l3Answer||"（玩家以口頭說明）")}</p></div><div class="action-row"><button class="btn secondary" onclick="state.phase='select';render()">請補充</button><button class="btn" onclick="approveL3()">配對成功</button></div>`);
  } else if(state.phase==="chanceReady") app.innerHTML=shell(`<span class="stage-pill">任務完成</span><h2>${esc(p.name)}，抽一張機會牌</h2><button class="chance-card-back" onclick="drawChanceL3()" aria-label="抽一張情緒機會牌"><span>SEL × 成語</span><strong>機會牌</strong><small>點一下，獲得心情點數</small></button><p class="safe-note">抽到的點數會自動存入對應的情緒存摺；任一情緒滿10點就獲勝。</p>`,bankHtml(p));
  else if(state.phase==="chanceReveal") {
    const card=state.lastChance,e=emotion(card.emotion),total=p.banks[card.emotion];
    app.innerHTML=shell(`<span class="stage-pill">機會牌揭曉</span><article class="chance-reveal" style="--chance-color:${e.color}"><span class="chance-label">心情點數</span><strong>${e.name}</strong><div class="chance-points">＋${card.points}</div><p>${e.cue}</p></article><h2>${esc(p.name)}的${e.name}累積到 ${total}/10 點</h2><div class="meter chance-meter"><span style="width:${total*10}%;background:${e.color}"></span></div><button class="btn wide" onclick="continueAfterChanceL3()">${total>=10?'達到10點，查看結果':'收下點數，繼續擲骰'}</button>`,bankHtml(p));
  } else if(state.phase==="roll3") app.innerHTML=shell(`<span class="stage-pill">已獲得心情點數</span><h2>${esc(p.name)}，擲骰前進</h2>${renderBoard(30)}<div class="dice-area">${diceHtml(state.dice)}<button class="btn gold" onclick="rollL3()">擲骰子${state.l3Bonus?`＋${state.l3Bonus}格獎勵`:""}</button></div>`);
}
function idiomCard(id,index){const c=IDIOMS.find(x=>x.id===id),e=emotion(c.emotion),sel=state.selectedIdioms.includes(index);return `<button class="play-card ${sel?'selected':''}" style="border-color:${sel?e.color:'transparent'}" onclick="toggleIdiom(${index})"><span class="type" style="color:${e.color}">${c.emotion}</span><div class="idiom">${c.word}</div><p>${c.meaning}</p><div class="skill-link"><span onclick="event.stopPropagation();useSkill(${index})">發動${skillName(c.emotion)}技能</span></div></button>`;}
function toggleIdiom(i){const a=state.selectedIdioms,at=a.indexOf(i);if(at>=0)a.splice(at,1);else if(a.length<2)a.push(i);render();}
function skillName(e){return {"快樂":"分享光","憤怒":"換氣","悲傷":"沉澱","恐懼":"預備","驚訝":"轉向","厭惡":"設界線"}[e];}
function reviewL3(){state.l3Answer=document.getElementById("l3Answer").value.trim();state.phase="review3";render();}
function approveL3(){const p=state.players[state.current];state.l3Bonus=state.selectedIdioms.length===2?1:0;const remove=[...state.selectedIdioms].sort((a,b)=>b-a);remove.forEach(i=>state.discard.push(p.hand.splice(i,1)[0]));p.scenarios.splice(state.selectedSituation,1);p.completed++;p.hand.push(...drawIdioms(5-p.hand.length));p.scenarios.push(randomItem(SITUATIONS));state.phase="chanceReady";state.dice=null;state.lastChance=null;render();}
function drawChanceL3(){
  if(!state.chanceDeck?.length){state.chanceDeck=shuffle(state.chanceDiscard?.length?state.chanceDiscard.splice(0):CHANCE_CARDS);}
  const card=state.chanceDeck.pop(),p=state.players[state.current];state.chanceDiscard=state.chanceDiscard||[];state.chanceDiscard.push(card);p.banks[card.emotion]=Math.min(10,(p.banks[card.emotion]||0)+card.points);state.lastChance=card;state.phase="chanceReveal";render();
}
function continueAfterChanceL3(){const p=state.players[state.current];if((p.banks[state.lastChance.emotion]||0)>=10){state.winner=state.current;state.ended=true;}else state.phase="roll3";render();}
function useSkill(index){
  const p=state.players[state.current], card=IDIOMS.find(x=>x.id===p.hand[index]);state.discard.push(p.hand.splice(index,1)[0]);p.hand.push(...drawIdioms(5-p.hand.length));
  if(card.emotion==="快樂")p.position=Math.min(29,p.position+1);
  if(card.emotion==="悲傷"&&state.discard.length>1){const recovered=state.discard.shift();p.hand[p.hand.length-1]=recovered;}
  if(["驚訝","厭惡"].includes(card.emotion))p.scenarios=shuffle(SITUATIONS).slice(0,3);
  state.selectedIdioms=[];state.selectedSituation=null;state.l3Bonus=0;state.phase="roll3";state.skillMessage=`已發動「${skillName(card.emotion)}」`;
  render();
}
function rollL3(){state.dice=1+Math.floor(Math.random()*6);const p=state.players[state.current];p.position=(p.position+state.dice+(state.l3Bonus||0))%30;state.current=(state.current+1)%state.players.length;state.turn++;state.round=Math.floor(state.turn/state.players.length)+1;state.phase="select";state.selectedSituation=null;state.selectedIdioms=[];state.l3Bonus=0;state.lastChance=null;render();}

function ensureReflections(){
  state.reflections=state.players.map((_,i)=>({
    emotionA:"",emotionB:"",idiom:"",reason:"",strategy:"",
    ...(state.reflections?.[i]||{})
  }));
  if(!Number.isInteger(state.reflectionPlayer)||state.reflectionPlayer<0||state.reflectionPlayer>=state.players.length)state.reflectionPlayer=0;
}
function reflectionComplete(index){const r=state.reflections?.[index];return !!r&&["emotionA","emotionB","idiom","reason","strategy"].every(key=>r[key]?.trim());}
function reflectionPanelHtml(){
  ensureReflections();
  const i=state.reflectionPlayer,p=state.players[i],r=state.reflections[i];
  return `<section class="reflection-panel"><span class="stage-pill">我的遊戲收穫</span><h3>完成離場小任務</h3><p class="muted">請每位玩家輪流填寫，完成後就能取得自己的參與證書。</p><div class="reflection-tabs" role="tablist" aria-label="選擇填寫玩家">${state.players.map((player,index)=>`<button class="reflection-tab ${i===index?'active':''} ${reflectionComplete(index)?'done':''}" type="button" onclick="setReflectionPlayer(${index})">${esc(player.name)}${reflectionComplete(index)?'<span>完成</span>':''}</button>`).join("")}</div><div class="reflection-form" style="--player-color:${p.color}"><h4>${esc(p.name)}的學習收穫</h4><label>今天我更能分辨<div class="sentence-inputs"><input maxlength="12" value="${esc(r.emotionA)}" placeholder="情緒詞1" oninput="updateReflection(${i},'emotionA',this.value)"><span>和</span><input maxlength="12" value="${esc(r.emotionB)}" placeholder="情緒詞2" oninput="updateReflection(${i},'emotionB',this.value)"></div></label><label>我想帶走的成語是<input maxlength="16" value="${esc(r.idiom)}" placeholder="填入一個成語" oninput="updateReflection(${i},'idiom',this.value)"></label><label>因為<input maxlength="40" value="${esc(r.reason)}" placeholder="它讓我想到……" oninput="updateReflection(${i},'reason',this.value)"></label><label>下次遇到相似情境，我可以先<input maxlength="40" value="${esc(r.strategy)}" placeholder="寫下可行的方法" oninput="updateReflection(${i},'strategy',this.value)"></label><button id="certificateButton-${i}" class="btn certificate-open-btn" type="button" ${reflectionComplete(i)?'':'disabled'} onclick="openCertificate(${i})">完成並查看我的證書</button><p class="reflection-hint" id="reflectionHint-${i}">${reflectionComplete(i)?'已完成，可以打開個人證書。':'填完五個空格後，就能打開個人證書。'}</p></div></section>`;
}
function setReflectionPlayer(index){state.reflectionPlayer=index;save();renderEnd();}
function updateReflection(index,key,value){
  ensureReflections();state.reflections[index][key]=value;save();
  const complete=reflectionComplete(index),button=document.getElementById(`certificateButton-${index}`),hint=document.getElementById(`reflectionHint-${index}`);
  if(button)button.disabled=!complete;
  if(hint)hint.textContent=complete?'已完成，可以打開個人證書。':'填完五個空格後，就能打開個人證書。';
}
function certificateResultText(player){
  if(state.level===1)return `情緒存摺最高累積 ${Math.max(...Object.values(player.banks))}/10 點`;
  if(state.level===2)return `完成 ${player.missions} 張情境卡，共獲得 ${player.score} 分`;
  const top=topEmotion(player);return `${top.name}情緒累積 ${top.points}/10 點，完成 ${player.completed} 次配對`;
}
function openCertificate(index){
  ensureReflections();if(!reflectionComplete(index))return;
  const p=state.players[index],r=state.reflections[index];
  const date=new Intl.DateTimeFormat("zh-TW",{year:"numeric",month:"long",day:"numeric"}).format(new Date());
  document.getElementById("certificateContent").innerHTML=`<article class="certificate-card" style="--player-color:${p.color}"><div class="certificate-kicker">SEL × 成語｜心情冒險</div><h2>參與證書</h2><p class="certificate-lead">恭喜</p><div class="certificate-name">${esc(p.name)}</div><p>完成第 ${state.level} 關的情緒辨識、表達與成語學習任務</p><div class="certificate-score">${esc(certificateResultText(p))}</div><div class="certificate-reflections"><p><b>我更能分辨：</b>${esc(r.emotionA)}和${esc(r.emotionB)}</p><p><b>我想帶走的成語：</b>${esc(r.idiom)}，因為${esc(r.reason)}</p><p><b>我的下一步：</b>${esc(r.strategy)}</p></div><div class="certificate-footer"><span>${date}</span><strong>心情冒險完成紀念</strong></div></article><div class="certificate-actions"><button class="btn secondary" type="button" onclick="closeCertificate()">返回修改</button><button class="btn" type="button" onclick="printCertificate()">列印／存成 PDF</button></div>`;
  document.getElementById("certificateDialog").showModal();
}
function closeCertificate(){document.getElementById("certificateDialog").close();}
function printCertificate(){window.print();}

function renderEnd(){
  const ranked=[...state.players].sort((a,b)=>state.level===1?Math.max(...Object.values(b.banks))-Math.max(...Object.values(a.banks)):state.level===2?b.missions-a.missions||b.score-a.score:topEmotion(b).points-topEmotion(a).points||b.completed-a.completed);
  const winner=state.winner!==undefined?state.players[state.winner]:ranked[0];
  ensureReflections();
  app.innerHTML=shell(`<div class="end-screen"><span class="stage-pill">遊戲結束</span><h2>${esc(winner.name)}完成心情冒險！</h2><p>${state.level===3?`${topEmotion(winner).name}情緒率先累積10點！`:"每個人的感受都值得被聽見。分數記錄的是傾聽、表達與成語運用的練習。"}</p><div class="podium">${ranked.map((p,i)=>`<div class="podium-row"><b>${i+1}</b><div class="chip-line"><span class="pawn" style="background:${p.color}"></span>${esc(p.name)}</div><strong>${state.level===1?`${Math.max(...Object.values(p.banks))}/10`:state.level===2?`${p.missions}張・${p.score}分`:`${topEmotion(p).name} ${topEmotion(p).points}/10`}</strong></div>`).join("")}</div><p class="certificate-reminder">每位玩家完成旁邊的學習收穫，就能取得自己的參與證書。</p><div class="action-row" style="justify-content:center"><button class="btn secondary" onclick="setupPage()">回到選單</button><button class="btn" onclick="setupPage();localStorage.removeItem('sel-idiom-game')">開始新遊戲</button></div></div>`,reflectionPanelHtml());
}

function rulesForLevel(level){
  if(level===1)return `<h2>第一關｜情緒偵探所</h2><ol class="rules-list"><li>情緒玩家先抽1張情境圖卡，再描述卡上情境或安全的類似經驗，先不說情緒名稱。</li><li>每張情境卡會提供6個貼近情境的情緒詞；情緒玩家選3個，依「先、再、最後」排序並鎖定。</li><li>其他玩家依序拿裝置，從同一組情緒詞中作答；答案會在每人作答後揭曉。</li><li>同一位置的情緒詞相同得1分，分數會依所屬六大情緒加到觀察玩家的存摺。</li><li>任一情緒滿10分，或完成3輪，遊戲結束。</li></ol>`;
  if(level===2)return `<h2>第二關｜情緒成語大富翁</h2><ol class="rules-list"><li>擲骰前進到不同顏色的情緒格，畫面會顯示抽到的情緒牌卡。</li><li>每次抵達情緒格，可選擇發動1次該牌卡的情緒技能。</li><li>聯想得1分、生活情境得2分、成語並造句得3分。</li><li>全組按「通過」確認；若線索不足，可請玩家補充。</li><li>每累積3分，完成1張情境任務；第一位完成3張情境卡的玩家獲勝。</li></ol>`;
  return `<h2>第三關｜成語心情冒險島</h2><ol class="rules-list"><li>每位玩家有5張成語卡與3張情境卡。</li><li>選1張情境，打出1–2張適合的成語卡並說明。</li><li>打出2張時，要說出「先……後……」的情緒變化。</li><li>配對成功即完成任務，可抽1張機會牌；系統會自動記錄牌上的情緒與1～3點。</li><li>收下點數後擲骰前進；任一情緒最先累積10點的玩家獲勝。</li></ol>`;
}
function openRules(){document.getElementById("rulesContent").innerHTML=rulesForLevel(state?.level||setup.level)+`<p class="safe-note">安全約定：可以跳過；不說真實人名；不評論別人的感受對不對。</p>`;document.getElementById("rulesDialog").showModal();}
function closeRules(){document.getElementById("rulesDialog").close();}
function openIdiomDatabase(){
  idiomDbFilter="全部";
  renderIdiomDatabase();
  const dialog=document.getElementById("idiomDatabaseDialog");
  dialog.showModal();
  dialog.scrollTop=0;
  requestAnimationFrame(()=>{dialog.scrollTop=0;});
}
function closeIdiomDatabase(){document.getElementById("idiomDatabaseDialog").close();}
function setIdiomDbFilter(name){idiomDbFilter=name;renderIdiomDatabase();}
function renderIdiomDatabase(){
  const visible=idiomDbFilter==="全部"?IDIOMS:IDIOMS.filter(card=>card.emotion===idiomDbFilter);
  document.getElementById("idiomDatabaseContent").innerHTML=`
    <div class="library-heading"><div><span class="stage-pill">SEL 學習小幫手</span><h2>情緒成語資料庫</h2><p>共有60張牌卡。選擇情緒類別，看看成語、插圖和意思。</p></div><div class="library-count">${visible.length}<small>張牌卡</small></div></div>
    <div class="library-filters" role="group" aria-label="依情緒篩選成語">
      ${["全部",...EMOTIONS.map(e=>e.name)].map(name=>{const e=emotion(name);return `<button class="library-filter ${idiomDbFilter===name?'active':''}" style="--filter-color:${e?.color||'#16766f'}" onclick="setIdiomDbFilter('${name}')">${name}<small>${name==="全部"?"60":10}</small></button>`}).join("")}
    </div>
    <div class="idiom-library-grid">
      ${visible.map(card=>{const e=emotion(card.emotion);return `<article class="idiom-library-card" style="--card-color:${e.color}"><div class="idiom-illustration"><img src="${card.image}" alt="${esc(card.word)}的可愛情境插圖" loading="lazy" decoding="async"></div><div class="idiom-library-copy"><span class="idiom-emotion-tag">${card.emotion}</span><h3>${card.word}</h3><p>${card.meaning}</p></div></article>`}).join("")}
    </div>`;
}
function resetGame(){localStorage.removeItem("sel-idiom-game");state=null;document.getElementById("confirmDialog").close();setupPage();}

function registerWebMcpTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const toolError = error => console.warn("WebMCP tool registration failed", error);
  try {
    Promise.resolve(context.registerTool({
      name: "start_sel_idiom_game",
      title: "開始SEL成語遊戲",
      description: "設定2至4位玩家與關卡，開始新的SEL情緒成語遊戲。",
      inputSchema: {
        type: "object",
        properties: {
          level: { type: "integer", minimum: 1, maximum: 3, description: "關卡編號1至3" },
          playerNames: { type: "array", minItems: 2, maxItems: 4, items: { type: "string", minLength: 1, maxLength: 8 } }
        },
        required: ["level", "playerNames"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        if (!input || !Number.isInteger(input.level) || input.level < 1 || input.level > 3) throw new Error("level 必須是1、2或3");
        if (!Array.isArray(input.playerNames) || input.playerNames.length < 2 || input.playerNames.length > 4) throw new Error("玩家人數必須為2至4人");
        const names=input.playerNames.map(x=>String(x).trim());
        if (names.some(x=>!x || x.length>8)) throw new Error("每個玩家名字需為1至8個字");
        setup={count:names.length,level:input.level,names};
        beginGame();
        return { started:true, level:state.level, players:state.players.map(p=>p.name), phase:state.phase };
      }
    })).catch(toolError);
    Promise.resolve(context.registerTool({
      name: "read_sel_idiom_game_state",
      title: "讀取遊戲進度",
      description: "讀取目前關卡、輪到的玩家、回合與公開分數。",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute() {
        if (!state) return { started:false };
        return { started:true, level:state.level, round:state.round, currentPlayer:state.players[state.current]?.name, phase:state.phase, ended:state.ended, players:state.players.map(p=>({name:p.name,score:p.score,position:p.position,missions:p.missions,completed:p.completed,emotionPoints:{...p.banks}})) };
      }
    })).catch(toolError);
  } catch (error) { toolError(error); }
}

setupPage();
registerWebMcpTools();
