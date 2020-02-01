export class Data {
	transactions = [
		{
			tid: 't-1',
			amount: 500,
			date: new Date().toISOString(),
			reason: 'Resteraunt Bill 1',
			paid_by: 'a',
			owed_by: ['a', 'b', 'c', 'd']
		},
		{
			tid: 't-2',
			amount: 500,
			date: new Date().toISOString(),
			reason: 'Resteraunt Bill 2',
			paid_by: 'b',
			owed_by: ['a', 'b', 'c', 'd']
		},
		{
			tid: 't-3',
			amount: 500,
			date: new Date().toISOString(),
			reason: 'Resteraunt Bill 3',
			paid_by: 'a',
			owed_by: ['a', 'b']
		},
		{
			tid: 't-4',
			amount: 500,
			date: new Date().toISOString(),
			reason: 'Resteraunt Bill 4',
			paid_by: 'a',
			owed_by: ['a', 'b']
		}
	];
}
