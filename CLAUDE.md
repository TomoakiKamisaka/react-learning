# react-learning リポジトリについて

このリポジトリは共有の `package.json` やワークスペース設定を持たない、独立した2つのReact学習プロジェクトの集合（ポリレポ構成）です。作業対象のディレクトリに応じて規約・コマンドが異なります。

## サブプロジェクト

- **`react-training-Cmrotation/`** — CM広告枠管理ボード。Vite + React 19 + MUI によるオリジナル実装で、活発に開発中。ESLint / Prettier / Husky+lint-staged / CI(lint.yml) が整備されている。詳細は [`react-training-Cmrotation/CLAUDE.md`](react-training-Cmrotation/CLAUDE.md) と [`react-training-Cmrotation/README.md`](react-training-Cmrotation/README.md) を参照。
- **`react-tutorial-tic-tac-toe/`** — React公式チュートリアルのtic-tac-toe（Create React App）。ツールチェイン・CIなしのほぼ凍結状態の学習コード。変更する場合はCRA標準の `npm start` / `npm test` を使う。

作業前に、対象がどちらのディレクトリかを確認し、そのディレクトリに `cd` してからコマンドを実行すること。

## コミット・PR運用

- コミットメッセージは日本語（例: `機能追加：〜`、`修正：〜`）が基本。ツール整備・CI設定などは英語でも可。
- ブランチ名は `feat/<kebab-topic>` の形式に揃える。
- PRは [`.github/pull_request_template.md`](.github/pull_request_template.md) のフォーマットに従う。
- コードレビューやPR関連の作業（`/code-review` など）では [`.github/copilot-instructions.md`](.github/copilot-instructions.md) のルールに従うこと: 日本語でコメントする、指摘には重大度（Critical/High/Medium/Low）を付ける、セキュリティ→パフォーマンス→型安全性→可読性の順で確認する、依頼範囲外のリファクタ・命名変更・ファイル移動は行わない。
