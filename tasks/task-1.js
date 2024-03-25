/**
 * Добавляет в массив циферки,
 * через секунду возвращает массив
 * с добавленными циферками.
 */
module.exports.skillcheckEventloop = function () {
	const arr = []

	setTimeout(() => {
		Promise.resolve().then(() => {
			arr.push(1)
		})
	})

	void new Promise((resolve) => {
		arr.push(2)
		resolve()
	})

	setTimeout(() => {
		arr.push(3)
	})

	arr.push(4)

	return new Promise((r) => {
		setTimeout(() => {
			r(arr)
		}, 1000)
	})
}
