// const { describe } = require("yargs");
const multiply = require("./index");
const { add, calculate } = require("./calculate");
const myModule = require("./spy");
const { addToArray } = require("./arrayUtils");
// const fetchData = require("./fetchData");

describe("Multiply Test", () => {
  //Test Sute
  //   it("2 and 5 mulyiply euual 10", async () => {
  //     expect(multiply(2, 5)).toBe(10);
  //   });

  //   it("2 and 5 mulyiply euual 10", async () => {
  //     expect(multiply(2, 5)).not.toBe(1);
  //   });

  it("objectEquality", () => {
    const data = { alpha: "A" };
    data["beta"] = "B";
    expect(data).toEqual({ alpha: "A", beta: "B" });
  });

  it("Null Values ", () => {
    const value = null;
    expect(value).toBeNull();
    // expect(value).toBeDefined();
    // expect(value).not.toBeUndefined();
    // expect(value).toBeTruthy();
    // expect(value).toBeFalsy();
  });

  it("Number Comparision", () => {
    const value = 3 + 3;
    expect(value).toBeGreaterThan(5); //>
    expect(value).toBeGreaterThanOrEqual(5); //>=

    const floatValue = 0.2 + 0.1;
    expect(floatValue).toBeCloseTo(0.3, 5);

    expect("Developer").not.toMatch(/I/);
    expect("Developer").toMatch(/Dev/);
  });

  it("Array Matchers", () => {
    const todoList = [
      "Buy Groceries",
      "Clean Room",
      "Subscribe",
      "Like",
      "Comment",
    ];
    expect(todoList).toContain("Subscribe");
  });

  it("exception matches", () => {
    //exception matches
    function openInValidFile() {
      throw new Error("file not found");
    }

    expect(() => openInValidFile()).toThrow();
    expect(() => openInValidFile()).toThrow(Error);
    expect(() => openInValidFile()).toThrow("file not found");
  });

  it("Mocking test", () => {
    //exception matches
    const drink = jest.fn(() => true);
    drink();
    expect(drink).toHaveReturnedWith(true);
  });

  test("the data is chocolate using promise", () => {
    return multiply().then((data) => {
      expect(data).toBe("chocolate");
    });
  });

  test("the data is chocolate using promise", async () => {
    const data = await multiply();
    expect(data).toBe("chocolate");
  });

  test("ASYNC TEST", async () => {
    await expect(multiply()).resolves.toBe("chocolate");
  });
});

// jest.mock("./mathUtils");

// describe("TEST MOCK", () => {
//   test("calls add function with param", () => {
//     // const add = jest.fn((a, b) => a + b);
//     // add(1, 2);
//     calculate(1, 2, "add");
//     expect(add).toHaveBeenCalled();
//     // expect(add).toHaveBeenCalledWith(1, 2);
//   });
// });

//SPY...

//SPY
test("Should spy on function", () => {
  const spy = jest.spyOn(myModule, "myFunction");
  myModule.myFunction();
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});

describe("setup and teardownfunction..", () => {
  let testArray;
  beforeAll(() => {
    console.log("Before all test : initializearray", testArray);
    testArray = [];
  });

  afterAll(() => {
    console.log("After all test : clear", testArray);
    testArray = null;
  });

  beforeEach(() => {
    console.log("beforeEach all test : clear", testArray);
    testArray = [];
  });

  afterEach(() => {
    console.log("afterEach all test : clear", testArray);
    testArray = [];
  });

  test("add item to array", () => {
    addToArray(testArray, "ritik");
    expect(testArray).toContain("ritik");
  });
});
