# react-learning

React学習用のリポジトリです。共有の `package.json` やワークスペース設定は持たず、独立した2つのプロジェクトが同居しています。

## プロジェクト一覧

| プロジェクト | 内容 | スタック | 状態 |
| --- | --- | --- | --- |
| [`react-training-Cmrotation/`](react-training-Cmrotation/) | CM広告枠管理システム（オリジナル実装） | Vite + React 19 + MUI | 開発中 |
| [`react-tutorial-tic-tac-toe/`](react-tutorial-tic-tac-toe/) | [React公式チュートリアル](https://ja.react.dev/learn/tutorial-tic-tac-toe)の三目並べ（拡張課題込み） | Create React App | 学習用・ほぼ完成 |

各プロジェクトのセットアップ手順・利用可能なコマンドは、それぞれのディレクトリ内のREADMEを参照してください。

## Claude Codeでの開発

このリポジトリでClaude Codeを使う場合は、ルートの [`CLAUDE.md`](CLAUDE.md) と `react-training-Cmrotation/CLAUDE.md` に規約・コマンドをまとめています。`.claude/settings.json` に権限許可リストや保存時フォーマットフック、チーム共通で有効化するプラグイン設定も含まれています。
