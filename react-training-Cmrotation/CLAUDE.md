# react-training-Cmrotation

CM広告枠管理ボード（ドラッグ&ドロップでの広告枠割り当て）。Vite + React 19 + MUI(Emotion)。TypeScript・テストフレームワークは未導入。

## コマンド

- 開発サーバー起動: `npm run dev` （`npx dev` ではない）
- Lint: `npm run lint`
- Format適用: `npm run format`
- Format確認（CIと同じ）: `npm run format:check`
- ビルド: `npm run build`
- プレビュー: `npm run preview`

## 規約

- コンポーネントは `function` 宣言で定義する（アロー関数の `const X = () => {}` は使わない）。
- 現状 `src/App.jsx` に複数コンポーネントを集約する単一ファイル構成。`components/` 等のディレクトリ分割は未導入なので、依頼されていない限り勝手に分割しない。
- スタイリングは MUI コンポーネントの `sx` プロップを使う。`App.css` / `index.css` はリセット用途のみ。
- ドメインデータ（`ADVERTISERS`, `PROGRAMS` など）は `UPPER_SNAKE_CASE` の定数としてファイル先頭に定義する。
- コメントは日本語で処理意図を説明する。
- pre-commit で husky + lint-staged が `eslint --fix` / `prettier --write` を自動実行する（`.husky/pre-commit`）。
- CI（`.github/workflows/lint.yml`）はこのディレクトリ配下の変更のみを対象に `npm run lint` と `npm run format:check` を実行する。
