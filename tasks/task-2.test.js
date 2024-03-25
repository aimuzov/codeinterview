const { skillcheckPrototype } = require("./task-2")

describe("prototype", () => {
	it("В массивах 'a' и 'b' ожидаемый результат", () => {
		const result = skillcheckPrototype()
		const resultExpected = {
			a: [],
			b: [],
		}

		expect(result).toEqual(resultExpected)
	})
})
