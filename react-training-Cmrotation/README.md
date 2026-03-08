# React トレーニングプロジェクト (CMRotation)

このプロジェクトは React の学習用プロジェクトです。Vite をビルドツールとして使用し、Material-UI (MUI) でUIコンポーネントを構築します。

## 📋 プロジェクト概要

- **React**: 19.2.0
- **ビルドツール**: Vite 7.3.1
- **UI ライブラリ**: Material-UI (MUI) 7.3.8
- **スタイリング**: Emotion
- **リンター**: ESLint

## 🔧 必要な環境

開発を始める前に、以下がインストールされていることを確認してください：

- **Node.js**: v18 以上推奨
- **npm**: v9 以上推奨

### 環境確認コマンド

```bash
node -v  # Node.js のバージョン確認
npm -v   # npm のバージョン確認
```

## 🚀 開発開始手順

### 1. 依存パッケージのインストール

プロジェクトディレクトリで以下のコマンドを実行します：

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

実行後、ターミナルに表示されるURL（通常は `http://localhost:5173`）をブラウザで開きます。

⚠️ **注意**: `npx dev` ではなく `npm run dev` を使用してください。

## 📝 利用可能なコマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動（ホットリロード有効） |
| `npm run build` | 本番用にビルド（`dist` フォルダに出力） |
| `npm run preview` | ビルドしたアプリをローカルでプレビュー |
| `npm run lint` | ESLint でコードチェック |

## 📂 プロジェクト構造

```
react-training-Cmrotation/
├── public/           # 静的ファイル（画像など）
├── src/              # ソースコード
│   ├── main.jsx      # アプリのエントリーポイント
│   ├── App.jsx       # メインのAppコンポーネント
│   ├── App.css       # Appコンポーネントのスタイル
│   ├── index.css     # グローバルスタイル
│   └── assets/       # 画像などのアセット
├── index.html        # HTMLテンプレート
├── package.json      # 依存関係とスクリプト定義
├── vite.config.js    # Vite の設定ファイル
└── eslint.config.js  # ESLint の設定ファイル
```

## 💡 開発のヒント

### ホットリロード（HMR）

Vite は高速なホットモジュールリプレースメント (HMR) を提供しています。ファイルを保存すると、ブラウザが自動的に更新されます。

### Material-UI の使用

このプロジェクトには Material-UI がインストールされています。以下のようにコンポーネントをインポートして使用できます：

```jsx
import { Button, TextField } from '@mui/material';

function MyComponent() {
  return (
    <div>
      <Button variant="contained">クリック</Button>
      <TextField label="名前" />
    </div>
  );
}
```

公式ドキュメント: [Material-UI](https://mui.com/)

### コードの品質チェック

コミット前に以下を実行することをおすすめします：

```bash
npm run lint
```

## 🔗 参考リンク

- [React 公式ドキュメント](https://ja.react.dev/)
- [Vite 公式ドキュメント](https://ja.vite.dev/)
- [Material-UI 公式ドキュメント](https://mui.com/)
- [ESLint 公式ドキュメント](https://eslint.org/)

## 📚 さらに学ぶには

### TypeScript への移行

本番アプリケーションを開発する場合は、TypeScript の使用を推奨します。
詳細は [Vite の TypeScript テンプレート](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) を参照してください。

### React Compiler について

React Compiler は開発とビルドのパフォーマンスへの影響を考慮し、このテンプレートでは有効化していません。
追加したい場合は [React Compiler のドキュメント](https://react.dev/learn/react-compiler/installation) を参照してください。
