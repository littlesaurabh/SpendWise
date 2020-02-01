const customers = [
	{
		name: 'Shashank',
		email: 'shashankshukla96@gmail.com',
		friends: [
			'littlesaurabh@gmail.com',
			'abcd@gmail.com',
			'efgh@gmail.com',
			'ijkl@gmail.com'
		],
		groups: [
			{
				name: 'Trip 1',
				members: ['littlesaurabh@gmail.com', 'abcd@gmail.com'],
				transactions: [
					{
						name: 'Resteraunt Bill',
						amount: 2000,
						date: '10 Jan 2020',
						paidBy: 'littlesaurabh@gmail.com'
					},
					{
						name: 'Daaru Bill',
						amount: 1000,
						date: '10 Jan 2020',
						paidBy: 'abcd@gmail.com'
					}
				]
			},
			{
				name: 'Trip 2',
				members: ['littlesaurabh@gmail.com'],
				transactions: [
					{
						name: 'Resteraunt Bill',
						amount: 2000,
						date: '10 Jan 2020',
						paidBy: 'littlesaurabh@gmail.com'
					},
					{
						name: 'Daaru Bill',
						amount: 1000,
						date: '10 Jan 2020',
						paidBy: 'shashankshukla96@gmail.com'
					}
				]
			}
		]
	}
];
