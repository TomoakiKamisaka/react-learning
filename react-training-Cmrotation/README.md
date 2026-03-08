# React トレーニングプロジェクト (CMRotation)

このプロジェクトは React の学習用プロジェクトです。Vite をビルドツールとして使用し、Material-UI (MUI) でUIコンポーネントを構築します。

## 📋 プロジェクト概要

- **React**: 19.2.0
- **ビルドツール**: Vite 7.3.1
- **UI ライブラリ**: Material-UI (MUI) 7.3.8
- **スタイリング**: Emotion
- **リンター**: ESLint 9.39.1
- **フォーマッター**: Prettier 3.8.1
- **Git フック**: Husky 9.1.7
- **ステージド ファイル チェック**: lint-staged 16.3.2

## 🔧 必要な環境

開発を始める前に、以下がインストールされていることを確認してください：

- **Node.js**: v20.17 以上推奨
- **npm**: v10 以上推奨

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
| `npm run lint:staged` | lint-staged でステージングエリアのファイルをチェック |
| `npm run format` | Prettier ですべてのファイルを自動整形 |
| `npm run format:check` | Prettier でフォーマット状態をチェック（自動整形しない） |

## 📂 プロジェクト構造

```
react-training-Cmrotation/
├── .github/          # GitHub 設定
├── .husky/           # Husky Git フック
├── public/           # 静的ファイル（画像など）
├── src/              # ソースコード
│   ├── main.jsx      # アプリのエントリーポイント
│   ├── App.jsx       # メインのAppコンポーネント
│   ├── App.css       # Appコンポーネントのスタイル
│   ├── index.css     # グローバルスタイル
│   └── assets/       # 画像などのアセット
├── .prettierrc       # Prettier の設定ファイル
├── .prettierignore   # Prettier で無視するファイルの指定
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

### コード品質管理

本プロジェクトには、以下のツールによるコード品質管理が自動化されています：

#### Prettier（コードフォーマッター）

すべてのファイルを一貫したスタイルで自動整形します。

```bash
npm run format        # ファイルを自動整形
npm run format:check  # フォーマット状態をチェック
```

#### Husky と lint-staged

コミット前に自動的にコードチェック・整形を実行します。以下のフックが設定されています：

- **pre-commit**: git commit 実行時に `npm run lint:staged` が自動実行され、ステージングエリアのファイルに対して ESLint と Prettier が実行されます。ブロッキングエラーがある場合、コミットが中止されます。

```bash
# 通常、git commit すると自動実行される
git commit -m "更新"

# 手動実行も可能
npm run lint:staged
```

#### ESLint（リンター）

コードの品質をチェックします。

```bash
npm run lint  # ESLint でコードチェック
```

#### GitHub Actions による CI

push または PR 時に GitHub Actions で自動的に ESLint と Prettier チェックが実行されます。詳細は [.github/workflows/lint.yml](../.github/workflows/lint.yml) を参照してください。

## 🔗 参考リンク

- [React 公式ドキュメント](https://ja.react.dev/)
- [Vite 公式ドキュメント](https://ja.vite.dev/)
- [Material-UI 公式ドキュメント](https://mui.com/)
- [ESLint 公式ドキュメント](https://eslint.org/)
- [Prettier 公式ドキュメント](https://prettier.io/)
- [Husky ドキュメント](https://typicode.github.io/husky/)
- [lint-staged ドキュメント](https://github.com/lint-staged/lint-staged)

## 📚 さらに学ぶには

### TypeScript への移行

本番アプリケーションを開発する場合は、TypeScript の使用を推奨します。
詳細は [Vite の TypeScript テンプレート](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) を参照してください。

### React Compiler について

React Compiler は開発とビルドのパフォーマンスへの影響を考慮し、このテンプレートでは有効化していません。
追加したい場合は [React Compiler のドキュメント](https://react.dev/learn/react-compiler/installation) を参照してください。
