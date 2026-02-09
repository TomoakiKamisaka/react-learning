
export default function App() {
  return (
    <>
      <div className="Header">
        <h1>CM広告枠管理システム</h1>
        <CMSlotManagementBoard />
      </div>
    </>
  )
};

function CMSlotManagementBoard(){
  return(
    <div className="cMSlotManagementBoard">
      <AdvertiserSearchBar />
      <AvailableAdvertiserPool />
      <ProgramScheduleGrid />
    </div>

  )
};

//サブコンポーネント:Seach
// 検索バー
function AdvertiserSearchBar(){
  return(
    <input type="text" placeholder="広告主を検索" />
  )
};

// 広告主タグエリア
function AvailableAdvertiserPool(){
  return(
    <div className="availableAdvertiserPool">
      <h3>利用可能な広告主(ドラッグして配置)</h3>
      <AdvertiserTag />
    </div>
  )
};

//個別の広告主タグ
function AdvertiserTag(){
  return(
    <div className="advertiserTag">
      <button>広告主A</button>
      <button>広告主B</button>
      <button>広告主C</button> 
    </div>
  )
}

//サブコンポーネント:ProgramArea
//番組スケジュールグリッド
function ProgramScheduleGrid(){
  return(
    <div className="ProgramArea">
        <h2>番組一覧</h2>
        <div className="programScheduleGrid">
        <ProgramSlotRow />
      </div>
    </div>
  ) 
}

//番組行
function ProgramSlotRow(){
  return(
    <div className="programSlotRow">
      <ProgramInfo />
      <ul>
        <li><AdSoldCard /></li>
        <li><AdSoldCard /></li>
        <li><AdSoldCard /></li>
      </ul>
    </div>
  )
}
//番組情報
function ProgramInfo(){
  return(
    <div classNme="programInfo">
      <h3>モーニングニュース</h3>
      <p>7:00-8:00</p>
      <p>0/6</p>
    </div>
  )
}

//個別の広告主枠
function AdSoldCard(){
  return(
    <div classNme="adSoldCard">
      <text>空枠1</text>
    </div>
  )
}

