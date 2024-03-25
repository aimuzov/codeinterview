describe("palyndrome", () => {
	const cases = [
		["Довод", true, 2],
		["Вывод", false, 1],
		["Я с уколов - еле волокуся.", true, 12],
	]

	it.each(cases)(
		"Строка '%s' является палиндромом (%s), проверено за %s итераций",
		(value, passedExpected, iterationsExpected) => {
			const [passed, iterations] = skillcheckPalyndrome(value)

			expect(passed).toEqual(passedExpected)
			expect(iterations).toEqual(iterationsExpected)
		},
	)
})
