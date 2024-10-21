it("First mock", () => {
  const mockFunc = jest.fn(() => "Hello mock");
  expect(mockFunc()).toBe("Hello mock");
});
