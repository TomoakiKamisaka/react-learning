import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';

//データ(ハードコーディング)
//広告主
const ADVERTISERS = [
  { advertiserId: '000001', Name: 'サントリー', arrangeFlag: true },
  { advertiserId: '000002', Name: 'トヨタ', arrangeFlag: true },
  { advertiserId: '000003', Name: 'ソニー', arrangeFlag: true },
  { advertiserId: '000004', Name: 'パナソニック', arrangeFlag: true },
  { advertiserId: '000005', Name: '日清食品', arrangeFlag: true },
  { advertiserId: '000006', Name: 'キリン', arrangeFlag: true },
];
//番組名
const PROGRAMS = [
  { programId: '000001', programName: '朝のニュース', time: '7:00-8:00' },
  { programId: '000002', programName: '情報バラエティ', time: '9:00-10:00' },
  { programId: '000003', programName: '昼のドラマ', time: '12:00-13:00' },
  { programId: '000004', programName: '夕方ニュース', time: '18:00-19:00' },
];

//画面全体
export default function App() {
  return (
    <>
      {/* ヘッダー */}
      <Header />
      {/* メインコンテンツ */}
      <CMSlotManagementBoard />
    </>
  );
}

//ヘッダー
function Header() {
  return <h1 style={{ backgroundColor: '#6ec2f0', color: 'white' }}>CM広告枠管理システム</h1>;
}

//CMローテーション管理ボード
function CMSlotManagementBoard() {
  const [filterText, setFilterText] = useState('');
  const [addAdvertiserText, setAddAdvertiserText] = useState('');
  const [advertisers, setAdvertisers] = useState(ADVERTISERS);

  //広告主をドロップした場合に広告主の空き枠フラグ変更する機能
  function handleDropAdvertiser(advertiserId) {
    //広告主No.が一致する該当広告主の配置フラグをOFFにする
    let newAdvertisers = advertisers.map((advertiser) => {
      if (advertiser.advertiserId === advertiserId) {
        return { ...advertiser, arrangeFlag: false };
      } else {
        return advertiser;
      }
    });
    //広告主リストをuseStateにセットする(レンダリング)
    setAdvertisers(newAdvertisers);
  }

  //広告主を新規追加する機能
  function handleAddAdvertiser() {
    //ガード節:入力された広告主名が空文字・空白のみの場合、この関数の実行は終了
    if (!addAdvertiserText.trim()) return;

    //新しい広告主オブジェクトを作る
    const newAdvertiser = {
      advertiserId: String(Date.now()),
      Name: addAdvertiserText,
      arrangeFlag: true,
    };

    //スプレッド構文で新しい配列を作る
    const newAdvertisers = [...advertisers, newAdvertiser];
    //advertisersにセットする
    setAdvertisers(newAdvertisers);
    //入力欄を空に戻す
    setAddAdvertiserText('');
  }

  return (
    <>
      <AdvertiserSearchBar filterText={filterText} onfilterTextChange={setFilterText} />
      <Grid container spacing={2}>
        <Grid size={4}>
          <TextField
            id="outlined-basic"
            label="追加したい広告主を入力"
            variant="outlined"
            value={addAdvertiserText}
            onChange={(e) => setAddAdvertiserText(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid size={2}>
          <Button onClick={handleAddAdvertiser} variant="contained">
            広告主追加
          </Button>
        </Grid>
      </Grid>

      <AvailableAdvertiserPool advertisers={advertisers} filterText={filterText} />
      <ProgramScheduleGrid
        programList={PROGRAMS}
        onDropAdvertiser={handleDropAdvertiser}
        advertisers={advertisers}
      />
    </>
  );
}

// 検索バー
function AdvertiserSearchBar({ filterText, onfilterTextChange }) {
  return (
    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="広告主を検索"
        variant="outlined"
        value={filterText}
        onChange={(e) => onfilterTextChange(e.target.value)}
      />
    </Box>
  );
}

// 配置可能広告主プール
function AvailableAdvertiserPool({ advertisers, filterText }) {
  return (
    <>
      <h3>利用可能な広告主(ドラッグして配置)</h3>
      <AdvertiserTagList advertisers={advertisers} filterText={filterText} />
    </>
  );
}

// 広告主タグ一覧
function AdvertiserTagList({ advertisers, filterText }) {
  // 広告主リストから各広告主のボタンを生成
  const freeAdvertisers = advertisers
    //配置フラグがtrue and 検索テキストに含まれる広告主を絞り込み
    .filter((advertiser) => advertiser.arrangeFlag)
    .filter((advertiser) => advertiser.Name.includes(filterText))
    .map((advertiser) => (
      <Grid size="auto" key={advertiser.advertiserId}>
        <Button
          draggable
          onDragStart={(e) => e.dataTransfer.setData('text', advertiser.advertiserId)}
          variant="outlined"
          fullWidth
        >
          {advertiser.Name}
        </Button>
      </Grid>
    ));

  return (
    <Grid container spacing={1}>
      {freeAdvertisers}
    </Grid>
  );
}

// 番組スケジュールグリッド
function ProgramScheduleGrid({ programList, onDropAdvertiser, advertisers }) {
  // 番組リストから各番組の行コンポーネントを生成
  const programSlotRows = programList.map((program) => (
    <ProgramSlotRow
      programName={program.programName}
      time={program.time}
      key={program.programId}
      onDropAdvertiser={onDropAdvertiser}
      advertisers={advertisers}
    />
  ));

  return (
    <>
      <h3>番組一覧</h3>
      {programSlotRows}
    </>
  );
}

// 番組行（1番組分）
function ProgramSlotRow({ programName, time, onDropAdvertiser, advertisers }) {
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 2,
        p: 2,
        mb: 2,
        bgcolor: 'white',
      }}
    >
      <Grid container spacing={1}>
        {/* 番組情報: 2/12 */}
        <Grid size={2}>
          <ProgramInfo programName={programName} time={time} />
        </Grid>
        {/* 広告枠: 各1/12 × 6枠 = 6/12、残り4/12は空き */}
        {[1, 2, 3, 4, 5, 6].map((number) => (
          <Grid size={1} key={number}>
            <AdSlotCard
              slotNumber={number}
              onDropAdvertiser={onDropAdvertiser}
              advertisers={advertisers}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// 番組情報
function ProgramInfo({ programName, time }) {
  return (
    <>
      <h3>{programName}</h3>
      <p>{time}</p>
      <p>0/6</p>
    </>
  );
}

// 広告枠カード
function AdSlotCard({ slotNumber, onDropAdvertiser, advertisers }) {
  const [akiwaku, setAkiwaku] = useState('');
  return (
    <Box
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const advertiserId = e.dataTransfer.getData('text');
        // 配置処理
        const advertiser = advertisers.find(
          (advertiser) => advertiser.advertiserId === advertiserId
        );
        setAkiwaku(advertiser.Name);
        onDropAdvertiser(advertiserId);
      }}
      sx={{
        border: '2px dashed',
        borderColor: 'grey.300',
        borderRadius: 2,
        p: 2,
        minHeight: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'grey.50',
        color: 'grey.500',
        fontSize: 14,
      }}
    >
      <span>{akiwaku ? akiwaku : `空枠${slotNumber}`}</span>
    </Box>
  );
}
