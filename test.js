import test from 'ava'
import path from 'path'
import currentPkg from './'

test('normal', t => {
	const {pkg, error} = currentPkg()
	t.ok(pkg.name)
	t.notOk(error)
})

test('no package', t => {
	const {error} = currentPkg(path.join(__dirname, '..'))
	t.true(error instanceof Error)
})
