// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // テスト環境の next.config.js と .env ファイルを読み込むために、Next.js アプリケーションへのパスを記載する
  dir: "./",
});

// Jest に渡すカスタム設定を追加する
const customJestConfig = {
  // 各テストの実行前に渡すオプションを追加
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // TypeScript の設定で baseUrl をルートディレクトリに設定している場合、alias を動作させるためには以下のようにする必要があります
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig は、非同期で next/jest が Next.js の設定を読み込めるようにするため、下記のようにエクスポートします
module.exports = createJestConfig(customJestConfig);

/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node", // Reactコンポーネントのテストに必要
  testPathIgnorePatterns: ["/node_modules/", "/.next/"], // テスト対象から除外するパス
  moduleNameMapper: {
    // CSSや画像ファイルなどのモジュールをモックする設定
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Jestの設定を行うファイル
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // サポートするファイル拡張子};
};
