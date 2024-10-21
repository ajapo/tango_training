it("モック関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
});
