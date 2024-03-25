const { skillcheckEventloop } = require("./task-1")

describe("eventloop", () => {
	it("В массив будут добавлены элементы в определённом порядке", async () => {
		const promise = skillcheckEventloop()
		const result = await promise
		const resultExpected = []

		expect(result).toEqual(resultExpected)
	})
})
