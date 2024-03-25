const { skillcheckTreeInversion, TASK } = require("./task-4")

describe("tree inversion", () => {
	it("возвращает объект с инвертированными значениями полей", () => {
		const resultExpected = {
			a: {
				b: 0, // исходное значение: 1
				c: { d: 1, e: 0 }, // исходное значение: d: 0, e: 1
				f: 1, // исходное значение: 0
			},
			g: 1, // исходное значение: 0
			h: 0, // исходное значение: 1
		}

		const result = skillcheckTreeInversion(TREE)

		expect(result).toStrictEqual(resultExpected)
	})
})
