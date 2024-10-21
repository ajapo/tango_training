import nextJest from "next/jest.js";
// jest.config.js

const createJestConfig = nextJest({
  // テスト環境の next.config.js と .env ファイルを読み込むために、Next.js アプリケーションへのパスを記載する
  dir: "./", // Next.jsアプリケーションへのパス
});

const config = nextJest({
  testEnvironment: "jsdom",
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"], // テスト対象から除外するパス
  moduleNameMapper: {
    // CSSや画像ファイルなどのモジュールをモックする設定
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // サポートするファイル拡張子};
});

// createJestConfig は、非同期で next/jest が Next.js の設定を読み込めるようにするため、下記のようにエクスポートします
export default createJestConfig(config);
