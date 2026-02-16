import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const ADVERTISERS = [
  { AdvertiserId: "000001", Name: "サントリー", ArrangeFlag: true },
  { AdvertiserId: "000002", Name: "トヨタ", ArrangeFlag: true },
  { AdvertiserId: "000003", Name: "ソニー", ArrangeFlag: true },
  { AdvertiserId: "000004", Name: "パナソニック", ArrangeFlag: true },
  { AdvertiserId: "000005", Name: "日清食品", ArrangeFlag: true },
  { AdvertiserId: "000006", Name: "キリン", ArrangeFlag: true },
];

const PROGRAMS = [
  { programId: "000001", programName: "朝のニュース", time: "7:00-8:00" },
  { programId: "000002", programName: "情報バラエティ", time: "9:00-10:00" },
  { programId: "000003", programName: "昼のドラマ", time: "12:00-13:00" },
  { programId: "000004", programName: "夕方ニュース", time: "18:00-19:00" },
];

export default function App() {
  return (
    <>
      {/* ヘッダー */}
      <h1 style={{ backgroundColor: "#6ec2f0", color: "white" }}>
        CM広告枠管理システム
      </h1>
      {/* メインコンテンツ */}
      <CMSlotManagementBoard />
    </>
  );
}

//CMローテーション管理ボード
function CMSlotManagementBoard() {
  return (
    <>
      <AdvertiserSearchBar />
      <AvailableAdvertiserPool advertisers={ADVERTISERS} />
      <ProgramScheduleGrid programList={PROGRAMS} />
    </>
  );
}

// 検索バー
function AdvertiserSearchBar() {
  return (
    <Box sx={{ width: 500, maxWidth: "100%" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="広告主を検索"
        variant="outlined"
      />
    </Box>
  );
}

// 配置可能広告主プール
function AvailableAdvertiserPool({ advertisers }) {
  return (
    <>
      <h3>利用可能な広告主(ドラッグして配置)</h3>
      <AdvertiserTagList advertisers={advertisers} />
    </>
  );
}

// 広告主タグ一覧
function AdvertiserTagList({ advertisers }) {
  // 広告主リストから各広告主の行コンポーネントを生成
  const freeAdvertisers = advertisers
    .filter((advertiser) => advertiser.ArrangeFlag)
    .map((advertiser) => (
      <Grid size="auto" key={advertiser.AdvertiserId}>
        <Button variant="outlined" fullWidth>
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
function ProgramScheduleGrid({ programList }) {
  // 番組リストから各番組の行コンポーネントを生成
  const programSlotRows = programList.map((program) => (
    <ProgramSlotRow
      programName={program.programName}
      time={program.time}
      key={program.programId}
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
function ProgramSlotRow({ programName, time }) {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "grey.300",
        borderRadius: 2,
        p: 2,
        mb: 2,
        bgcolor: "white",
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
            <AdSlotCard slotNumber={number} />
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
function AdSlotCard({ slotNumber }) {
  return (
    <Box
      sx={{
        border: "2px dashed",
        borderColor: "grey.300",
        borderRadius: 2,
        p: 2,
        minHeight: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "grey.50",
        color: "grey.500",
        fontSize: 14,
      }}
    >
      <span>空枠{slotNumber}</span>
    </Box>
  );
}
