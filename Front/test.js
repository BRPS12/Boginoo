beforeAll(async () => {
  console.log("im logging out before all of those functions execute");
});

afterAll(async () => {
  console.log("im logging out after all of those functions executed");
});

const helloName = (name) => {
  return `Hello ${name}`;
};

describe("Our very first test", () => {
  it("First taste case", async () => {
    const a = 2;
    const b = "4";
    const c = 7;
    console.log("im the logging of of first case");
    const result = a + b + c;
    expect(result).toBe("247");
  });
  it("Second taste case", async () => {
    const result = helloName("Javkhaa");
    expect(result).toBe("Hello Javkhaa");
  });
  it("Third taste case", async () => {
    const result = helloName("Javkhaa");
    expect(result).toBe("Hello Javkhaa");
  });
});
