# unbelong - マンガ閲覧サイト

unbelongプラットフォームのマンガ閲覧用フロントエンドサイトです。

## 技術スタック

- **フレームワーク**: Next.js 14.2.18 (App Router)
- **言語**: TypeScript 5
- **スタイリング**: Tailwind CSS 3
- **HTTP クライアント**: Axios 1.6.2
- **マークダウン**: react-markdown 9.0.1

## 開発環境

### 前提条件

- Node.js 20以上
- npm 10以上

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動（ポート3001）
npm run dev

# 本番ビルド
npm run build

# 本番サーバーの起動
npm start

# リント
npm run lint
```

### 環境変数

環境変数は `.env.local` ファイルで設定できます:

```env
NEXT_PUBLIC_API_URL=https://unbelong-api.belong2jazz.workers.dev
```

デフォルト値（環境変数未設定時）:
- `NEXT_PUBLIC_API_URL`: `http://localhost:8787`

## デプロイ

### Cloudflare Pages

このサイトは Cloudflare Pages にデプロイされます。

**ビルド設定:**
- ビルドコマンド: `npm run build`
- ビルド出力ディレクトリ: `.next`
- Node.js バージョン: 20

**環境変数（Cloudflare Pages）:**
- `NODE_VERSION`: `20`
- `NEXT_PUBLIC_API_URL`: `https://unbelong-api.belong2jazz.workers.dev`

## プロジェクト構成

```
unbelong-comic/
├── app/                 # Next.js App Router ページ
├── components/          # Reactコンポーネント
├── lib/                 # ユーティリティ関数
├── public/              # 静的ファイル
├── types/               # TypeScript型定義
├── next.config.js       # Next.js設定
├── tailwind.config.ts   # Tailwind CSS設定
└── tsconfig.json        # TypeScript設定
```

## API連携

このサイトは Cloudflare Workers で動作する API サーバーと連携します:
- **本番**: https://unbelong-api.belong2jazz.workers.dev
- **開発**: http://localhost:8787

## ライセンス

UNLICENSED - Private project
# 環境変数設定後の再ビルド
