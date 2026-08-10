# React チュートリアル: 三目並べ (Tic-Tac-Toe)

[React公式チュートリアル](https://ja.react.dev/learn/tutorial-tic-tac-toe)をベースにした三目並べです。Create React App (`react-scripts`) を使用しています。チュートリアル本編に加えて、以下の拡張課題を実装しています。

## 🎮 機能

- 基本の三目並べ（X / ⚪︎ で交互に対戦、勝敗・引き分け判定）
- 勝利ラインのハイライト表示
- 着手履歴の一覧表示、任意の手番へのジャンプ（タイムトラベル）
- 各手番の履歴に、変更されたマスの行・列番号を表示
- 履歴表示順を昇順・降順で切り替えるボタン

## 🔧 必要な環境

- **Node.js**: v20 以上推奨
- **npm**: v10 以上推奨

## 🚀 開発開始手順

```bash
npm install
npm start
```

実行後、ターミナルに表示されるURL（通常は `http://localhost:3000`）をブラウザで開きます。

## 📝 利用可能なコマンド

| コマンド | 説明 |
| --- | --- |
| `npm start` | 開発サーバーを起動（ホットリロード有効） |
| `npm run build` | 本番用にビルド（`build` フォルダに出力） |
| `npm test` | react-scripts (Jest) をテストランナーとして起動。ただしテストファイルは未作成 |

## 📂 プロジェクト構造

```
react-tutorial-tic-tac-toe/
├── public/
│   └── index.html
├── src/
│   ├── index.js   # エントリーポイント
│   ├── App.js     # Game / Board / Square コンポーネント
│   └── styles.css
└── package.json
```

## ⚠️ 注意事項

- ESLint / Prettier / CIは設定されていません。学習用の完結したコードとして、大きな構成変更は基本的に行わない想定です。
- `npm test` は `react-scripts` 標準のJest実行環境を起動しますが、テストファイルは1つも存在しません。

## 🔗 参考リンク

- [React 公式チュートリアル: 三目並べ](https://ja.react.dev/learn/tutorial-tic-tac-toe)
- [Create React App 公式ドキュメント](https://create-react-app.dev/)
